var express = require('express');
var router = express.Router();
const movieController = require('../controllers/movie.controller');

router.post('/', movieController.create);
router.get('/', movieController.findAll);
router.put('/:id', movieController.update);
router.patch('/:id', movieController.update);
router.delete('/:id', movieController.delete);
router.get('/:id', movieController.findOne);

module.exports = router;
