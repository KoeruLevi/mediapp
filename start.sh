#!/bin/sh
# Iniciar backend
cd /app/backend
npm start &


# Iniciar frontend
cd /app/frontend
npm start

#!/bin/bash
service apache2 start
cd /app/backend
npm start