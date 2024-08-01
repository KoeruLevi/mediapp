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

# Construir el frontend
RUN npm run build

# Instalar el servidor estático de Node.js para servir el frontend
RUN npm install -g serve


# Exponer puertos
EXPOSE 8000 3000

# Comando para iniciar el backend y el frontend
CMD service mysql start && cd /app/backend && npm start & cd /app/frontend && serve -s build
