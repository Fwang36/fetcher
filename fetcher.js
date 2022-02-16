const arg = process.argv.slice(2)
const request = require('request')
const fs = require('fs')
const link = arg[0]
const path = arg[1]

const fetch = function() {

  request(link, (error, response, body) => {
    fs.writeFile(path, (error,response, body), err => {
      const size = fs.statSync(path).size
      console.log(`Downloaded and saved ${size} bytes to ${path}`)
    })
  })
}

fetch() 