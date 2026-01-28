/**
 * tools/post-data.js
 */
async function sendPostRequest() {
    const url = 'https://c.rdzsp.id';
    
    // Create the form data
    const params = new URLSearchParams();
    params.append('uname', 'user_test');
    params.append('whoami', 'node_script');

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: params,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0'
            }
        });

        const result = await response.text();
        console.log(`Status: ${response.status}`);
        console.log('Response:', result);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

sendPostRequest();
