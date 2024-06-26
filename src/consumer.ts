import { kafka } from "./client";

const groupName = process.argv[2];

async function init() {
  const consumer = kafka.consumer({ groupId: groupName });

  await consumer.connect();

  await consumer.subscribe({ topic: "Rider-Update", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
      if (message.value !== null && message.value !== undefined) {
        console.log(
          `[GroupName---> ${groupName} Topic Name ---> ${topic}]  Partition Name ---> ${partition} Message ---> ${message.value.toString()}]`
        );
      }
    },
  });
}

init();
