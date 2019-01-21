module.exports = (sequelize, Sequelize) => {
	const ServiceDetail = sequelize.define('service_detail_master', {
		serviceDetailId: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		service_detail: {
            type: Sequelize.STRING
        },
		isActive: {
			type: Sequelize.BOOLEAN,
			defaultValue: true
		},
	}, {
		freezeTableName: true
	});

	return ServiceDetail;
}


