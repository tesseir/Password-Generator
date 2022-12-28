const setRange = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i = i++) { result.push(i); }
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

for (let i = 0; i < passLgth; i++) {
  const selectedGenerator = randomizer(usedGen);
  charArray.push(String.fromCharCode(selectedGenerator()));
}

return charArray.join("");
};

function genPw() {
  let genPasswd = buildPasswd(
    passLgth = Number(document.getElementById("pass-lgth").value),
    useUpper = document.getElementById("uppercase").checked,
    useLower = document.getElementById("lowercase").checked,
    useNum = document.getElementById("numbers").checked,
    useSpec = document.getElementById("special").checked
  );
  document.getElementById("pass-result").innerText = genPasswd;
}

