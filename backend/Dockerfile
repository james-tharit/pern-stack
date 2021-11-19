FROM node:17-alpine

EXPOSE 4000
RUN mkdir -p /app
WORKDIR /app

##ignore if don't have react with typescript
COPY tsconfig.json /app/tsconfig.json 

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

## install only the packages defined in the package-lock.json (faster than the normal npm install)
RUN npm install

# Run 'npm run dev' when the container starts.
CMD ["npm", "start"]