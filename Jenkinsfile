pipeline {

    agent any

    tools {
        nodejs 'nodejs'
    }

    environment {

        BACKEND_IMAGE = "office-dashboard-backend"
        FRONTEND_IMAGE = "office-dashboard-frontend"

    }

    stages {

        stage('Checkout Code') {

            steps {

                git branch: 'main',
                url: 'https://github.com/MADHU8912/office-dashboard.git'

            }

        }

        stage('Install Backend') {

            steps {

                dir('backend') {

                    bat 'npm install'

                }

            }

        }

        stage('Install Frontend') {

            steps {

                dir('frontend') {

                    bat 'npm install'

                }

            }

        }

        stage('Build Frontend') {

            steps {

                dir('frontend') {

                    bat 'npm run build'

                }

            }

        }

        stage('Docker Stop') {

            steps {

                bat 'docker compose down'

            }

        }

        stage('Docker Build') {

            steps {

                bat 'docker compose build'

            }

        }

        stage('Docker Start') {

            steps {

                bat 'docker compose up -d'

            }

        }

        stage('Docker Status') {

            steps {

                bat 'docker ps'

            }

        }

        stage('Backend Logs') {

            steps {

                bat 'docker logs office-dashboard-backend'

            }

        }

    }

    post {

        success {

            echo 'CI/CD Pipeline Success'

        }

        failure {

            echo 'Pipeline Failed'

        }

    }

}