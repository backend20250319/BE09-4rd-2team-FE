pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'juhuiya/vlog-frontend'
        DOCKER_TAG = "${BUILD_NUMBER}"
        EKS_CLUSTER = 'playblog-eks-cluster'
        AWS_REGION = 'ap-northeast-2'
    }

    stages {
        stage('Build & Push Docker') {
            steps {
                echo '🐳 Building and pushing Docker image...'
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'dockerhub-credentials',
                        passwordVariable: 'DOCKER_PASSWORD',
                        usernameVariable: 'DOCKER_USERNAME'
                    )]) {
                        sh '''
                            echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                            docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                            docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
                            docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
                            docker push ${DOCKER_IMAGE}:latest
                        '''
                    }
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                echo '🚀 Deploying to EKS cluster...'
                script {
                    sh '''
                        # EKS 클러스터 연결
                        aws eks update-kubeconfig --region ${AWS_REGION} --name ${EKS_CLUSTER}

                        # 새 이미지로 롤링 업데이트
                        kubectl set image deployment/vlog-frontend vlog-frontend=${DOCKER_IMAGE}:${DOCKER_TAG}

                        # 배포 상태 확인
                        kubectl rollout status deployment/vlog-frontend --timeout=300s

                        # 현재 Pod 상태 확인
                        kubectl get pods -l app=vlog-frontend
                    '''
                }
            }
        }

        stage('Verify Deployment') {
            steps {
                echo '✅ Verifying deployment...'
                script {
                    sh '''
                        # 서비스 상태 확인
                        kubectl get services vlog-frontend-service

                        # Pod 로그 확인 (최신 Pod)
                        kubectl logs -l app=vlog-frontend --tail=10

                        # 헬스체크
                        kubectl get pods -l app=vlog-frontend -o jsonpath='{.items[0].status.phase}'
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '🎉 EKS Deployment Success!'
            echo '✅ Website: http://localhost:8080 (Port Forward)'
            echo '🌐 LoadBalancer: http://a6234bc395d7443468124bad5cf0162-1096425112.ap-northeast-2.elb.amazonaws.com'
        }
        failure {
            echo '❌ EKS Deployment Failed!'
        }
        always {
            sh 'docker image prune -f'
        }
    }
}