var express = require('express');
var router = express.Router();
const playerController = require('../Controllers/PlayersController')

/* GET Lists page. */
router.get('/', playerController.getAllPlayers);
/* GET Edit page. */
router.get('/details/:id', playerController.getOnePlayer);
/* POST Update page. */
router.post('/update/:id', playerController.update);
/* GET Add-form page. */
router.get('/add-player',playerController.addform);



module.exports = router;