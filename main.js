
const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);

    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}else{
    storeUserInfo();
}

function storeUserInfo() {
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const country = prompt("Enter your country:");
    const phoneNumber = prompt("Enter your phone number:");
    const state = prompt("Enter your state:");
    const city = prompt("Enter your city:");
    const village = prompt("Enter your village:");

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
    };
    localStorage.setItem("userInformation", JSON.stringify(userInfo));

    // Display user information in the card
    document.getElementById("first-name").textContent = userInfo.firstName;
    document.getElementById("last-name").textContent = userInfo.lastName;
    document.getElementById("country").textContent = userInfo.country;
    document.getElementById("phone-number").textContent = userInfo.phoneNumber;
    document.getElementById("state").textContent = userInfo.state;
    document.getElementById("city").textContent = userInfo.city;
    document.getElementById("village").textContent = userInfo.village;
}



const modeToggle = document.getElementById('mode-toggle');
const container = document.querySelector('.body');
const infoCard = document.getElementById('info-card');

modeToggle.addEventListener('click', () => {
  container.classList.toggle('dark-mode');
  infoCard.classList.toggle('dark-mode');
  // Toggle between light and dark mode by changing CSS variables
  if (container.classList.contains('dark-mode')) {
    document.body.style.setProperty('--background', 'var(--background-dark)');
    document.body.style.setProperty('--text', 'var(--text-dark)');
    modeToggle.innerText='LightMode'
  } else {
    document.body.style.setProperty('--background', 'var(--background-light)');
    document.body.style.setProperty('--text', 'var(--text-light)');
    modeToggle.innerText='DarkMode'
  }
});

