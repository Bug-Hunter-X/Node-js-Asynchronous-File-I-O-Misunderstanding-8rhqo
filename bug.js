```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Failed to read file:", err);
      return; // Important: return here to prevent further execution
    }
    // Process the data
    console.log(data);
  });
  console.log("File reading initiated"); // This line will always execute before the file is read
}

processFile('./my-file.txt');
```