const fs = require('fs')
const xlsx = require('xlsx')

let buffer = fs.readFileSync('espn player scrapper\example.json')
console.log(buffer)

let data = JSON.parse(buffer)

console.log(data)
data.push({
    "name" : 'Thor',
    "last name" : 
})

let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS,sheetName);
    xlsx.writeFile(newWB,fileName);
