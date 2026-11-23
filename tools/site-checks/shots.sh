#!/bin/bash
# usage: shots.sh NAME PORT  (serves ./dist, shoots the 5 reference pages at 2 widths into $S/shots/NAME)
NAME=$1; PORT=$2; S=${S:-$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)}
I=/home/agent/.claude/plugins/cache/impeccable/impeccable/4.10.0/skills/impeccable/scripts/impeccable
(cd dist && python3 -m http.server $PORT >/dev/null 2>&1 & echo $! > $S/srv.pid)
sleep 2
for p in en/ uk/ en/contact/ en/projects/2/ en/category/java/; do n=$(echo $p | tr '/' '_'); $I shot http://localhost:$PORT/$p --viewport 390x844,1280x800 --full --out $S/shots/$NAME/$n >/dev/null 2>&1; done
kill $(cat $S/srv.pid)
