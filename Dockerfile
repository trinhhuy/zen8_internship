FROM node:20

# Cài đặt các dependencies cần thiết trên Debian
RUN apt-get update && apt-get install -y \
    build-essential \
    libc6-dev \
    libvips-dev \
    python3

WORKDIR /srv/app
COPY . .

RUN npm install

EXPOSE 1337
CMD ["npm", "start"]
