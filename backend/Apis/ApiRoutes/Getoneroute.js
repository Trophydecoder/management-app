var express = require ('express');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
var router = express.Router();
const GetOneController = require ('../Controllers/GetOneController')


/*GET ONE*/
router.post('/players/Oneplayer',GetOneController.readOne);


module.exports = router;