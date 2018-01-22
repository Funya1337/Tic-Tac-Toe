var flag = true;
function funcflag(elId) {
  if (flag === true) {
    document.getElementById(elId).className = "colorfull";
  } else {
    document.getElementById(elId).className = "dull";
  }
}
function funcflag1() {
  flag = !flag;
  console.log(flag);
}
