pipeline {
    agent any;
    stages{
        stage("clone code from github"){
            steps{
                git branch: 'main', url: "https://github.com/priyanshijat/appointment-booking.git"
            }
        }
        stage("build a docker image"){
            steps{
                sh "docker build -t appointment-image ."
            }
        }
        stage("test an application"){
            steps{
                sh "test developer krege0"
            }
        }
        stage("get notification on email"){
            steps{
                emailext body: 'build sucessful',
                    subject: 'congratulations for successful build',
                    to: 'priyanshijat06@gmail.com'
            }
        }
        stage("deploy an appilication"){
            steps{
                sh "docker compose up -d"
