module.exports = (sequelize, Sequelize) => {
	const State = sequelize.define('state_master', {
		stateId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		stateName: {
			type: Sequelize.STRING
		},
		isActive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
	}, {
		freezeTableName: true
	});

	return State;
}