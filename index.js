const core = require('@actions/core')

    const time = "1111111111111111111111111";
    core.setOutput("time", time);


    const HELLOWORLD_JAR_NAME = 'helloWorld'
    core.setOutput("HELLOWORLD_JAR_NAME", HELLOWORLD_JAR_NAME);

    const HELLOWORLD_JAR_VERSION = '0.0.1-SNAPSHOT'
    core.setOutput("HELLOWORLD_JAR_VERSION", HELLOWORLD_JAR_VERSION);

    const HELLOWORLD_JAR_ADDERSS = 'http://artifactrepo-dev:8082/artifactory/int_maven_dev/com/study'
    core.setOutput("HELLOWORLD_JAR_ADDERSS", HELLOWORLD_JAR_ADDERSS);

    const RUNNER_REPOSITORY = '/appl/idf/script/ODC/repository'
    core.setOutput("RUNNER_REPOSITORY", RUNNER_REPOSITORY);

