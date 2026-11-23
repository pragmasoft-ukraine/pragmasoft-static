"""Content snapshot of a built dist/: per-route normalised facts -> JSON. Usage: snap.py DIST OUT.json"""
import sys, os, re, json, hashlib
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s):
        super().__init__(); s.text=[]; s.skip=0; s.heads=[]; s.links=[]; s.imgs=[]; s.meta={}; s.title=''; s._t=False; s._h=None; s.canon=None; s.alts=[]; s.head=[]
    def handle_starttag(s,t,a):
        a=dict(a)
        if t in('script','style','noscript','svg'): s.skip+=1
        if t=='title': s._t=True
        if t in('h1','h2','h3','h4'): s._h=[]
        if t=='a' and a.get('href'): s.links.append(a['href'])
        if t=='img':
            src=(a.get('src') or '').split('?')[0]
            s.imgs.append((os.path.basename(src).split('.')[0] if src else '', ('' if ('alt' in a and a['alt'] is None) else a.get('alt'))))
        if t in('meta','link') and s.skip==0:
            if t=='meta' and (a.get('name') or a.get('property') or a.get('http-equiv')): s.head.append('meta:'+(a.get('name') or a.get('property') or a.get('http-equiv'))+'='+str(a.get('content')))
            if t=='link' and a.get('rel') in('canonical','alternate','icon','manifest','sitemap','apple-touch-icon','shortcut icon'): s.head.append('link:'+str(a.get('rel'))+':'+str(a.get('hreflang'))+'='+str(a.get('href')))
        if t=='meta':
            k=a.get('name') or a.get('property')
            if k in('description','og:title','og:description','robots'): s.meta[k]=a.get('content')
        if t=='link':
            if a.get('rel')=='canonical': s.canon=a.get('href')
            if a.get('rel')=='alternate' and a.get('hreflang'): s.meta['hreflang:'+a['hreflang']]=a.get('href')
    def handle_endtag(s,t):
        if t in('script','style','noscript','svg'): s.skip=max(0,s.skip-1)
        if t=='title': s._t=False
        if t in('h1','h2','h3','h4') and s._h is not None: s.heads.append(' '.join(''.join(s._h).split())); s._h=None
    def handle_data(s,d):
        if s._t: s.title+=d
        if s.skip: return
        s.text.append(d)
        if s._h is not None: s._h.append(d)
def snap(dist):
    out={}
    for root,_,files in os.walk(dist):
        for f in files:
            if not f.endswith('.html'): continue
            p=os.path.join(root,f); rel='/'+os.path.relpath(p,dist).replace('\\','/')
            p_=P(); p_.feed(open(p,encoding='utf-8',errors='replace').read())
            txt=' '.join(' '.join(p_.text).split())
            out[rel]={'title':' '.join(p_.title.split()),'canon':p_.canon,'meta':p_.meta,'heads':p_.heads,
              'links':sorted(set(l for l in p_.links if not l.startswith('#'))),'imgs':sorted(set(map(str,p_.imgs))),'head':sorted(p_.head),
              'textlen':len(txt),'texthash':hashlib.sha1(txt.encode()).hexdigest(),'text':txt}
    for f in ('sitemap-index.xml','sitemap-0.xml'):
        p=os.path.join(dist,f)
        if os.path.exists(p): out['@'+f]={'urls':sorted(re.findall(r'<loc>([^<]+)</loc>',open(p,encoding='utf-8').read()))}
    for p in [x for x in os.listdir(dist) if x.endswith('.xml') and 'sitemap' not in x]+[f'{l}/rss.xml' for l in('en','uk') if os.path.exists(os.path.join(dist,l,'rss.xml'))]:
        fp=os.path.join(dist,p); out['@'+p]={'items':open(fp,encoding='utf-8').read().count('<item>')}
    return out
if __name__=='__main__':
    json.dump(snap(sys.argv[1]),open(sys.argv[2],'w'),ensure_ascii=False); print('routes:',len(json.load(open(sys.argv[2]))))
