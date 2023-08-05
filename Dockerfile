FROM node:16.10.0-alpine

RUN mkdir -p /usr/src/sms
WORKDIR /usr/src/sms

RUN apk update && apk upgrade
RUN apk add git

COPY . /usr/src/sms/
#RUN npm install -D @element-plus/nuxt@1.0.4
RUN npm install
RUN npm run build
#RUN npm run dev &

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "dev" ]
