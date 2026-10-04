function getMessage() {
    return "Application is working successfully!";
}

function testPipeline() {
    document.getElementById("result").innerHTML = getMessage();
}

if (typeof module !== "undefined") {
    module.exports = { getMessage };
}
