//testim_logs.js

//run: 
//node testim_logs_prettier.js <full path to testim log json>
// the output will be file with the same name + epoch time + "_prettified.log" suffix
fs = require('fs');

function order(a, b) {
    return a < b ? -1 : (a > b ? 1 : 0);
}
const input_logs_path = process.argv[2];

const output_logs_path = input_logs_path + new Date().getTime() + "_prettified.log";

fs.writeFileSync(output_logs_path, require(input_logs_path)
    .map(x => x.text.message)//.sort(order)
    .join('\n'));
