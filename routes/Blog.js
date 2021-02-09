const controller = require('../controller/Blog');
const router = require('express').Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, 'img');
    },
    filename: (req,file,cb) => {
        cb(null,Date.now()+file.originalname);
    }
});
const upload = multer({ storage:storage});

router.get('/',controller.GIndex);
router.post('/',upload.single('image'),controller.PIndex);
module.exports = router;