const {createTransformModule} = require("scramjet");

module.exports = createTransformModule(
    (stream, wording = "Hello {}!") => stream.stringify(
        ({name}) => wording.replace("{}", name)
    )
);
