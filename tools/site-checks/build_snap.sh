#!/bin/bash
# usage: build_snap.sh NAME   (run inside the site clone). Applies a temporary deterministic-date patch, builds, snapshots, compares to baseline-pinned.
set -u
NAME=$1; S=${S:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)}
F=$(ls src/utils/blog.ts)
cp $F $S/blog.ts.orig
python3 -I - <<'PY'
import re
p='src/utils/blog.ts'; s=open(p).read()
s=s.replace("publishDate: rawPublishDate = new Date(),","publishDate: rawPublishDate = new Date(Date.UTC(2020, 0, 1) + (Array.from((post.filePath ? post.filePath.replace('src/content/post/', '') : id)).reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7) % 100000) * 60000),")
open(p,'w').write(s)
PY
rm -rf dist
npx astro build > $S/$NAME-build.log 2>&1; echo "exit $?" >> $S/$NAME-build.log
cp $S/blog.ts.orig $F
python3 -I $S/snap.py dist $S/$NAME.json >> $S/$NAME-build.log 2>&1
if [ "$NAME" != "base" ]; then python3 -I $S/cmp.py $S/baseline-pinned.json $S/$NAME.json > $S/$NAME-cmp.txt 2>&1; fi
echo finished >> $S/$NAME-build.log
