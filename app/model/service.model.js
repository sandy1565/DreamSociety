module.exports = (sequelize, Sequelize) => {
	const Service = sequelize.define('service', {
		serviceId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  serviceName: {
		  type: Sequelize.STRING
      },
      service_detail:{
        type: Sequelize.STRING
      }
	});
	
	return Service;
}