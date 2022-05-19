const fs = require("fs")

const getFiles = (path, fileEnding) => {
  const files = fs.readdirSync(path).filter(f => f.endsWith(fileEnding))
  return files

}


module.exports = {
  getFiles
}

