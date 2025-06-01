const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const File = require('../models/file');
const { v4: uuidv4 } = require('uuid'); 

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const uniqueName = file.fieldname + '-' + Date.now() + ext;
        cb(null, uniqueName);
    }
});

let upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 * 100 } // 100 MB
}).single('myfile'); // //frontend wala form se jo sumbit ho raha hai usme jo field name hai usi ko likhna hai myfile ki jagah

router.post('/', (req, res) => {

    upload(req, res, async (err) => {

        if (!req.file) {
            return res.json({ error: "All fields are required" });
        }

        if (err) {
            console.log(err);
            return res.status(500).send({ error: "Error uploading file" });
        }

        const file = new File({
            filename: req.file.filename, // Generated filename for storage
            originalName: req.file.originalname, // Original filename from user
            uuid: uuidv4(),
            path: req.file.path,
            size: req.file.size
        });

        const response = await file.save();
        return res.json({ file: `${process.env.APP_BASE_URL}/files/${response.uuid}` });
    });
});

router.post('/send', async (req, res) => {
    const { uuid, emailTo, emailFrom } = req.body;

    if (!uuid || !emailTo || !emailFrom) {
        return res.status(422).send({ error: 'All fields are required' });
    }

    const file = await File.findOne({ uuid: uuid }); // ✅ await added

    if (!file) {
        return res.status(404).send({ error: 'File not found' });
    }

    if (file.sender) {
        return res.status(422).send({ error: 'Email already sent' }); // ✅ logic fixed
    }

    file.sender = emailFrom;
    file.receiver = emailTo;

    await file.save();

    const sendMail = require('../services/emailService');

    sendMail({
        from: emailFrom,
        to: emailTo,
        subject: 'inShare file sharing',
        text: `${emailFrom} shared a file with you`,
        html: require('../services/emailTemplate')({
            emailFrom: emailFrom,
            downloadLink: `${process.env.APP_BASE_URL}/files/${file.uuid}`,
            size: parseInt(file.size / 1000) + 'KB',
            expires: '24 hours',
            fileName: file.originalName || file.filename,
        }),
    });

    return res.send({ success: true });

})

module.exports = router;
