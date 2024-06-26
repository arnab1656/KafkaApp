import { Kafka } from "kafkajs";

const PRIVATE_IP = process.env.PRIVATE_IP;

export const kafka = new Kafka({
  clientId: "FirstApp_Using_Kafka",
  brokers: [`${PRIVATE_IP}:9092`],
});
