var express = require ('express');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
var router = express.Router();
const loginController = require ('../Controllers/loginController')

/* POST*/
router.post('/loginUser', loginController.create);





module.exports = router;