pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'juhuiya/vlog-frontend'
        DOCKER_TAG = 'latest'
        CONTAINER_NAME = 'vlog-app'
    }

    stages {
        stage('Pull Latest Image') {
            steps {
                echo '📥 Pulling latest image from Docker Hub...'
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials',
                                                    passwordVariable: 'DOCKER_PASSWORD',
                                                    usernameVariable: 'DOCKER_USERNAME')]) {
                        sh 'echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin'
                        sh 'docker pull ${DOCKER_IMAGE}:${DOCKER_TAG}'
                    }
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                echo '🚀 Deploying to EC2...'
                script {
                    sh '''
                        docker stop ${CONTAINER_NAME} || true
                        docker rm ${CONTAINER_NAME} || true
                        docker run -d -p 80:3000 --name ${CONTAINER_NAME} ${DOCKER_IMAGE}:${DOCKER_TAG}
                        docker ps
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '🎉 Deployment completed successfully!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
        always {
            sh 'docker image prune -f'
        }
    }
}