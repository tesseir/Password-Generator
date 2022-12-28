//? template for the range, lines 19-30 will populate this.
const setRange = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i = i++) { result.push(i); }
  return result;
};

//? ... it a microwave... ITS A RANDOMIZER WHAT DID YOU THINK IT WAS?
const randomizer = (range) => {
  return range[Math.floor(Math.random() * range.length)];
};

//? array of password parameters
const passwdParam = (passLgth, useUp, useLow, useNum, useSpec) => {

  //? populates the range template and uses the ranzomizer to pick a number. 
  const genRandomizer = {
    upperCase: () => randomizer(setRange(65, 90)),
    lowerCase: () => randomizer(setRange(97, 122)),
    num: () => randomizer(setRange(48, 57)),
    specChar: () => randomizer([
      ...setRange(33, 47),
      ...setRange(58, 64),
      ...setRange(91, 96),
      ...setRange(123, 126)
    ])
    //! "..." allows you to put multiple ranges together into one big range. 
  };

  let charArray = [];
  let usedGen = [];

  //? password parameters selection true or false
  if (useUp) {
    usedGen.push(genRandomizer.upperCase);
  } if (useLow) {
    usedGen.push(genRandomizer.lowerCase);
  } if (useNum) {
    usedGen.push(genRandomizer.num);
  } if (useSpec) {
    usedGen.push(genRandomizer.specChar);
  }

  //? sets password length, and randomizes given integers, while converting to ascii characters.
  for (let i = 0; i < passLgth; i++) {
    const selectedGenerator = randomizer(usedGen);

    charArray.push(String.fromCharCode(selectedGenerator()));
  }

  //? joins together randomly generated characters
  console.log(charArray);
  return charArray.join("");
};

const pass = passwdParam(25, true, true, true, true);

const resultEl = document.getElementById("pass-result")
const lgthEl = document.getElementById("pass-lgth")
const upperEl = document.getElementById("upper")
const lowerEl = document.getElementById("lower")
const numEl = document.getElementById("num")
const specEl = document.getElementById("spec")
const genEl = document.getElementById("gen")
const clipBoardEl = document.getElementById("clipboard")

const passwdParam = {
  upper: getUpper,
  lower: getlower,
  num: getNum,
  spec: getSpec
};

clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

generate.addEventListener('click', () => {
	const setlgth = +lgthEl.value;
	const hasLower = lowerEl.checked;
	const hasUpper = upperEl.checked;
	const hasNumber = numEl.checked;
	const hasSpec = specEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSpec, setlgth);
});

function generatePassword(useUpper, useLower, useNum, useSpec, setLgth) {
	let generatedPassword = '';
	const typesCount = useUpper + useLower + useNum + useSpec;
	const typesArr = [{useUpper}, {useLower}, {useSpec}, {useSpec}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		return '';
	}
	
	// create a loop
	for(let i=0; i<setLgth; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, setLgth);
	
	return finalPassword;
}

function getLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getspec() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}
