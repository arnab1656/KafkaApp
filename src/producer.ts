import { kafka } from "./client";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt(">");
  rl.prompt();

  rl.on("line", async (line) => {
    const [riderName, location] = line.split(" ");

    await producer.send({
      topic: "Rider-Update",
      messages: [
        {
          key: "key1",
          value: JSON.stringify({ name: riderName, location }),
          partition: location.toLocaleLowerCase() === "north" ? 0 : 1,
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
  });
}

init();
