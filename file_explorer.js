const http = require('http');
const fs = require('fs').promises; // Using promises for cleaner async handling
const path = require('path');
const os = require('os');

const PORT = 3000;
const LOG_FILE = path.join(__dirname, 'server.log');

// Default directory: user's home directory
const BASE_DIR = path.join(__dirname);

// Ensure the base directory exists, create it if it doesn't
async function ensureBaseDir() {
    try {
        await fs.mkdir(BASE_DIR, { recursive: true });
    } catch (err) {
        console.error('Error creating base directory:', err.message);
    }
}

// Log requests to a file
async function logRequest(req, statusCode) {
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url} - Status: ${statusCode}\n`;
    try {
        await fs.appendFile(LOG_FILE, logEntry);
    } catch (err) {
        console.error('Error writing to log file:', err.message);
    }
}

// Generate HTML for directory listing
async function generateDirListing(dirPath) {
    try {
        const files = await fs.readdir(dirPath);
        let html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>File Explorer</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    ul { list-style: none; padding: 0; }
                    li { margin: 5px 0; }
                    a { text-decoration: none; color: #007bff; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>File Explorer: ${path.relative(BASE_DIR, dirPath)}</h1>
                <ul>
        `;

        for (const file of files) {
            const fullPath = path.join(dirPath, file);
            const stats = await fs.stat(fullPath);
            const icon = stats.isDirectory() ? '📁' : '📄';
            const link = `/view?path=${encodeURIComponent(path.relative(BASE_DIR, fullPath))}`;
            html += `<li>${icon} <a href="${link}">${file}</a></li>`;
        }

        html += `
                </ul>
            </body>
            </html>
        `;
        return html;
    } catch (err) {
        throw new Error('Unable to read directory');
    }
}

// Create HTTP server
const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const reqPath = url.searchParams.get('path') || '';
    const fullPath = path.join(BASE_DIR, reqPath);

    try {
        // Ensure the requested path is within BASE_DIR to prevent directory traversal
        if (!fullPath.startsWith(BASE_DIR)) {
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            await logRequest(req, 403);
            res.end('Access denied: Path outside allowed directory');
            return;
        }

        // Check if the path exists
        const stats = await fs.stat(fullPath);

        if (url.pathname === '/' || url.pathname === '/view') {
            if (stats.isDirectory()) {
                // Serve directory listing
                const html = await generateDirListing(fullPath);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                await logRequest(req, 200);
                res.end(html);
            } else if (stats.isFile()) {
                // Serve file for download
                res.writeHead(200, {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': `attachment; filename="${path.basename(fullPath)}"`,
                });
                const readStream = (await fs.open(fullPath, 'r')).createReadStream();
                readStream.pipe(res);
                await logRequest(req, 200);
            }
        } else {
            // Invalid endpoint
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            await logRequest(req, 404);
            res.end('Not Found');
        }
    } catch (err) {
        // Handle errors (e.g., file/directory not found)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        await logRequest(req, 404);
        res.end('Not Found: ' + err.message);
    }
});

// Start the server
async function startServer() {
    await ensureBaseDir();
    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

startServer();