const prompt = require("prompt-sync")();

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericSpecialCharacters = "0123456789!@#$%^&*(){}[]<.>?";
let randomGeneratedPassword = "";

const passwordLength = prompt("What is the length of your password: ");
const isSpecialAlphaNumeric = prompt(
  "Should password contain number & special characters (y/n): "
);

const GeneratePassword = (len, haveSpecialChars) => {
  let password = alphabets;
  if (haveSpecialChars === "y" || haveSpecialChars === "yes") {
    password += numericSpecialCharacters;
  }
  for (let i = 0; i < +len; i++) {
    let randomNumber = Math.floor(Math.random() * password.length);
    randomGeneratedPassword += password[randomNumber];
  }
  return randomGeneratedPassword;
};

randomGeneratedPassword = GeneratePassword(
  passwordLength,
  isSpecialAlphaNumeric
);

console.log(`your random password is: ${randomGeneratedPassword}`);
