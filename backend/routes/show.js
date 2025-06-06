const router = require('express').Router();
const File = require('../models/file');

router.get('/:uuid', async (req,res) => {
    try{
        const file = await File.findOne({uuid: req.params.uuid});
        if(!file){
            return res.render('download',{error: 'Link has been expired.'});
        }

        return res.render('download',{
            uuid: file.uuid,
            fileName: file.originalName || file.filename, // Show original filename to user
            fileSize: file.size,
            download:`${process.env.APP_BASE_URL}/files/download/${file.uuid}`
        });
    } catch(err){
        return res.render('download',{error: 'Link has been expired.'});
    }
})


module.exports = router