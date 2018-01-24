var flag = true;
var foo = new Array(9);
function clo() {
  console.log(foo)
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
}

function changeFlag() {
  console.log('------------');
  console.log('before changeFlag()');
  console.log('flag', flag);
  flag = !flag;
  console.log('after changeFlag()');
  console.log('flag', flag);
}
