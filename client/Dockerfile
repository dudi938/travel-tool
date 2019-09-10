FROM node:10

COPY . /app/js/

WORKDIR /app/js

RUN npm i && npm install -g @angular/cli

EXPOSE 4200

CMD [ "npm",  "start"]
