pipeline {

    agent any

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

        stage('Check Node Version') {

            steps {

                bat 'node -v'
                bat 'npm -v'

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

        stage('Docker Compose Build') {

            steps {

                bat 'docker compose build'

            }

        }

        stage('Stop Old Containers') {

            steps {

                bat 'docker compose down'

            }

        }

        stage('Run Docker Containers') {

            steps {

                bat 'docker compose up -d'

            }

        }

        stage('Docker Status') {

            steps {

                bat 'docker ps -a'

            }

        }

        stage('Backend Logs') {

            steps {

                bat 'docker logs office-dashboard-backend-1'

            }

        }

    }

    post {

        success {

            echo 'Pipeline Build Success'

        }

        failure {

            echo 'Pipeline Build Failed'

        }

    }

}