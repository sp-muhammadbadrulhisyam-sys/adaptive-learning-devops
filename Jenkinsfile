pipeline {
agent any
environment {
JMETER_HOME = 'C:\\Users\\hisya\\Desktop\\apache-jmeter-5.6.3'
}
stages {
stage('Install Dependencies') {
steps {
bat 'npm install'
}
}
stage('Run Unit Tests') {
steps {
bat 'npm test'
}
}
stage('Run Lint') {
steps {
bat 'npm run lint'
}
}
stage('Build Docker Image') {
steps {
bat 'docker build -t al-devops .'
}
}
stage('Deploy Container') {
steps {
bat 'docker rm -f al-devops-container || echo No existing container'
bat 'docker run -d --name al-devops-container -p 3000:3000 al-devops'
}
}
stage('Run JMeter Performance Test') {
steps {

bat 'timeout /t 5'
bat 'if exist jmeter-results.jtl del jmeter-results.jtl'
bat 'if exist jmeter-report rmdir /s /q jmeter-report'

bat '%JMETER_HOME%\\bin\\jmeter.bat -n -t adaptive-learning-devops.jmx -l jmeter-
results.jtl -e -o jmeter-report'

}
}
}
}