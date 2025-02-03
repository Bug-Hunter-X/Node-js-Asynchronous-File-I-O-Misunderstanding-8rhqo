```javascript
const fs = require('fs');

function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Failed to read file:", err);
      return;
    }
    // Process the data
    console.log(data);
  });
}

processFile('./my-file.txt');
```