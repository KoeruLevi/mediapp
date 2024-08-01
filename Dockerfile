# Etapa 1: Construcción del frontend
FROM node:14 as build

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Clonar el repositorio
RUN git clone https://github.com/KoeruLevi/mediprecio.git .

# Construir el frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Etapa 2: Configuración de backend y servidor Apache
FROM node:14

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el código del repositorio clonado
COPY --from=build /app /app

# Instalar dependencias del backend
WORKDIR /app/backend
RUN npm install

# Exponer puertos para el backend y Apache
EXPOSE 8000
EXPOSE 3000

# Instalar Apache
RUN apt-get update && apt-get install -y apache2 && apt-get clean

# Copiar archivos estáticos del frontend a la carpeta de Apache
RUN cp -r /app/frontend/build/* /var/www/html/

# Iniciar Apache y el backend
CMD service apache2 start && cd /app/backend && npm start