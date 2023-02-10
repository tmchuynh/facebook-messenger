const form = document.querySelector("form");
const input = document.querySelector("input[type='text']");
const messageThread = document.querySelector(".message-thread");

const friendsList = document.querySelector(".friends-list");
const friends = friendsList.querySelectorAll(".friend");

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

friendsList.addEventListener("click", e => {
  if (!e.target.classList.contains("friend")) return;

  friends.forEach(friend => {
    friend.classList.remove("selected");
  });
  e.target.classList.add("selected");

  // Load the conversation with the selected friend
  const friendId = e.target.dataset.friendId;
  loadConversation(friendId);
});

function loadConversation(friendId) {
    const messageThread = document.querySelector(".message-thread");
    messageThread.innerHTML = "";
  
    messages
      .filter(message => message.from === 1 || message.to === 1)
      .forEach(message => {
        const messageBubble = document.createElement("div");
        messageBubble.classList.add("message-bubble");
        messageBubble.innerHTML = `<p>${message.text}</p>`;
  
        if (message.from === 1) {
          messageBubble.classList.add("sent");
        }
  
        messageThread.appendChild(messageBubble);
      });
  
    messageThread.scrollTop = messageThread.scrollHeight;
  }
  
