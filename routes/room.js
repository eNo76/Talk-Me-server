const express = require('express');
const router = express.Router();

const { roomController } = require('../controllers');

router.get('/:roomId', roomController.roomGet.get);
router.post('/', roomController.roomCreate.post);
router.delete('/', roomController.roomDelete.delete);

module.exports = router;
