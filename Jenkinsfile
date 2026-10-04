pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Automated Testing') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                echo 'Build completed successfully!'
            }
        }

        stage('Deploy to AWS EC2') {
            steps {
                sh '''
                    scp -i /var/lib/jenkins/.ssh/jenkins_deploy \
                    -o StrictHostKeyChecking=no \
                    index.html style.css script.js \
                    ubuntu@52.66.201.169:/tmp/jenkins-cicd-project/

                    ssh -i /var/lib/jenkins/.ssh/jenkins_deploy \
                    -o StrictHostKeyChecking=no \
                    ubuntu@52.66.201.169 \
                    "sudo mkdir -p /var/www/jenkins-cicd-project && \
                     sudo cp /tmp/jenkins-cicd-project/* /var/www/jenkins-cicd-project/ && \
                     sudo chown -R www-data:www-data /var/www/jenkins-cicd-project"
                '''
            }
        }
    }

    post {
        success {
            echo 'CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CI/CD Pipeline failed!'
        }
    }
}
