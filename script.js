//! Sets the field for generators to fill.
const setRange = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) { result.push(i); }
  return result;
};

//! Its a microwave.... ITS A RANDOMIZER WHAT DID YOU THINK?
const randomizer = (range) => {
  return range[Math.floor(Math.random() * range.length)];
};

//! Sets password parameters
buildPasswd = (
  passLgth,
  useUpper,
  useLower,
  useNum,
  useSpec
) => {
  //! generates random numbers according on ASCII ranges
  const generators = {
    getUpper: () => randomizer(setRange(65, 90)),
    getLower: () => randomizer(setRange(97, 122)),
    getNum: () => randomizer(setRange(48, 57)),
    getSpec: () => randomizer([
      ...setRange(33, 47),
      ...setRange(58, 64),
      ...setRange(91, 96),
      ...setRange(123, 126)
      //? ... allows for a range in a range ie 1,2,3,7,8,9
    ])
  };

  let charArray = [];
  let usedGen = [];

  //! Generator true or false (use or not)
  if (useUpper) {
    usedGen.push(generators.getUpper);
  } if (useLower) {
    usedGen.push(generators.getLower);
  } if (useNum) {
    usedGen.push(generators.getNum);
  } if (useSpec) {
    usedGen.push(generators.getSpec);
  }

  //! sets the password length, randomizes given generated numbers, converts into characters.
  for (let i = 0; i < passLgth; i++) {
    const selectedGenerator = randomizer(usedGen);
    charArray.push(String.fromCharCode(selectedGenerator()));
  }
  //! joins together all characters into one password.
  return charArray.join("");
};

//! reads inputs from html
function genPw() {
  let genPasswd = buildPasswd(
    Number(document.getElementById("pass-lgth").value),
    document.getElementById("uppercase").checked,
    document.getElementById("lowercase").checked,
    document.getElementById("numbers").checked,
    document.getElementById("special").checked
  );
  document.getElementById("pass-result").innerText = genPasswd;
}
//! allows connection between html file and JS file
window.genPw = genPw;

//! I DONT KNOW HOW TO MAKE A COPY PASTE FUNCTION PLEASSE BE IMPRESSED BY THE REST OF MY CODE, I BEG OF YOU!