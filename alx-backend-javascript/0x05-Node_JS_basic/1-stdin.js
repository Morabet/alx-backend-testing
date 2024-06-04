/**
 *
 */

// console.log('Welcome to Holberton School, what is your name?');
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.setEncoding('utf-8');
// Event listener for data input
process.stdin.on('data', (data) => {
  // const name = data.trim(); // Remove any trailing newline characters
  // console.log(`Your name is: ${name}`);
  process.stdout.write(`Your name is: ${data}`);
  process.stdin.end();
});
// Event listener for process end
process.stdin.on('end', () => {
  // console.log('This important software is now closing');
  process.stdout.write('This important software is now closing\n');
});
