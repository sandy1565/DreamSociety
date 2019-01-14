module.exports = (sequelize, Sequelize) => {
	const Location = sequelize.define('location', {
		locationId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  locationName: {
		  type: Sequelize.STRING
	  }
	});
	
	return Location;
}