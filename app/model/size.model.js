module.exports = (sequelize, Sequelize) => {
	const Size = sequelize.define('size_master', {
		sizeId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		sizeType: {
			type: Sequelize.STRING
		},
		isActive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
	}, {
		freezeTableName: true
	});

	return Size;
}