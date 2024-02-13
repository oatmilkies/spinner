//Refactor spinner1 to remove repeated code

let t = 0;
let i = 0;

while (i <= 1) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, t += 100);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, t += 200);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, t += 200);

  setTimeout(() => {
    process.stdout.write('\r\\   ');
  }, t += 200);

  i++;
}

setTimeout(() => {
  process.stdout.write('\r|   ');
}, t);
