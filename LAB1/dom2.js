// document object model
import { EventEmitter } from "events";

const button = new EventEmitter();
button.on("click", () => {
  console.log("task 1");
});
button.on("click", () => {
  console.log("task 2");
});
button.emit("click");
