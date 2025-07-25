# -------- STAGE 1: Build --------
FROM node:lts-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build


# -------- STAGE 2: Run --------
FROM node:lts-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
