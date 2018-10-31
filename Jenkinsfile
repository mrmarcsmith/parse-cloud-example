pipeline {
  agent { label 'docker' }
  options {
    ansiColor colorMapName: 'XTerm'
  }
  stages {
    stage('Build') {
      steps {
        sh "docker build -t registry.yourcompany.com/company/your-app:${GIT_SHA} ."
      }
    }
    stage('Publish') {
      when {
        branch 'master'
      }
      steps {
        withDockerRegistry([credentialsId: 'registry-creds', url: 'https://registry.yourcompany.com']) {
          sh "docker push registry.yourcompany.com/company/your-app:${GIT_SHA}"
        }
      }
    }
  }
}
