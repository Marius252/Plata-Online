let authenticated = false;
let balance = 0;

const loginContainer = document.getElementById("login-container");
const accountContainer = document.getElementById("account-container");
const balanceElement = document.getElementById("balance");
const depositInput = document.getElementById("deposit");
const withdrawInput = document.getElementById("withdraw");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const logoutBtn = document.getElementById("logout-btn");

function login(username, password) {
    if (username === "user" && password === "password") {
        authenticated = true;
        loginContainer.style.display = "none";
        accountContainer.style.display = "block";
    } else {
        alert("Credențiale incorecte!");
    }
}

function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

depositBtn.addEventListener("click", () => {
    const depositAmount = parseFloat(depositInput.value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Introduceți o sumă validă pentru depunere!");
        return;
    }
    balance += depositAmount;
    depositInput.value = '';
    updateBalance();
});

withdrawBtn.addEventListener("click", () => {
    const withdrawAmount = parseFloat(withdrawInput.value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Introduceți o sumă validă pentru retragere!");
        return;
    }
    if (withdrawAmount > balance) {
        alert("Fonduri insuficiente!");
        return;
    }
    balance -= withdrawAmount;
    withdrawInput.value = '';
    updateBalance();
});

logoutBtn.addEventListener("click", () => {
    authenticated = false;
    balance = 0;
    loginContainer.style.display = "block";
    accountContainer.style.display = "none";
});

document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
});
