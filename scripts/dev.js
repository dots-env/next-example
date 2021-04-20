const { processEnv, execCommand } = require('dots-env')

processEnv({ envPath: './envs/' }).then(() => {
  execCommand('next dev')
})