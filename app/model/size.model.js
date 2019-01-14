module.exports = (sequelize, Sequelize) => {
	const Size = sequelize.define('size', {
		sizeId:{
			type: Sequelize.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
	     sizeType: {
		  type: Sequelize.STRING
	  }
	});
	
	return Size;
}