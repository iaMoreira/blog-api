const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner(
    {
        serverUrl: 'http://localhost:9000',
        options: {
            'sonar.projectKey': 'js-test',
            'sonar.host': 'url=http://localhost:9000',
            'sonar.login': '1921665ccc6106d18b2742e048dc461766084fdb',
            'sonar.projectName': 'appjs',
            'sonar.sources': 'src',
            'sonar.tests': 'src',
            'sonar.inclusions': '**', // Entry point of your code
            'sonar.test.inclusions': 'src/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
            'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
            'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml',
        }
    }, () => { });