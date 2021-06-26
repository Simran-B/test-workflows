const core = require("@actions/core")

try {
    const input = core.getInput("input")
    const json = core.getInput("json")
    const noTrim = core.getInput("input", { trimWhitespace: false })
    console.log(`Got input: '${input}'`)
    console.log(`Untrimmed: '${noTrim}'`)
    console.log(`Got json: '${json}'`)
    core.setOutput("output", input)
    core.setOutput("outputRaw", noTrim)
    core.setOutput("json", JSON.stringify(input))
    if (json) {
        core.setOutput("parsedJson", JSON.parse(json))
    }
} catch (error) {
    core.setFailed(error.message)
}
