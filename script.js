// html elements
const contact = document.querySelector(".call-us");
const contactDropdown = document.querySelector(".dropdown-container");
const currency = document.querySelector(".currency-top-info");
const currencyDropdown = document.querySelector(".currency-dropdown-container");
const profile = document.querySelector(".profile-info");
const profileDropdown = document.querySelector(".profile-dropdown");
// contact dropdown
contact.addEventListener("click", () => {
  if (contactDropdown.style.display == "none") {
    contactDropdown.style.display = "block";
  } else {
    contactDropdown.style.display = "none";
  }
});
// currency dropdown
currency.addEventListener("click", () => {
  if (currencyDropdown.style.display == "none") {
    currencyDropdown.style.display = "block";
  } else {
    currencyDropdown.style.display = "none";
  }
});
// profile dropdown
profile.addEventListener("click", () => {
  if (profileDropdown.style.display == "none") {
    profileDropdown.style.display = "block";
  } else {
    profileDropdown.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (!contact.contains(e.target)) {
    contactDropdown.style.display = "none";
  }
  contactDropdown.style.display = "block";
});
