module.exports = (sequelize, Sequelize) => {
	const Society = sequelize.define('society', {
		societyId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  societyName: {
		  type: Sequelize.STRING
	  }
	});
	
	return Society;
}