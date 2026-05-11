pipeline {

    agent any

    stages {

        stage('Git Clone') {
            steps {
                git 'YOUR_GITHUB_REPO_URL'
            }
        }

        stage('Backend Build') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Docker Logs') {
            steps {
                bat 'docker ps'
            }
        }

    }
}