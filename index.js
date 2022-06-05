const core = require('@actions/core')
const github = require('@actions/github')

try {

    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const nameToGreet1 = core.getInput('who-to-greet1');
    console.log(`Hello ${nameToGreet1}!`);
    const nameToGreet2 = core.getInput('who-to-greet2');
    console.log(`Hello ${nameToGreet2}!`);

    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    core.setOutput("time1", "time1");
    core.setOutput("time2", "time2");
    core.setOutput("time3", "time3");

    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

  } catch (error) {

    core.setFailed(error.message);
    
}