let num = prompt("Son kiriting:");
let box = '';

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if (i === 0 || j === 0 || i === num - 1 || j === num - 1 || i === j) {
      box += '* ';
    } else {
      box += '  ';
    }
  }
  box += '\n';
}

console.log(box);