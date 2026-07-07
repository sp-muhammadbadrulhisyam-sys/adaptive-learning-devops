pipeline {
agent any
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
bat 'run-jmeter.bat'
}
}
}

}
