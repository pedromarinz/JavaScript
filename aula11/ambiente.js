let num = [5, 8, 2, 7, 1];
num.push(1);
num.sort();
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[1]}`);
let pos = num.indexOf(5);
if (pos == -1) {
  console.log('O valor não foi encontrado!')
} else {
console.log(`O valor 5 está na posição ${pos}`) 
}