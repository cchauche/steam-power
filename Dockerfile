FROM node:14.15.1

WORKDIR /usr/src/app

COPY package.json package-lock.json .

RUN npm install

COPY . .

RUN npm run build-prod

# RUN npm prune --production

EXPOSE 3030

CMD ["npm", "start"]
# CMD ['node', 'server/index.js']
