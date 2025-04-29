var express = require ('express');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
var router = express.Router();
const loginController = require ('../Controllers/loginController')

/* POST*/
router.post('/login', loginController.create);





module.exports = router;