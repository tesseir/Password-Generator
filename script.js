//! https://www.w3schools.com/charsets/ref_html_ascii.asp

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