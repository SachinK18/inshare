const router = require('express').Router();
const File = require('../models/file');
const path = require('path');
const fs = require('fs');

router.get('/:uuid', async (req, res) => {
    try {
        const file = await File.findOne({ uuid: req.params.uuid });
        if (!file) {
            return res.render('download', { error: 'Link has been expired.' });
        }

        // Construct the file path more reliably
        const filePath = path.join(__dirname, '..', file.path);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.error(`File not found: ${filePath}`);
            return res.render('download', { error: 'File not found.' });
        }

        // Use original filename for download
        const downloadFilename = file.originalName || file.filename;

        // Set proper headers for download
        res.setHeader('Content-Disposition', `attachment; filename="${downloadFilename}"`);
        res.setHeader('Content-Type', 'application/octet-stream');

        // Download the file
        res.download(filePath, downloadFilename, (err) => {
            if (err) {
                console.error('Download error:', err);
                if (!res.headersSent) {
                    return res.render('download', { error: 'Error downloading file.' });
                }
            }
        });
    }
    catch (err) {
        console.error('Download route error:', err);
        return res.render('download', { error: 'Link has been expired.' });
    }
});

module.exports = router;