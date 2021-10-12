const { exec } = require('child_process');
exec("node -v", (error, data, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  if (data) {
    data = String(data).replace('v', '').split(/[^\d]+/)
    const curVersion = data[0]
    if (curVersion > 11) {
      const subprocess = exec('npm run dev', (err, std, stderr) => {
        if (err) {
          console.log(`error: ${err.message}`);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
        }
      })
      subprocess.stdout.on('data', (data) => {
        console.log(`${data}`)
      })
      subprocess.on('close', (code) => {
      })
    } else {
      console.log('当前node版本过低，Vite 需要 Node.js 版本 >= 12.0.0')
    }
  }
})