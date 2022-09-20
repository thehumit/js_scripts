function getCurrency(CurrencyName){
    const https = require('https')
    var str = ""
    const options = {
      hostname: 'www.bloomberg.com',
      port: 443,
      path: '/markets2/api/datastrip/' + CurrencyName,
      method: 'GET',
      json: true,
      headers: {
        "authority": "www.bloomberg.com",
        "accept": '*/*',
        "accept-language": "en-US,en;q=0.9",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
    }
    }
    const req = https.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`)
      res.on('data', (d) => {

        var jsonArray = JSON.parse(JSON.stringify(d.toString()))
        str += jsonArray
        res.on('end', function () {
            // console.log('BODY: ' + str);
            // const fs = require('fs');
            // fs.writeFile('user.json', str, (err) => {
                // if (err) {
                    // throw err;
                // }
                // console.log("JSON data is saved.");
            // });
        })
});
    })
    req.on('error', (error) => {
      console.error(error)
    })
    req.end()
    return(str)
}

getCurrency("CNYEUR:CUR")

// const isJson = (data) => {
//     try {
//       const testIfJson = JSON.parse(data);
//       if (typeof testIfJson === "object") {
//         return true;
//       } else {
//         return false;
//       }
//     } catch {
//       return false;
//     }
//   };
