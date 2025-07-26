let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");
let inputs = document.querySelector(".inputs");
// console.dir(input.value);

let google = document.querySelector(".google");

let counting = 35;

google.addEventListener("click", function (e) {
  e.preventDefault();

  let tim = setInterval(function () {
    if (counting <= 99) {
      counting++;
      google.style.width = `${counting}%`;
      google.style.color = "green";
    }
  }, 10);
});

form.addEventListener("submit", function (dets) {
  dets.preventDefault();
  console.dir(inputs.children[0].children[0].value);
  console.dir(inputs.children[1].children[0].value);
  // Clear previous errors every time form is submitted
  document.querySelector("#error-Emessage").textContent = "";
  document.querySelector("#error-Emessage").style.display = "none";

  document.querySelector("#error-pmessage").textContent = "";
  document.querySelector("#error-pmessage").style.display = "none";

  document.querySelector("#result-message");
  document.querySelector("#result-message").style.display = "none";

  const emailPattern = /^[a-zA-Z0-9._%+-]{5,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let eamilans = emailPattern.test(email.value);
  let passwordans = passwordPattern.test(password.value);

  let isvalid = true;

  if (!eamilans) {
    document.querySelector("#error-Emessage").textContent = "Email is Wrong.";
    document.querySelector("#error-Emessage").style.display = "Block";
    isvalid = false;
  }
  console.log(eamilans);

  if (!passwordans) {
    document.querySelector("#error-pmessage").textContent =
      "Password is Wrong.";
    document.querySelector("#error-pmessage").style.display = "Block";
    isvalid = false;
  }
  console.log(passwordans);

  if (isvalid) {
    let message = document.querySelector("#result-message");
    message.style.display = "block";
  }

  if (eamilans === true) {
    inputs.children[0].children[0].value = "";
    inputs.children[1].children[0].value = "";
  }
});
