FROM node:10

ADD ./dist/ /app/js/

ADD ./package.json  /app/

ADD ./tsconfig.json  /app/

WORKDIR /app/

RUN npm i

EXPOSE 5000

CMD [ "npm",  "start" ]
