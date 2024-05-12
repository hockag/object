const bankAccount = {
    ownerName: "John Doe",
    accountNumber: "123456789",
    balance: 1000,

    deposit: function(amount) {
        this.balance += amount;
        this.displayBalance();
    },

    withdraw: function(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            this.displayBalance();
        } else {
            alert("Insufficient funds!");
        }
    },

    displayBalance: function() {
        document.getElementById("balance").textContent = this.balance;
    }
};

const depositButton = document.getElementById("depositButton");
const withdrawButton = document.getElementById("withdrawButton");
const amountInput = document.getElementById("amount");

depositButton.addEventListener("click", function() {
    const amount = parseFloat(amountInput.value);
    bankAccount.deposit(amount);
});

withdrawButton.addEventListener("click", function() {
    const amount = parseFloat(amountInput.value);
    bankAccount.withdraw(amount);
});

document.getElementById("ownerName").textContent = bankAccount.ownerName;
document.getElementById("accountNumber").textContent = bankAccount.accountNumber;
bankAccount.displayBalance();
//1


const temperatureInput = document.getElementById("temperatureInput");
const checkButton = document.getElementById("checkButton");
const resultDisplay = document.getElementById("result");

checkButton.addEventListener("click", function() {
    const temperature = parseFloat(temperatureInput.value);
    const weather = new Weather(temperature);
    const isBelowZero = weather.isBelowZero();
    if (isBelowZero) {
        resultDisplay.textContent = "Temperature is below 0 degrees Celsius";
    } else {
        resultDisplay.textContent = "Temperature is at or above 0 degrees Celsius";
    }
});

function Weather(temperature) {
    this.temperature = temperature;
}

Weather.prototype.isBelowZero = function() {
    return this.temperature < 0;
};
//2


const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const loginButton = document.getElementById("loginButton");

function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
}

User.prototype.login = function(email, password) {
    return email === this.email && password === this.password;
};

loginButton.addEventListener("click", function() {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;

    const user = new User(name, email, password);

    if (user.login(email, password)) {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your email and password.");
    }
});
//3

const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const yearElement = document.getElementById("year");
const ratingElement = document.getElementById("rating");


function Movie(title, director, year, rating) {
    this.title = title;
    this.director = director;
    this.year = year;
    this.rating = rating;
}

Movie.prototype.isHighRating = function() {
    return this.rating > 8;
};

const movie = new Movie("Inception", "Christopher Nolan", 2010, 8.8);

titleElement.textContent = movie.title;
directorElement.textContent = movie.director;
yearElement.textContent = movie.year;
ratingElement.textContent = movie.rating;

if (movie.isHighRating()) {
    titleElement.classList.add("green-text");
}
//4