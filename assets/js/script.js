var email_placeholder = document.querySelectorAll(".email span");
var pass_placeholder = document.querySelectorAll(".password span");

for (var i = 0; i < email_placeholder.length; i++) {
  email_placeholder[i].style.transitionDelay = `${i * (email_placeholder.length / 100)}s`;
}

for (var i = 0; i < pass_placeholder.length; i++) {
  pass_placeholder[i].style.transitionDelay = `${i * (pass_placeholder.length / 200)}s`;
}

var email = document.getElementsByName("email")[0];
var password = document.getElementsByName("password")[0];
var input_group = document.querySelectorAll(".input-group");

email.addEventListener("focusin", function () {
  email_placeholder.forEach(function (elem) {
    elem.classList.add("active");
    input_group[0].classList.add("active");
  });
});

email.addEventListener("focusout", function () {
  email_placeholder.forEach(function (elem) {
    if (email.value != "") {
      elem.classList.add("active");
      input_group[0].classList.add("active");
    } else {
      elem.classList.remove("active");
      input_group[0].classList.remove("active");
    }
  });
});

password.addEventListener("focusin", function () {
  pass_placeholder.forEach(function (elem) {
    elem.classList.add("active");
    input_group[1].classList.add("active");
  });
});

password.addEventListener("focusout", function () {
  pass_placeholder.forEach(function (elem) {
    if (password.value != "") {
      elem.classList.add("active");
      input_group[1].classList.add("active");
    } else {
      elem.classList.remove("active");
      input_group[1].classList.remove("active");
    }
  });
});
