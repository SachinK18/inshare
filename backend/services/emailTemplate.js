module.exports = ({ emailFrom, downloadLink, size, expires, fileName }) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Shared with You - inShare</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 0;
        }
        .header {
            background-color: #3498db;
            color: white;
            text-align: center;
            padding: 30px 20px;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: bold;
        }
        .content {
            padding: 40px 30px;
            text-align: center;
        }
        .content h2 {
            color: #333;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .content p {
            color: #666;
            font-size: 16px;
            margin-bottom: 15px;
        }
        .file-info {
            background-color: #f8f9fa;
            border-left: 4px solid #3498db;
            padding: 20px;
            margin: 30px 0;
            text-align: left;
        }
        .file-info p {
            margin: 5px 0;
            color: #333;
        }
        .download-btn {
            display: inline-block;
            background-color: #3498db;
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 5px;
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
            transition: background-color 0.3s;
        }
        .download-btn:hover {
            background-color: #2980b9;
        }
        .footer {
            background-color: #34495e;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 14px;
        }
        .footer p {
            margin: 5px 0;
            color: #bdc3c7;
        }
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
            }
            .content {
                padding: 20px !important;
            }
            .header {
                padding: 20px !important;
            }
            .header h1 {
                font-size: 24px !important;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📁 inShare</h1>
            <p>Secure File Sharing</p>
        </div>

        <div class="content">
            <h2>You've received a file!</h2>
            <p>Hello there! 👋</p>
            <p><strong>${emailFrom}</strong> has shared a file with you through inShare.</p>

            <div class="file-info">
                <p><strong>📧 From:</strong> ${emailFrom}</p>
                <p><strong>📄 File:</strong> ${fileName || 'Shared File'}</p>
                <p><strong>📦 File Size:</strong> ${size}</p>
                <p><strong>⏰ Expires:</strong> ${expires}</p>
            </div>

            <p>Click the button below to download your file:</p>

            <a href="${downloadLink}" class="download-btn" target="_blank">
                📥 Download File
            </a>

            <p style="font-size: 14px; color: #999; margin-top: 30px;">
                If the button doesn't work, copy and paste this link into your browser:<br>
                <a href="${downloadLink}" style="color: #3498db; word-break: break-all;">${downloadLink}</a>
            </p>
        </div>

        <div class="footer">
            <p>Thank you for using inShare! 🚀</p>
            <p>This is an automated message. Please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>`;
};
