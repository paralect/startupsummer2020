#!/bin/bash
while sleep 1; do curl -X GET "localhost:7777/?n=$1"; done
