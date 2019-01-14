module.exports = (sequelize, Sequelize) => {
	const State = sequelize.define('state', {
		stateId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  stateName: {
		  type: Sequelize.STRING
	  }
	});
	
	return State;
}