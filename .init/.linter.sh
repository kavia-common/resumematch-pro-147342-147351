#!/bin/bash
cd /home/kavia/workspace/code-generation/resumematch-pro-147342-147351/react_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

