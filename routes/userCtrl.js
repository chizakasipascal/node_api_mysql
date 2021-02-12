//import
var bcrypt=require('body-parser');
var jwt =require('jsonwebtoken');
const { useInflection } = require('sequelize/types');
var models =require('../models');

//Routes
module.exports={ //import de toutes nos root 
    register:function (req, res) {
        //params
        var email=req.body.email;
        var username=req.body.username;
        var password=req.body.password;
        var bio=req.body.bio;

        if (email==null || username==null||password==null) {
            return res.status(400).json({'erreur':'Parametre manquent'});
        }

        //TODO: Regex  verification 

        models.User.findOne({
            attributes:['email'],
            where:{email:email}
        }).the(function (userfound) {
            if (!userfound) {
                
                    bcrypt.has(password,5,function (err,bcryptPassward) {
                       var newUser=models.User.create(
                           email=email,
                           username=username,
                           password=password,
                           bio=bio,
                           isAdmin=0

                       ); 
                    });

            } else {
                return res.status(409).json({'err':'Uttilisateur existe deja'});
            }
        }).catch(function (err) {
            return err.status(500).json({'erro':'Invalide e-mail'}); 
        });

    },

    login:function (req, res) {
        
    }
};