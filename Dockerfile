FROM node:14

WORKDIR /usr/expressGuide

COPY package.json ./
COPY schemas/ ./schemas
COPY index.js ./

EXPOSE 3000

RUN npm install

CMD ["node","index.js"]
