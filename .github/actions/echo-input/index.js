const core = require("@actions/core")

try {
    const input = core.getInput("input")
    console.log(`Got input: '${input}'`)
    core.setOutput("output", input)
    core.setOutput("json", JSON.stringify(input))
} catch (error) {
    core.setFailed(error.message)
}
