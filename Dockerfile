# Usar una imagen base de Node.js
FROM node:14

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Clonar el repositorio
RUN git clone https://github.com/KoeruLevi/mediprecio.git .

# Instalar dependencias del backend
WORKDIR /app/backend
RUN npm install

# Instalar dependencias del frontend
WORKDIR /app/frontend
RUN npm install

# Exponer puertos
EXPOSE 8000
EXPOSE 3000

# Comando para iniciar el backend y el frontend en modo desarrollo
CMD ["sh", "-c", "cd /app/backend && npm start & cd /app/frontend && npm start"]
