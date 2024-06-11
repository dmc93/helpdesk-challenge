pipeline {
    agent any
    stages {
        stage('Install') {
            steps {
                bat '''
                npm install
                '''
            }
        }
        stage('Delete') {
            steps {
                bat '''
                pm2 delete all
                '''
<<<<<<< HEAD
=======
                //
>>>>>>> 7e45df6eb3c2774c45f6d78298104910c39173bd
            }
        }
        stage('Run') {
            steps {
                bat '''
               pm2 start "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" -- start
                '''
            }
        }
      
    }
}