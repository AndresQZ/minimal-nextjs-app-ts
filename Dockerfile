
FROM node:16-alpine
WORKDIR /app
COPY . /app
COPY  package.json /app/package.json
COPY  package-lock.json /app/package-lock.json
COPY  next.config.js /app/next.config.js
RUN npm ci
ENV NODE_ENV=production
EXPOSE 3000
ENV PORT 3000
CMD ["npm", "run", "container-start"]
