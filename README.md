# Node.js Asynchronous File I/O Bug
This repository demonstrates a common error in Node.js related to asynchronous file I/O.  The `processFile` function uses `fs.readFile` to read a file asynchronously.  Due to the asynchronous nature of this operation, the code execution proceeds to the next line (`console.log("File reading initiated")`) before the file is actually read. This can lead to unexpected behavior and logic errors if not handled correctly.

## How to reproduce:
1. Clone this repository.
2. Create a file named `my-file.txt` in the same directory as `bug.js` with some content.
3. Run `node bug.js`.
4. Observe that the message "File reading initiated" is printed before the contents of `my-file.txt`.

## Solution:
The solution involves handling the asynchronous operation correctly using callbacks or promises, as shown in `bugSolution.js`.