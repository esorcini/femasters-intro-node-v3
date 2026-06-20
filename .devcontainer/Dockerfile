FROM node:26-bookworm-slim

ARG USERNAME=dev
ARG USER_UID=784
ARG USER_GID=784

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    procps \
    curl \
    git \
    less \
    vim \
    sudo \
    && rm -rf /var/lib/apt/lists/*

# Create a non-root user
RUN groupadd --gid ${USER_GID} ${USERNAME} \
    && useradd \
        --uid ${USER_UID} \
        --gid ${USER_GID} \
        --create-home \
        --shell /bin/bash \
        ${USERNAME}

RUN echo "${USERNAME} ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/${USERNAME} \
    && chmod 0440 /etc/sudoers.d/${USERNAME}

# Set working directory
RUN mkdir -p /app \
        && chown -R ${USERNAME}:${USERNAME} /app

WORKDIR /home/dev/app

RUN npm config set update-notifier false \
    && npm config set fund false

RUN npm install --save-dev \
  prettier \
  eslint \
  eslint-config-prettier

# Switch to non-root user
USER ${USERNAME}