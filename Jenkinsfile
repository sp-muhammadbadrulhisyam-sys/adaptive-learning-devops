pipeline {
agent any
stages {
stage('Install Dependencies') {
steps {
bat "npm install"
}
}
stage('Run Unit Tests') {
steps {
bat "npm test"
}
}
stage('Run Lint') {
steps {
bat "npm run lint"
}
}
stage('Build Docker Image') {
steps {
bat "docker build -t adaptive-learning-devops ."
}
}
stage('Deploy Container') {
steps {
bat "docker rm -f adaptive-learning-devops-container || echo No existing container"
bat "docker run -d --name adaptive-learning-devops-container -p 3000:3000
adaptive-learning-devops"
}
}
}
}