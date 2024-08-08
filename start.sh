#!/bin/sh

# Esperar a que MySQL esté listo
/app/wait-for-it.sh database:3306 --timeout=30 --strict -- echo "MySQL está listo"

# Iniciar backend
cd /app/backend
npm start &

# Iniciar frontend
cd /app/frontend
npm start