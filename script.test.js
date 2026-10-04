const { getMessage } = require("./script");

test("application message is correct", () => {
    expect(getMessage()).toBe("Application is working successfully!");
});
