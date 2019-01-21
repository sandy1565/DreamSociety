module.exports = (sequelize, Sequelize) => {
	const Society = sequelize.define('society_master', {
		societyId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		societyName: {
			type: Sequelize.STRING
		},
		isActive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
	}, {
		freezeTableName: true
	});

	return Society;
}