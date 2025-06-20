pipeline {
    agent any

    stages {
        stage("Clone code from GitHub") {
            steps {
                git branch: 'main', url: "https://github.com/debabrata013/appinment-booking.git"
            }
        }

        stage("Build a Docker image") {
            steps {
                sh "docker build -t appointment-image ."
            }
        }

        stage("Test the application") {
            steps {
                // Replace this with actual test command
                sh "echo 'Running tests...'" 
                // OR if you have a test script:
                // sh "./run-tests.sh"
            }
        }

        stage("Get notification on email") {
            steps {
                emailext(
                    subject: 'Congratulations on successful build',
                    body: 'The Jenkins build was successful.',
                    to: 'priyanshijat06@gmail.com'
                )
            }
        }

        stage("Deploy the application") {
            steps {
                sh "docker-compose up -d"
            }
        }
    }
}
