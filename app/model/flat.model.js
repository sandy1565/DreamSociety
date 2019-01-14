module.exports = (sequelize, Sequelize) => {
	const Flat = sequelize.define('flat', {
	flatId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	  type: {
		  type: Sequelize.STRING
      },
      size:{
       type: Sequelize.INTEGER
      }
	});
	
	return Flat;
}