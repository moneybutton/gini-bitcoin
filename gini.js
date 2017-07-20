// gini.js
let program = require('commander')
let csvArray = require('csv-array')
let gini = require('gini')

program
  .option('-f, --file <csvfile>', 'Compute the Gini coefficient of this CSV file (number,label)')
  .parse(process.argv)

if (!program.file) {
  console.log('Must specify csv file')
  process.exit()
}

csvArray.parseCSV(program.file, function (data) {
  let gdata = data.map((obj) => parseInt(obj.number, 10))
  let res = gini.unordered(gdata)
  console.log(res)
})
