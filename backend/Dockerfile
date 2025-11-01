# backend/Dockerfile
FROM node:22

# Crear y usar directorio de trabajo
WORKDIR /app

# Copiar archivos de definición de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto del backend
EXPOSE 5000

# Comando de inicio
CMD ["npm", "run", "start"]
