var express = require ('express');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
var router = express.Router();
const WhatsappController = require ('../Controllers/WhatsappController')


/*GET ONE*/
router.post('/notify',WhatsappController.post);


module.exports = router;