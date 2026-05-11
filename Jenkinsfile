pipeline {

    agent any

    tools {
        nodejs 'nodejs'
    }

    environment {
        DOCKER_IMAGE_BACKEND = "office-dashboard-backend"
        DOCKER_IMAGE_FRONTEND = "office-dashboard-frontend"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                url: 'https://github.com/MADHU8912/office-dashboard.git'
            }
        }

        stage('Backend Install') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Frontend Install') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Frontend Build') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Docker Build') {
            steps {
                bat 'docker compose build'
            }
        }

        stage('Docker Stop Old') {
            steps {
                bat 'docker compose down'
            }
        }

        stage('Docker Run') {
            steps {
                bat 'docker compose up -d'
            }
        }

        stage('Docker Status') {
            steps {
                bat 'docker ps -a'
            }
        }

        stage('Docker Logs') {
            steps {
                bat 'docker logs office-dashboard-backend-1'
            }
        }

    }

    post {

        success {
            echo 'Pipeline Successfully Completed'
        }

        failure {
            echo 'Pipeline Failed'
        }

    }
}