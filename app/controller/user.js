const db = require('../config/db.config.js');
const config = require('../config/config.js');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.start = (req,res) => {
	console.log('Dream Society');
	res.send('Dream Society Api Running');
}

exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	let body = req.body;
	if(!body.firstName || !body.lastName || !body.userName || !body.email || !body.contact || !body.roleName ){
		res.json({message:"Parameters missing"});
	}
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		email: req.body.email,
		contact:req.body.contact,
		password: bcrypt.hashSync(req.body.password, 8)
	}).then(user => {
		Role.findAll({
		  where: {
			roleName: {
			  [Op.or]: req.body.roleName
			}
		  }
		}).then(roles => {
			user.setRoles(roles).then(() => {
				res.json("User registered successfully!");
            });
		}).catch(err => {
			res.status(500).send("Error -> " + err);
		});
	}).catch(err => {
		console.log("err===>",err)
		res.status(500).send("Fail! Error -> " + err);
	})
}

exports.signin = (req, res) => {
	console.log("Sign-In",req.body);
	if(!req.body.userName){
		return res.json({message:"Username cannot be empty"})
	}
	if(!req.body.password){
		return res.json({message:"Password cannot be empty"})
	}
	User.findOne({
		where: {
			userName: req.body.userName
		},	include: [{
			model: Role,
			attributes: ['id', 'roleName'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
	}).then(user => {
		if (!user) {
			return res.status(404).json('User Not Found.');
		}
		// let pwd = bcrypt.hashSync("12345", 8);
		// console.log(pwd);
		// res.send(pwd);

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(401).json({auth: false, accessToken: null, reason: "Invalid Password!" });
		}
		 
		var token = jwt.sign({ id: user.id }, config.secret, {
		  expiresIn: 86400 // expires in 24 hours


		});
		
		res.status(200).json({ status:200,auth: true, accessToken: token,user:user });
		
	}).catch(err => {
		console.log()
		res.status(500).send('Error -> ' + err);
	});
}

exports.get = (req, res) => {
	console.log("getting society")
	User.findAll({
		include: [{
			model: Role,
			attributes: ['id', 'roleName'],
		}]
	})
		.then(user => {
			res.json(user);
		});
	}

exports.userContent = (req, res) => {
	User.findOne({
		where: {id: req.userId},
		attributes: ['firstName', 'lastName', 'email'],
		include: [{
			model: Role,
			attributes: ['id', 'name'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
	}).then(user => {
		res.status(200).json({
			"description": "User Content Page",
			"user": user
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access User Page",
			"error": err
		});
	})
}

exports.adminBoard = (req, res) => {
	console.log(req.userId)
	User.findOne({
		where: {id: req.userId},
		attributes: ['name', 'username', 'email'],
		include: [{
			model: Role,
			attributes: ['id', 'name'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
	}).then(user => {
		res.status(200).json({
			"description": "Admin Board",
			"user": user
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Admin Board",
			"error": err
		});
	})
}

exports.managementBoard = (req, res) => {
	User.findOne({
		where: {id: req.userId},
		attributes: ['name', 'username', 'email'],
		include: [{
			model: Role,
			attributes: ['id', 'name'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
	}).then(user => {
		res.status(200).json({
			"description": "Management Board",
			"user": user
		});
	}).catch(err => {
		res.status(500).json({
			"description": "Can not access Management Board",
			"error": err
		});
	})
}

exports.update = (req,res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    User.find({
        where: { id: id }
      })
      .then(user => {
        return user.updateAttributes(updates)
      })
      .then(updatedUser => {
        res.json({message:"User updated successfully!",updatedUser:updatedUser});
      });
}

exports.delete = (req,res) => {
		const id = req.params.id;
		const updates = req.body.updates;
    User.find({
      where: { id: id }
    })
      .then(user => {
				return user.updateAttributes(updates)
        // res.json({message:"User deleted successfully!",user:user});
			})
			.then(updatedUser => {
				res.json({message:"User deactivated successfully!",updatedUser:updatedUser});
			});
}
