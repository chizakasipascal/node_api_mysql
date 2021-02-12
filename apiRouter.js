//import
var express=require('express');
var userController=require('./routes/userCtrl');

// Router
exports.router = (function() {
    var apiRouter = express.Router();

    //user Routes
    apiRouter.route('/users/register/').post(userController.register);
    apiRouter.route('/users/login/').post(userController.login);
    return apiRouter;
})();