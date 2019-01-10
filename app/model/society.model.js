module.exports = (sequelize, Sequelize) => {
	const Society = sequelize.define('society', {
	  name: {
		  type: Sequelize.STRING
	  }
	});
	
	return Society;
}