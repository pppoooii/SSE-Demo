const response = await axios.get('https://stream.example.com', {
    headers: {Authorization: `Bearer ${token}`, 
    responseType: 'stream'
});

const stream = response.data;

stream.on('data', data => {
    console.log(data);
});

stream.on('end', () => {
    console.log("stream done");
});