const checkboxes = document.querySelectorAll("input[type='checkbox']");
const userInput = document.querySelector("#c-oct");

const calculatePermissions = () => {

  // parse string to octal
  const owner = parseInt(userInput.value[0], 8);
  const group = parseInt(userInput.value[1], 8);
  const others = parseInt(userInput.value[2], 8);

  if (owner === '' || group === '' || others === '' || isNaN(owner) || isNaN(group) || isNaN(others)) {
    return;
  } 

  // parse octal to binary
  const ownerBinary = parseInt(owner).toString(2);
  const groupBinary = parseInt(group).toString(2);
  const othersBinary = parseInt(others).toString(2);

  // owners 0 3 6
  const ownerRead = checkboxes[0];
  const ownerWrite = checkboxes[3];
  const ownerExecute = checkboxes[6];

  // groups
  const groupRead = checkboxes[1];
  const groupWrite = checkboxes[4];
  const groupExecute = checkboxes[7];

  // others
  const othersRead = checkboxes[2];
  const othersWrite = checkboxes[5];
  const othersExecute = checkboxes[8];

  switchPerm(ownerBinary, ownerRead, ownerWrite, ownerExecute);
  switchPerm(groupBinary, groupRead, groupWrite, groupExecute);
  switchPerm(othersBinary, othersRead, othersWrite, othersExecute);
}

const switchPerm = (userTypeBinary, userRead, userWrite, userExecute) => {
  switch (userTypeBinary) {
    case '0':
      userRead.checked = false;
      userWrite.checked = false;
      userExecute.checked = false;
      break;
    case '1':
      userRead.checked = false;
      userWrite.checked = false;
      userExecute.checked = true;
      break;
    case '10':
      userRead.checked = false;
      userWrite.checked = true;
      userExecute.checked = false;
      break;
    case '11':
      userRead.checked = false;
      userWrite.checked = true;
      userExecute.checked = true;
      break;
    case '100':
      userRead.checked = true;
      userWrite.checked = false;
      userExecute.checked = false;
      break;
    case '101':
      userRead.checked = true;
      userWrite.checked = false;
      userExecute.checked = true;
      break;
    case '110':
      userRead.checked = true;
      userWrite.checked = true;
      userExecute.checked = false;
      break;
    case '111':
      userRead.checked = true;
      userWrite.checked = true;
      userExecute.checked = true;
      break;
  }
}


userInput.addEventListener('keypress', (e) => {
  if (e.key == "Enter") {
    calculatePermissions();
  }
});

