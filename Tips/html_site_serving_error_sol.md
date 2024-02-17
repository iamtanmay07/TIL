index.html:1 Access to script at 'file:///Users/tanmaypatel/Documents/code/webDev/NextJS/typescript/project/dist/index.js' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted. 


So above one is error, when you start html site by just clicking on that, 

## so how to solve this ? 

The error message you're encountering suggests that you're trying to load a script (index.js) from a local file path (file:///Users/tanmaypatel/Documents/code/webDev/NextJS/typescript/project/dist/index.js) in your index.html file. However, due to security restrictions, modern web browsers prevent scripts from being loaded from local file paths (file:// protocol) when the HTML file is being accessed via another protocol such as null. This restriction is known as the Same-Origin Policy.

To resolve this issue, you should serve your HTML file and JavaScript files using a web server rather than directly opening the HTML file from the local filesystem. This can be done by setting up a local development server. One popular option for web development is to use tools like http-server, live-server, or integrated development environments (IDEs) like Visual Studio Code's Live Server extension.

Here's how you can set up a basic HTTP server using Node.js and http-server:

1. Install http-server globally via npm (Node Package Manager) by running the following command:

```npm install -g http-server```

2. Navigate to the directory containing your index.html and index.js files using the terminal or command prompt.
3. Start the http-server by running the following command:

```http-server```


