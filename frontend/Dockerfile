# frontend/Dockerfile
FROM node:22

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Exponer el puerto por defecto de Vite
EXPOSE 5173

# Arranca el modo desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host"]
