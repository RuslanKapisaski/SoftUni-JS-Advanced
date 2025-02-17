function validate() {
  const emailRef = document.getElementById("email");

  let emailPattern = /[a-z0-9]+@[a-z]+.[a-z]+/;
  emailRef.addEventListener("change", (e) => {
    if (!e.currentTarget.value.match(emailPattern)) {
      console.log(e.currentTarget.value);
      emailRef.classList.add("error");
    } else {
      emailRef.classList.remove("error");
    }
  });
}
