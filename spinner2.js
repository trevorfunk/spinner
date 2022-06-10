time = 50;
const spinner = ['|', '/', '-', '\\', '|'];
for (const line of spinner) {
setTimeout(() => {
 process.stdout.write(line);
}, time);
time += 100;
};