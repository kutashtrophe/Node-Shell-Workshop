//Output a prompt
process.stdout.write("prompt > ");

// The stdin 'data' event fires after a user types in a line
process.stdin.on("data", (data) => {
  if (data.toString().trim() === "pwd") {
    const cwd = process.cwd();
    process.stdout.write("CWD: " + cwd);
    process.stdout.write("\nprompt > ");
  } else {
    const cmd = data.toString().trim();
    process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
  }
});
