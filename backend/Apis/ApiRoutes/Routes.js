var express = require ('express');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
var router = express.Router();
const PlayerController = require ('../Controllers/PlayerController')

/* POST*/
router.post('/players', PlayerController.create);

/*GET ALL*/
router.get('/players', PlayerController.readAll);

/* PUT*/
router.put('/players', PlayerController.Update);

/* DELETE ONE*/
router.delete('/players/:guardian_phone', PlayerController.deleteOne);



module.exports = router;