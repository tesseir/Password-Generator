// ! http://www.net-comber.com/charset.html

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(randomUpper());

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(randomLower());

function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

console.log(randomNum());

function randomSpecChar() {
  const specChar = "!@#$%^&*(){}[]_-+=/,.<>?";
  return specChar[Math.floor(Math.random() * specChar.length)];
}

console.log(randomSpecChar());