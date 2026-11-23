"""Compare two snapshots. Usage: cmp.py BASE.json NEW.json"""
import sys, json, difflib
a=json.load(open(sys.argv[1])); b=json.load(open(sys.argv[2]))
print('routes base/new:',len(a),len(b))
miss=sorted(set(a)-set(b)); add=sorted(set(b)-set(a))
if miss: print('MISSING routes (%d):'%len(miss), *miss[:20], sep='\n  ')
if add: print('ADDED routes (%d):'%len(add), *add[:20], sep='\n  ')
bad=0
for k in sorted(set(a)&set(b)):
    x,y=a[k],b[k]
    diffs=[f for f in x if f!='text' and x[f]!=y.get(f)]
    if diffs:
        bad+=1
        if bad<=15:
            print('DIFF',k,diffs)
            for f in diffs:
                if f=='texthash': 
                    sm=difflib.SequenceMatcher(None,x['text'],y['text'],autojunk=False)
                    for op,i1,i2,j1,j2 in sm.get_opcodes()[:6]:
                        if op!='equal': print('   text',op,repr(x['text'][max(0,i1-20):i2+20][:120]),'->',repr(y['text'][max(0,j1-20):j2+20][:120]))
                elif f not in('textlen',): print('  ',f,'\n     base:',str(x[f])[:200],'\n     new: ',str(y.get(f))[:200])
print('pages with differences:',bad,'of',len(set(a)&set(b)))
