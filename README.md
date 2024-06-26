# Kafka Setup and Usage Guide

## Prerequisites

- Node.js Intermediate level
- Experience with designing distributed systems

## Tools Required

- [Node.js](https://nodejs.org/) - Download Node.js
- [Docker](https://www.docker.com/) - Download Docker
- [VSCode](https://code.visualstudio.com/) - Download VSCode

## Commands

### Start Zookeeper Container and expose PORT 2181

```sh
docker run -p 2181:2181 zookeeper
```

### Start confluentinc/cp-kafka Container and expose PORT 9092

```sh

docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka

```

Then:

```sh
npm install

# Run build to build everything once
npm run build

# Start Admin Script: Manage Kafka topics. (On a new sh)
npm run dev:admin

#Start Producer Script: Send messages to a Kafka topic. (On a new sh)
npm run dev:producer

#Start Consumer Script: Receive messages from a Kafka topic. (On a new sh)
npm run dev:consumer <GROUP_NAME>
```
