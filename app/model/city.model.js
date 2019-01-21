module.exports = (sequelize, Sequelize) => {
	const City = sequelize.define('city_master', {
	cityId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  cityName: {
		  type: Sequelize.STRING
	  },
		isActive:{
			type:Sequelize.BOOLEAN,
			defaultValue: true
		}, 
	},{
    freezeTableName: true
});
	
	return City;
}