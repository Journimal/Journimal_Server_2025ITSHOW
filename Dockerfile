FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile
RUN yarn build
RUN yarn prisma generate

FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000

CMD ["node", "dist/src/main"]
