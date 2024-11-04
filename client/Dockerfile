FROM node:16-alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/defaulf.conf /etc/nginx/conf.d/defaulf.conf
COPY --from=builder /app/build /usr/share/nginx/html