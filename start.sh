#!/bin/sh
# Iniciar backend
cd /app/backend
npm start &

# Iniciar frontend
cd /app/frontend
npm start