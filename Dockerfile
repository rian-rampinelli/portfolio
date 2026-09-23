FROM node:22-alpine 
WORKDIR /app

COPY src /app/src
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
COPY index.html /app/index.html
COPY vite.config.js /app/vite.config.js
COPY public /app/public

RUN npm install
RUN npm run build

EXPOSE 5173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]

