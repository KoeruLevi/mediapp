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

# Instalar Apache
RUN apt-get update && apt-get install -y apache2 && rm -rf /var/lib/apt/lists/*

# Copiar archivos construidos del frontend a la carpeta de Apache
RUN mkdir -p /var/www/html
COPY --from=build /app/frontend/build /var/www/html

# Configurar Apache
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN sed -i 's!/var/www/html!/var/www/html!' /etc/apache2/sites-available/000-default.conf

# Exponer puertos
EXPOSE 3000 
EXPOSE 8000

# Comando para iniciar Apache y el backend en modo desarrollo
CMD service apache2 start && cd /app/backend && npm start