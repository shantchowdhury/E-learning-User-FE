const { exec } = require('child_process');
const cron = require('node-cron');

// Schedule the Git commands to run every 15 minutes.
const scheduleTime = '*/15 * * * *'; // (Seconds Minutes Hours DayOfMonth Month DayOfWeek)

cron.schedule(scheduleTime, () => {
  console.log('Checking for changes in the Git repository...');

  exec('git status --porcelain', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error checking Git status: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Git status command encountered an error: ${stderr}`);
      return;
    }

    const changedFiles = stdout
      .trim()
      .split('\n')
      .map((line) => line.split(' ')[1]); // Extract the filenames from the git status output.

    // Check if there are changes to be committed (changedFiles array is not empty).
    if (changedFiles.length > 0) {
      const commitMessage = `Automated commit: ${changedFiles.join(', ')}`;
      console.log(`Changes found. Running scheduled Git commands with commit message: ${commitMessage}`);

      // Execute the Git commands (add, commit, and push).
      exec('git add .', (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing 'git add': ${error.message}`);
          return;
        }

        exec(`git commit -m "${commitMessage}"`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing 'git commit': ${error.message}`);
            return;
          }

          exec('git push', (error, stdout, stderr) => {
            if (error) {
              console.error(`Error executing 'git push': ${error.message}`);
              return;
            }

            console.log(`Git commands executed successfully. Output:\n${stdout}`);
          });
        });
      });
    } else {
      console.log('No changes to commit. Skipping Git commands.');
    }
  });
});
