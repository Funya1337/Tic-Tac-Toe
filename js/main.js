var flag = true;
var foo = new Array(9);

function clo() {
  console.log(foo)
}

function checkBasic(value) {
  if ((foo[0] === value && foo[1] === value && foo[2] === value)
    || (foo[0] === value && foo[3] === value && foo[6] === value)
    || (foo[1] === value && foo[4] === value && foo[7] === value)
    || (foo[2] === value && foo[5] === value && foo[8] === value)
    || (foo[3] === value && foo[4] === value && foo[5] === value)
    || (foo[6] === value && foo[7] === value && foo[8] === value)
    || (foo[0] === value && foo[4] === value && foo[8] === value)
    || (foo[6] === value && foo[4] === value && foo[2] === value)) {
    return true;
  }
  return false;
}

function check0() {
  if (checkBasic(0) === true) {
    document.getElementById("demo").innerHTML = "Нолики выиграли нажми F5";
  }
}

function checkX() {
if (checkBasic(1) === true) {
    document.getElementById("demo").innerHTML = "Крестики выиграли нажми F5";
  }
}
function makeMove(id) {
  console.log('------------');
  console.log('before makeMove()');
  console.log('id', id);
  console.log('flag', flag);
  console.log('foo', foo);
  console.log('foo[id]', foo[id]);
  if (typeof foo[id] === 'undefined') {
    var c1 = 'r' + id;
    if (flag === true) {
      foo[id] = 0;
      document.getElementById(c1).className = "colorfull";
    }  else {
      foo[id] = 1;
      document.getElementById(c1).className = "dull";
    }
    flag = !flag;
  }
  console.log('after makeMove()');
  console.log('foo',foo);
  console.log('foo[id]', foo[id]);
  check0();
  checkX();
  checkInc();
}

function checkHasMoves() {
  console.log(foo);
  for (let i=0; i<9; i++) {
    if (foo[i] === undefined) {
      return true;
    }
  }
  return false;
}

function checkInc() {
  if (!checkBasic(0) && !checkBasic(1) && !checkHasMoves()) {
    document.getElementById("demo").innerHTML = "ничья";
  }
}
