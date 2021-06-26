#!/bin/bash
#stop existing node servers
pid=`sudo netstat -tnlp | grep :3000 | awk '{ print $7 }' | cut -f 1 -d '/'`
kill -9 $pid
