#!/bin/bash
service apache2 start
cd /app/backend && npm start &
cd /app/frontend && npm start