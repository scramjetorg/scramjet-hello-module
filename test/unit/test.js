const {DataStream} = require("scramjet");

module.exports = {
    async test(test) {
        test.expect(1);

        const arr = await (
            DataStream
                .from([{name: "Mike"}, {name: "Jenny"}, {name: "Alice"}])
                .use("../../", "Hi {}!")
                .toArray()
        );

        test.deepEqual(arr, ["Hi Mike!", "Hi Jenny!", "Hi Alice!"]);
        test.done();
    }
};
