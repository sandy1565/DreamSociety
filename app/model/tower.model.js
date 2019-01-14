module.exports = (sequelize, Sequelize) => {
	const Tower = sequelize.define('tower', {
		towerId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  towerName: {
		  type: Sequelize.STRING
	  }
	});
	
	return Tower;
}