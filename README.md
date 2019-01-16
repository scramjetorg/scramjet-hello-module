# A scramjet-hello-module

An example hello world scramjet module to start your work on.

Once you provide it with a stream of object with names, it'll say hello to each name.

## Usage

The stream is best used with scramjet, here's how you `use` it:

```javascript
scramjet
    .from(stream)
    .use("scramjet-hello-module", "Hi {}!");
```

The above is the same as writing the same without scramjet:

```javascript
const helloStream = require("scramjet-hello-module");

const data = new ReadableStream();
data.write("Mike");
data.write("Alice");
data.end("Sam");

const out = helloStream(data, "Hello {}!\n");

out.pipe(process.stdout);
// Hello Mike!
// Hello Alice!
// Hello Sam!
```
