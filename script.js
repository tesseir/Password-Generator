
const setRange = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) { result.push(i); }
  return result;
};

const randomizer = (range) => {
  return range[Math.floor(Math.random() * range.length)];
};

buildPasswd = (
  passLgth,
  useUpper,
  useLower,
  useNum,
  useSpec
) => {

  const generators = {
  getUpper: () => randomizer(setRange(65, 90)),
  getLower: () => randomizer(setRange(97, 122)),
  getNum: () => randomizer(setRange(48, 57)),
  getSpec: () => randomizer([
    ...setRange(33, 47),
    ...setRange(58, 64),
    ...setRange(91, 96),
    ...setRange(123, 126)
  ])
};

let charArray = [];
let usedGen = [];

if (useUpper) {
  usedGen.push(generators.getUpper);
} if (useLower) {
  usedGen.push(generators.getLower);
} if (useNum) {
  usedGen.push(generators.getNum);
} if (useSpec) {
  usedGen.push(generators.getSpec);
}
debugger;
for (let i = 0; i < passLgth; i++) {
  const selectedGenerator = randomizer(usedGen);
  charArray.push(String.fromCharCode(selectedGenerator()));
}

return charArray.join("");
};

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

window.genPw = genPw;

//! I DONT KNOW HOW TO MAKE A COPY PASTE FUNCTION PLEASSE BE IMPRESSED BY THE REST OF MY CODE, I BEG OF YOU!