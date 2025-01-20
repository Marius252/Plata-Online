// Variabile globale pentru autentificare și balans
let authenticated = false;
let balance = 0;

// Elementele DOM
const loginContainer = document.getElementById("login-container");
const accountContainer = document.getElementById("account-container");
const balanceElement = document.getElementById("balance");
const depositInput = document.getElementById("deposit");
const withdrawInput = document.getElementById("withdraw");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");
const logoutBtn = document.getElementById("logout-btn");

// Funcție de autentificare
function login(username, password) {
    if (username === "user" && password === "password") {
        authenticated = true;
        loginContainer.style.display = "none";
        accountContainer.style.display = "block";
    } else {
        alert("Credențiale incorecte!");
    }
}

// Funcție de actualizare sold
function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

// Funcție de depunere
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

// Funcție de retragere
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

// Funcție de logout
logoutBtn.addEventListener("click", () => {
    authenticated = false;
    balance = 0;
    loginContainer.style.display = "block";
    accountContainer.style.display = "none";
});

// Gestionare formular de login
document.getElementById("login-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    login(username, password);
});
