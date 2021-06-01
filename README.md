## Step 1: Run the server
> node server.js

## Step 2: Call from another web site
- Open https://www.google.com in a new tab
- Go to console and run the below command

fetch('http://localhost:3000/').then(response => response.text()).then(console.log)

RESPONSE:
Access to fetch at 'http://127.0.0.1:3000/' from origin 'https://www.google.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

## Step 3: Fix by Configuring CORS
- Add below code before response is sent 
res.setHeader("Access-Control-Allow-Origin", "https://www.google.com");

## Step 3: Call from another website
- Go to https://nodejs.org/ and fetch again

fetch('http://localhost:3000/').then(response => response.text()).then(console.log)

RESPONSE:
Access to fetch at 'http://localhost:3000/' from origin 'https://nodejs.org' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.google.com' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.

## Step 3: Fix by Allowing multiple Origin
- Add below code before response is sent 
res.setHeader("Access-Control-Allow-Origin", "*");


- If only specific domains should be allowed, create a list of allowed origins and set based on exist check as shown below

const allowedOrigins = ['https://www.google.com', 'https://nodejs.org/'];
const origin = req.headers.origin;
if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
}

## Step 4: Complex Request - Setting Request Header
- Run fetch with headers

fetch('http://localhost:3000/', { headers: { 'Content-Type': 'appliaction/json' } } ).then(response => response.text()).then(console.log)

RESPONSE:
Access to fetch at 'http://localhost:3000/' from origin 'https://nodejs.org' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.

- preflight/options request is failed. See the network for OPTIONS request.

## Step 5: Fix by allowing the header
- Add below code before response is sent 
res.setHeader("Access-Control-Allow-Headers", "Content-Type");

## Step 6: Complex Request - Setting different Request Header
- Run fetch with headers

fetch('http://localhost:3000/', { headers: { 'X-Requested-With': 'XMLHttpRequest' } } ).then(response => response.text()).then(console.log)

RESPONSE:
Access to fetch at 'http://localhost:3000/' from origin 'https://nodejs.org' has been blocked by CORS policy: Request header field x-requested-with is not allowed by Access-Control-Allow-Headers in preflight response.

- preflight/options request is failed. See the network for OPTIONS request.

## Step 7: Fix by allowing the header
- Add below code before response is sent 
res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");

