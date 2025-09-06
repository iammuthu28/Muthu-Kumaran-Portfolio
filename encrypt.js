import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import CryptoJS from 'crypto-js';
import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get encryption key from environment variable
const ENCRYPTION_KEY = process.env.VITE_ENCRYPTION_KEY || 'default-fallback-key-32-characters!!';

if (ENCRYPTION_KEY.length !== 32) {
  console.error('❌ Encryption key must be exactly 32 characters long');
  console.error('❌ Current key length:', ENCRYPTION_KEY.length);
  process.exit(1);
}

function encryptHtml(content) {
  return CryptoJS.AES.encrypt(content, ENCRYPTION_KEY).toString();
}

try {
  const htmlContent = fs.readFileSync(path.join(__dirname, 'dist', 'index.html'), 'utf8');
  const encryptedContent = encryptHtml(htmlContent);
  
  // Save encrypted content to a separate file
  fs.writeFileSync(path.join(__dirname, 'dist', 'encrypted-content.enc'), encryptedContent);
  
  // Create loader that fetches encrypted content
  const loaderTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sathish J - Portfolio | Data Analyst & Blockchain Developer</title>
    <meta name="description" content="Portfolio of Sathish J, a Data Analyst and Blockchain Developer">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #1e3a8a 0%, #4c1d95 100%);
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
        }
        .loader {
            text-align: center;
        }
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid #fff;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .error {
            background: #fff;
            color: #333;
            padding: 20px;
            border-radius: 10px;
            max-width: 400px;
            text-align: center;
        }
        .error button {
            margin-top: 15px;
            padding: 10px 20px;
            background: #4c1d95;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="loader">
        <div class="spinner"></div>
        <h2>Loading Portfolio...</h2>
        <p>Decrypting content, please wait</p>
    </div>

    <script>
        // Obfuscated encryption key (base64 encoded)
        const ENCRYPTION_KEY = atob("${Buffer.from(ENCRYPTION_KEY).toString('base64')}");
        
        async function loadAndDecryptContent() {
            try {
                // Fetch encrypted content from separate file
                const response = await fetch('encrypted-content.enc?t=' + Date.now());
                if (!response.ok) throw new Error('Failed to load encrypted content');
                
                const encryptedContent = await response.text();
                const decryptedBytes = CryptoJS.AES.decrypt(encryptedContent, ENCRYPTION_KEY);
                const decryptedContent = decryptedBytes.toString(CryptoJS.enc.Utf8);
                
                if (!decryptedContent) {
                    throw new Error('Decryption failed - invalid key or content');
                }
                
                document.open();
                document.write(decryptedContent);
                document.close();
                
                // Initialize portfolio scripts
                if (typeof initPortfolio === 'function') {
                    setTimeout(initPortfolio, 100);
                }
            } catch (error) {
                document.body.innerHTML = '<div class="error"><h2>Error Loading Content</h2><p>Please refresh the page or try again later.</p><button onclick="window.location.reload()">Refresh Page</button></div>';
                console.error('Decryption error:', error);
            }
        }

        function checkCryptoJSLoaded() {
            if (typeof CryptoJS !== 'undefined' && CryptoJS.AES) {
                loadAndDecryptContent();
            } else {
                setTimeout(checkCryptoJSLoaded, 100);
            }
        }

        // Enhanced protection against source viewing
        (function() {
            // Prevent right-click
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                showProtectionMessage("Right-click is disabled on this website.");
                return false;
            });
            
            // Prevent text selection
            document.addEventListener('selectstart', function(e) {
                e.preventDefault();
                return false;
            });
            
            // Prevent drag and drop
            document.addEventListener('dragstart', function(e) {
                e.preventDefault();
                return false;
            });
            
            // Detect and prevent developer tools
            let devToolsOpen = false;
            const threshold = 160;
            
            function checkDevTools() {
                const widthThreshold = window.outerWidth - window.innerWidth > threshold;
                const heightThreshold = window.outerHeight - window.innerHeight > threshold;
                
                if (widthThreshold || heightThreshold) {
                    if (!devToolsOpen) {
                        devToolsOpen = true;
                        showProtectionMessage("Developer tools detected. Please close them to continue browsing.");
                    }
                }
            }
            
            setInterval(checkDevTools, 1000);
            
            // Prevent keyboard shortcuts
            document.addEventListener('keydown', function(e) {
                // Disable F12, Ctrl+Shift+I, Ctrl+U, etc.
                if (e.key === 'F12' || 
                    (e.ctrlKey && e.shiftKey && e.key === 'I') || 
                    (e.ctrlKey && e.shiftKey && e.key === 'C') || 
                    (e.ctrlKey && e.key === 'U') ||
                    (e.ctrlKey && e.key === 'S') ||
                    (e.ctrlKey && e.key === 'A') ||
                    (e.ctrlKey && e.key === 'F') ||
                    (e.ctrlKey && e.key === 'R')) {
                    e.preventDefault();
                    showProtectionMessage("Keyboard shortcuts are disabled on this website.");
                    return false;
                }
            });
            
            function showProtectionMessage(message) {
                const existingOverlay = document.getElementById('protection-overlay');
                if (existingOverlay) {
                    existingOverlay.remove();
                }
                
                const overlay = document.createElement('div');
                overlay.id = 'protection-overlay';
                overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.95); color: white; display: flex; justify-content: center; align-items: center; z-index: 99999; font-family: monospace; text-align: center; padding: 20px;';
                overlay.innerHTML = '<div><h2 style="font-size: 24px; margin-bottom: 20px;">Access Restricted</h2><p style="margin-bottom: 15px;">' + message + '</p><p>Please respect the website\'s security policies.</p></div>';
                
                document.body.appendChild(overlay);
                
                setTimeout(() => {
                    if (overlay.parentNode) {
                        overlay.remove();
                    }
                }, 3000);
            }
        })();

        // Start checking for CryptoJS
        setTimeout(checkCryptoJSLoaded, 100);
        
        // Fallback timeout
        setTimeout(function() {
            if (document.querySelector('.loader')) {
                document.body.innerHTML = '<div class="error"><h2>Loading Timeout</h2><p>Please check your internet connection and refresh the page.</p><button onclick="window.location.reload()">Refresh Page</button></div>';
            }
        }, 10000);
    </script>
</body>
</html>`;

  // Write the encrypted loader to dist folder
  fs.writeFileSync(path.join(__dirname, 'dist', 'index.html'), loaderTemplate);
  console.log('✓ Encrypted index.html created in dist/');
  console.log('✓ Encryption completed successfully');
  
} catch (error) {
  console.error('❌ Error during encryption:', error.message);
  process.exit(1);
}