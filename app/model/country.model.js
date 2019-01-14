module.exports = (sequelize, Sequelize) => {
	const Country = sequelize.define('country', {
	  countryId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  countryName: {
		  type: Sequelize.STRING
		},
		code: {
		  type: Sequelize.STRING
		},
		currency:{
			type: Sequelize.STRING
		},
		phoneCode:{
			type: Sequelize.STRING
		}
	});
	
	return Country;
}