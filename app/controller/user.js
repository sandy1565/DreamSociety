const db = require('../config/db.config.js');
const config = require('../config/config.js');
const httpStatus = require('http-status');
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

exports.start = (req, res) => {
	console.log('Dream Society');
	res.send('Dream Society Api Running');
}

exports.signup = (req, res) => {
	// Save User to Database
	console.log("Processing func -> SignUp");
	console.log("req.body===>",req.body)
	let body = req.body;
	let roles = req.body.roles;
	let roleName = [];
	if(roles){
		roleName.push(roles);
	}
	if (!body.firstName || !body.lastName || !body.userName || !body.email || !body.contact || !body.roles) {
	return res.json({
			message: "Parameters missing"
		});
	}
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		userName: req.body.userName,
		email: req.body.email,
		contact: req.body.contact,
		password: bcrypt.hashSync(req.body.password, 8)
	}).then(user => {
		Role.findAll({
			where: {
				roleName: {
					[Op.or]: roleName
				}
			}
		}).then(roles => {
			user.setRoles(roles).then(() => {
				res.status(httpStatus.CREATED).json("User registered successfully!");
			});
		}).catch(err => {
			res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Error -> " + err);
		});
	}).catch(err => {
		res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Fail! Error -> " + err);
	})
}

exports.update= (req, res) => {
	const id = req.params.id;
	const updates = req.body;
	User.find({
			where: {
				userId: id
			}
		})
		.then(user => {
			Role.findAll({
				where: {
					roleName:  req.body.roleName
				}
			}).then(roles => {
				user.setRoles(roles).then(() => {
					return user.updateAttributes(updates)
				});
			})
		.then(updatedUser => {
			res.json({
				message: "User updated successfully!",
				updatedUser: updatedUser
			});
		});
	})
}

exports.signin = (req, res) => {
	console.log("Sign-In", req.body);
	// let userName = '%'+req.body.userName;
	// console.log(userName)
	if (!req.body.userName) {
		return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
			message: "Username cannot be empty"
		})
	}
	if (!req.body.password) {
		return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({
			message: "Password cannot be empty"
		})
	}
	User.findOne({
		where: {
			userName:req.body.userName
		},	include: [{
			model: Role,
			attributes: ['id','roleName'],
		}]
	}).then(user => {
	    if (!user) {
			console.log("------user-------");
			return res.status(httpStatus.OK).send({
				status: 401,
				auth: false,
				user: user,
				message: "Invalid Username!"	
			});
		}

		var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
		if (!passwordIsValid) {
			return res.status(httpStatus.OK).send({
				status: 401,
				auth: false,
				user: user,
				message: "Invalid Password!"
				
			});
		}

		var token = jwt.sign({
			id: user.userId
		}, config.secret, {
			expiresIn: 86400 // expires in 24 hours
		});

		res.status(httpStatus.OK).send({
			status: 200,
			auth: true,
			accessToken: token,
			user: user,
			message: "Successfully Logged In"
		});

	}).catch(err => {
		console.log()
		res.status(500).send('Error -> ' + err);
	});
}

exports.get = (req, res) => {
	try{
	User.findAll({
			where: {
				isActive: true
			},
			include: [{
				model: Role,
				attributes: ['id','roleName'],
			}]
		})
		.then(user => {
			res.status(httpStatus.OK).json(user);
		});
	}catch(error){
		res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error:error})
	}
}


// exports.getUser = async (req,res,next) =>{
// 	try{
// 		console.log("in here get user");
// 	const user =await User.findAll(
// 		{where:{isActive:true},
// 		// raw: true,
// 		include: [{
// 			model: Role,
// 			attributes: ['roleName'],
// 		}]});
// 	if(user){
// 	// console.log("user==>",user)
// 	res.json(user)
// 	}else{
// 		res.json(user)
// 		console.log("user not found")
// 	}
// 	}catch(error){
// 		res.status(httpStatus.INTERNAL_SERVER_ERROR).json({error:error})
// 	}
// }
exports.userContent = (req, res) => {
	User.findOne({
		where: {
			userId: req.userId
		},
		attributes: ['firstName', 'lastName', 'email'],
		include: [{
			model: Role,
			attributes: ['id', 'roleName'],
			through: {
				attributes: ['userId', 'roleId'],
			}
		}]
	}).then(user => {
		res.status(httpStatus.OK).json({
			"description": "User Content Page",
			"user": user
		});
	}).catch(err => {
		res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
			"description": "Can not access User Page",
			"error": err
		});
	})
}

exports.adminBoard = (req, res) => {
	console.log(req.userId)
	User.findOne({
		where: {
			id: req.userId
		},
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
		where: {
			id: req.userId
		},
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

exports.getById = (req,res) => {
    User.findOne({
       where: {userId: req.params.id},
   }).then(user => {
    res.status(200).json({
        "description": "Flat Content Page",
        "flat": flat
    });
}).catch(err => {
    res.status(500).json({
        "description": "Can not Flat Page",
        "error": err
    });
})
}

// exports.updateUser = (req, res) => {
// 	const id = req.params.id;
// 	console.log("id==>",id);
// 	const updates = req.body;
// 	console.log("updates==>",updates);
// 	User.find({
// 			where: {
// 				userId: id
// 			}
// 		})
// 		.then(user => {
// 			return user.updateAttributes(updates)
// 		})
// 		.then(updatedUser => {
// 			res.json({
// 				message: "User updated successfully!",
// 				updatedUser: updatedUser
// 			});
// 		});
// }

exports.role = async (req, res, next) => {
	try {
		// console.log("req.session===>",req.userId);
		const role = await Role.findAll({
			attributes: ['id','roleName']
		});
		if (role) {
			res.status(200).json(role);
		}
	} catch (error) {
		res.status(500).json(error)
	}
}

exports.roleTest = async (req, res, next) => {
	try {
		let roleId;
		const user= await User.findOne({where:{userId:req.userId},include: [{model: Role}]});
		user.roles.map(data=>{
			roleId = data.id
		})
		console.log("user role name==>",roleId);
		if(roleId == 1){
		const role = await Role.findAll({
			where:{
				id:{
				[Op.ne]: roleId
			}
		},
		});
		if (role) {
			return res.status(200).json(role);
		}
	}
	if(roleId == 2){
    	const role = await Role.findAll({
			where:{
				id:{
				[Op.ne]: roleId},
				roleName:{
				[Op.ne]: 'SUPER_ADMIN'},
		},
		});
		if (role) {
			return res.status(200).json(role);
		}
	}

	if(roleId == 3 || roleId == 4 ){
    	const role = await Role.findAll({
			where:{
				id:{
				[Op.ne]: roleId},
				roleName:{
				[Op.ne]: 'VENDOR'},
		},
		});
		if (role) {
			return res.status(200).json(role);
		}
	}
	} catch (error) {
		res.status(500).json(error)
	}
}

exports.delete = (req, res) => {
	const id = req.params.id;
	if (!id) {
		res.status(httpStatus.UNPROCESSABLE_ENTITY).json({message:"Id is missing"});
	}
	const updates = req.body;
	User.find({
			where: {
				userId: id
			}
		})
		.then(user => {
			return user.updateAttributes(updates)
			// res.json({message:"User deleted successfully!",user:user});
		})
		.then(updatedUser => {
			res.status(httpStatus.OK).json({
				message: "User deactivated successfully!",
				updatedUser: updatedUser
			});
		});
}
