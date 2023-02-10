const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const messageThread = document.querySelector(".message-thread");

form.addEventListener("submit", e => {
  e.preventDefault();
  const message = input.value;

  if (!message) return;

  const messageBubble = document.createElement("div");
  messageBubble.classList.add("message-bubble");
  messageBubble.classList.add("sent");
  messageBubble.innerHTML = `<p>${message}</p>`;

  messageThread.appendChild(messageBubble);
  input.value = "";
  messageThread.scrollTop = messageThread.scrollHeight;
});

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    form.dispatchEvent(new Event("submit"));
  }
});
