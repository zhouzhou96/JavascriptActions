const core = require('@actions/core')
const {env} = require('./env.js')

    const time = "1111111111111111111111111";
    core.setOutput("time", time);


    const HELLOWORLD_JAR_NAME = 'helloWorld'
    core.setOutput("HELLOWORLD_JAR_NAME", HELLOWORLD_JAR_NAME);

    const HELLOWORLD_JAR_VERSION = '0.0.1-SNAPSHOT'
    core.setOutput("HELLOWORLD_JAR_VERSION", HELLOWORLD_JAR_VERSION);

    // const HELLOWORLD_JAR_ADDERSS = 'http://artifactrepo-dev:8082/artifactory/int_maven_dev/com/study'
    const NEW_HELLOWORLD_JAR_ADDERSS = env.HELLOWORLD_JAR_ADDERSS
    core.setOutput("HELLOWORLD_JAR_ADDERSS", NEW_HELLOWORLD_JAR_ADDERSS);

    // const RUNNER_REPOSITORY = '/appl/idf/script/ODC/repository'
    const ENV_RUNNER_REPOSITORY = env.RUNNER_REPOSITORY
    core.setOutput("RUNNER_REPOSITORY", ENV_RUNNER_REPOSITORY);

