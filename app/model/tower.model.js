module.exports = (sequelize, Sequelize) => {
	const Tower = sequelize.define('tower_master', {
		towerId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		towerName: {
			type: Sequelize.STRING
		},
		isActive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
	}, {
		freezeTableName: true
	});

	return Tower;
}