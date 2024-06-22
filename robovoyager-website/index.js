function toggleActive(button) {
  button.classList.toggle("open");

  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("active");

  updateNavbarLinksFocus();

  button.blur();
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.classList.toggle("light-theme");

  const sunIcon = document.querySelector(".fa-sun");
  const moonIcon = document.querySelector(".fa-moon");

  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");

  const themeButton = document.getElementById("theme-button");
  themeButton.blur();
}

function updateNavbarLinksFocus() {
  const navbarLinks = document.querySelectorAll("#navbar a");
  const navbar = document.getElementById("navbar");

  if (navbar.classList.contains("active")) {
    navbarLinks.forEach((link) => {
      link.setAttribute("tabindex", "0");
    });
  } else {
    navbarLinks.forEach((link) => {
      link.setAttribute("tabindex", "-1");
    });
  }
}

function copyToClipboard() {
  const email = "emir.masinovic.bh@gmail.com";
  navigator.clipboard.writeText(email).then(
    () => {
      const message = document.getElementById("copy-message");
      message.classList.add("show-message");
      setTimeout(() => {
        message.classList.remove("show-message");
      }, 2000);
    },
    (err) => {
      console.error("Could not copy text: ", err);
    }
  );
}

// function copyToClipboard() {
//   const emailElement = document.getElementById("email-address");
//   const email = emailElement.innerText;

//   // Create a temporary textarea to copy the email text
//   const textarea = document.createElement("textarea");
//   textarea.value = email;
//   textarea.style.position = "fixed"; // Ensure it is not displayed off-screen
//   document.body.appendChild(textarea);
//   textarea.focus();
//   textarea.select();

//   // Attempt to copy the text
//   try {
//     const successful = document.execCommand("copy");
//     if (successful) {
//       const message = document.getElementById("copy-message");
//       message.classList.add("show-message");
//       setTimeout(() => {
//         message.classList.remove("show-message");
//       }, 2000);
//     } else {
//       console.error("Unable to copy email address");
//     }
//   } catch (err) {
//     console.error("Unable to copy email address: ", err);
//   }

//   // Clean up
//   document.body.removeChild(textarea);
// }

function handleNavigationClick(event) {
  event.preventDefault();

  document.getElementById("menu-button").classList.remove("open");
  document.getElementById("navbar").classList.remove("active");

  setTimeout(() => {
    const section = document.querySelector(event.target.getAttribute("href"));
    const headerHeight = document.querySelector("header").offsetHeight;
    const sectionPosition =
      section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }, 100);
}

function handleMenu(event) {
  if (!event.target.closest("header") && !event.target.closest("nav")) {
    document.getElementById("menu-button").classList.remove("open");
    document.getElementById("navbar").classList.remove("active");
    document.querySelector("main").classList.remove("display-none");
    updateNavbarLinksFocus();
  }
}

updateNavbarLinksFocus();
