module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
    userId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  firstName: {
		  type: Sequelize.STRING
		},
    lastName: {
		  type: Sequelize.STRING
		},
		userName: {
		  type: Sequelize.STRING
	  },
	  contact: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
	  },
	  password: {
		  type: Sequelize.STRING
		},
		isActive:{
			type:Sequelize.BOOLEAN,
			defaultValue:true
		}
	});
	
	return User;
}