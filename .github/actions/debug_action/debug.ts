import * as core from '@actions/core'

const run = async (): Promise<void> => {
  // Action code here!
  const creature = core.getInput('amazing-creature')
  core.debug(`👋 Hello! You are an amazing ${creature}! 🙌`)
}

run()

export default run
