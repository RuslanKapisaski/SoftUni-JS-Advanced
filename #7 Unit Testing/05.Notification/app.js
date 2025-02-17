function notify(message) {
  const postRef = document.getElementsByClassName("post");
  const notificationEl = document.getElementById("notification");
  notificationEl.textContent = message;
  notificationEl.style.display = "block";

  notificationEl.addEventListener("click", () => {
    notificationEl.style.display === "none"
      ? (notificationEl.style.display = "block")
      : (notificationEl.style.display = "none");
  });
}
