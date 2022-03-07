const { duplicate, transform } = require("./streambox")

const filename = process.argv[2]
transform(
  filename,
  'exe',
  function(value) {
    return value.toUpperCase()
  }
)
// duplicate(process.argv[2])
