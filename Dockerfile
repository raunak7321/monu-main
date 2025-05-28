FROM node:18

WORKDIR /app

# Install backend deps
COPY package*.json ./
RUN npm install

# Copy backend files
COPY . .

# Build frontend
WORKDIR /app/front
RUN npm install && npm run build

# Back to backend
WORKDIR /app
EXPOSE 4100

CMD ["node", "server.js"]
