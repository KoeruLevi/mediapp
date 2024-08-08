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

# Copiar el script de inicio y el script wait-for-it
COPY start.sh /app/start.sh
COPY wait-for-it.sh /app/wait-for-it.sh
RUN chmod +x /app/start.sh /app/wait-for-it.sh

# Exponer puertos
EXPOSE 8000
EXPOSE 3000

# Comando para iniciar el backend y el frontend
CMD ["/app/start.sh"]