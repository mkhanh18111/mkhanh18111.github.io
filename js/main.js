// menu
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

// portfolio
const filterBtn = document.querySelectorAll(".filter-btn");

filterBtn.forEach((btn) => {
  btn.onclick = () => {
    document.querySelector(".active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    const items = document.querySelectorAll(".portfolio-box");

    items.forEach((item) => {
      item.style.display = "none";

      if (item.classList.contains(filter) || filter === "all") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }

      if (filter === "all") {
        item.style.display = "block";
      }
    });
  };
});

// testimonial slider
const slide = document.querySelectorAll(".testimonial-box");
const dot = document.querySelectorAll(".dot");

function next() {
  slide[index].classList.remove("active");
  dot[index].classList.remove("active");

  if (index == slide.length - 1) {
    index = 0;
  } else {
    index++;
  }

  slide[index].classList.add("active");
  dot[index].classList.add("active");
}

function prev() {
  slide[index].classList.remove("active");
  dot[index].classList.remove("active");

  if (index == 0) {
    index = slide.length - 1;
  } else {
    index--;
  }

  slide[index].classList.add("active");
  dot[index].classList.add("active");
}

let index = 0;

document.querySelector(".next").onclick = next;
document.querySelector(".prev").onclick = prev;

// contact form
const form = document.querySelector("#contact-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("[name='name']");
  const email = form.querySelector("[name='email']");
  const message = form.querySelector("[name='message']");

  const addError = (field, msg) => {
    field.classList.add("error");
    field.nextElementSibling.innerText = msg;
  };

  const removeError = (field) => {
    field.classList.remove("error");
    field.nextElementSibling.innerText = "";
  };

  const errors = [];

  if (name.value === "") {
    errors.push(name);
    addError(name, "Name is required");
  } else {
    removeError(name);
  }

  const isEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  if (email.value === "") {
    errors.push(email);
    addError(email, "Email is required");
  } else if (!isEmail(email.value)) {
    errors.push("email");
    addError(email, "Email is invalid");
  } else {
    removeError(email);
  }

  if (message.value === "") {
    errors.push(message);
    addError(message, "Message is required");
  } else {
    removeError(message);
  }

  if (errors.length) {
    errors[0].focus();
  } else {
    form.reset();
    alert("Your message has been sent");
  }
});
