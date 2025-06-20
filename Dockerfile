
FROM node:18-alpine AS deps

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install


FROM node:18-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM node:18-alpine AS runner

WORKDIR /app


COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start Next.js app
CMD ["npm", "start"]
