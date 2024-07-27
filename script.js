const checkboxes = document.querySelectorAll("input[type='checkbox']");
const userInput = document.querySelector("#c-oct");

const calculatePermissions = () => {

  const owner = parseInt(userInput.value[0], 8);
  const group = parseInt(userInput.value[1], 8);
  const others = parseInt(userInput.value[2], 8);

  if (owner === '' || group === '' || others === '' || isNaN(owner) || isNaN(group) || isNaN(others)) {
    return;
  } 

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

  switch (ownerBinary) {
    case '0':
      ownerRead.checked = false;
      ownerWrite.checked = false;
      ownerExecute.checked = false;
      break;
    case '1':
      ownerRead.checked = false;
      ownerWrite.checked = false;
      ownerExecute.checked = true;
      break;
    case '10':
      ownerRead.checked = false;
      ownerWrite.checked = true;
      ownerExecute.checked = false;
      break;
    case '11':
      ownerRead.checked = false;
      ownerWrite.checked = true;
      ownerExecute.checked = true;
      break;
    case '100':
      ownerRead.checked = true;
      ownerWrite.checked = false;
      ownerExecute.checked = false;
      break;
    case '101':
      ownerRead.checked = true;
      ownerWrite.checked = false;
      ownerExecute.checked = true;
      break;
    case '110':
      ownerRead.checked = true;
      ownerWrite.checked = true;
      ownerExecute.checked = false;
      break;
    case '111':
      ownerRead.checked = true;
      ownerWrite.checked = true;
      ownerExecute.checked = true;
      break;
  }
  
  switch (groupBinary) {
    case '0':
      groupRead.checked = false;
      groupWrite.checked = false;
      groupExecute.checked = false;
      break;
    case '1':
      groupRead.checked = false;
      groupWrite.checked = false;
      groupExecute.checked = true;
      break;
    case '10':
      groupRead.checked = false;
      groupWrite.checked = true;
      groupExecute.checked = false;
      break;
    case '11':
      groupRead.checked = false;
      groupWrite.checked = true;
      groupExecute.checked = true;
      break;
    case '100':
      groupRead.checked = true;
      groupWrite.checked = false;
      groupExecute.checked = false;
      break;
    case '101':
      groupRead.checked = true;
      groupWrite.checked = false;
      groupExecute.checked = true;
      break;
    case '110':
      groupRead.checked = true;
      groupWrite.checked = true;
      groupExecute.checked = false;
      break;
    case '111':
      groupRead.checked = true;
      groupWrite.checked = true;
      groupExecute.checked = true;
      break;
  }

  switch (othersBinary) {
    case '0':
      othersRead.checked = false;
      othersWrite.checked = false;
      othersExecute.checked = false;
      break;
    case '1':
      othersRead.checked = false;
      othersWrite.checked = false;
      othersExecute.checked = true;
      break;
    case '10':
      othersRead.checked = false;
      othersWrite.checked = true;
      othersExecute.checked = false;
      break;
    case '11':
      othersRead.checked = false;
      othersWrite.checked = true;
      othersExecute.checked = true;
      break;
    case '100':
      othersRead.checked = true;
      othersWrite.checked = false;
      othersExecute.checked = false;
      break;
    case '101':
      othersRead.checked = true;
      othersWrite.checked = false;
      othersExecute.checked = true;
      break;
    case '110':
      othersRead.checked = true;
      othersWrite.checked = true;
      othersExecute.checked = false;
      break;
    case '111':
      othersRead.checked = true;
      othersWrite.checked = true;
      othersExecute.checked = true;
      break;
  }


}


userInput.addEventListener('keypress', (e) => {
  if (e.key == "Enter") {
    calculatePermissions();
  }
});

