var express = require ('express');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
var router = express.Router();
const RegisterController = require ('../Controllers/RegisterController')

/* POST*/
router.post('/register', RegisterController.create);

router.get('/register', RegisterController.readAll);



module.exports = router;