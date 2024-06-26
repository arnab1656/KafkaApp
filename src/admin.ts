import { kafka } from "./client";

async function init() {
  const admin = kafka.admin();
  console.log("Admin Connecting");
  admin.connect();
  console.log("Admin Connected Succesfully [Rider-Update]");

  await admin.createTopics({
    topics: [{ topic: "Rider-Update", numPartitions: 2 }],
  });

  console.log("Topic created by the Admin");

  await admin.disconnect();

  console.log("The Admin is disconnected");
}

init();
