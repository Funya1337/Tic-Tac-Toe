var flag = true;
var foo = new Array(9);

function clo() {
  console.log(foo)
}

function checkBasic(value, text) {
  if ((foo[0] === value && foo[1] === value && foo[2] === value)
    || (foo[0] === value && foo[3] === value && foo[6] === value)
    || (foo[1] === value && foo[4] === value && foo[7] === value)
    || (foo[2] === value && foo[5] === value && foo[8] === value)
    || (foo[3] === value && foo[4] === value && foo[5] === value)
    || (foo[6] === value && foo[7] === value && foo[8] === value)
    || (foo[0] === value && foo[4] === value && foo[8] === value)
    || (foo[6] === value && foo[4] === value && foo[2] === value)) {
    document.getElementById("demo").innerHTML = text;
  }
}

function check0() {
  checkBasic(0, "Нолики выиграли нажми F5");
}

function checkX() {
  checkBasic(1, "Крестики выйграли нажми F5")
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
  }
  console.log('after makeMove()');
  console.log('foo',foo);
  console.log('foo[id]', foo[id]);
  check0();
  checkX();
}

function changeFlag() {
  console.log('------------');
  console.log('before changeFlag()');
  console.log('flag', flag);
  flag = !flag;
  console.log('after changeFlag()');
  console.log('flag', flag);
}
