const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

	const userController = require('../controller/user.js');
	const cityController = require('../controller/city');
	const countryController = require('../controller/country');
	const stateController = require('../controller/state');
	const societyController = require('../controller/society');
	const locationController = require('../controller/location');
	const towerController = require('../controller/tower');
	const flatController = require('../controller/flat');
	const serviceController = require('../controller/service');
	const sizeController = require('../controller/size');
	const messageController = require('../controller/message');
	const eventController = require('../controller/event');
	const serviceDetailController = require('../controller/serviceDetail');
	

	app.get('/', userController.start);

	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail,verifySignUp.checkRolesExisted], userController.signup);
	
    app.post('/api/auth/signin', userController.signin);
	
	app.get('/api/user',userController.get);
	
	// app.get('/api/user/test', [authJwt.verifyToken], userController.userContent);

	app.get('/api/user/test' ,[authJwt.verifyToken],userController.roleTest);

	app.get('/api/user/role',userController.role);

	app.put('/api/user/:id', userController.update);

	// app.put('/api/userUpdate/:id', userController.updateUser);

	app.put('/api/user/delete/:id', userController.delete);
	
	app.get('/api/test/owner', [authJwt.verifyToken, authJwt.isOwnerOrTenant], userController.managementBoard);
	
	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

	app.post('/api/city',  cityController.create);

	app.get('/api/city', cityController.get);

	app.get('/api/city/:id',  cityController.getById);

	app.put('/api/city/:id', cityController.update);

	app.delete('/api/city/:id', cityController.delete);

	app.post('/api/country',countryController.create);

	app.get('/api/country', countryController.get);

	app.get('/api/country/:id', countryController.getById);

	app.put('/api/country/:id',  countryController.update);

	app.delete('/api/country/:id', countryController.delete);

	app.post('/api/state', stateController.create);

	app.get('/api/state', stateController.get);

	app.get('/api/state/:id', stateController.getById);

	app.put('/api/state/:id',  stateController.update);

	app.delete('/api/state/:id', stateController.delete);

	app.post('/api/location', locationController.create);

	app.get('/api/location', locationController.get);

	app.get('/api/location/:id',  locationController.getById);

	app.put('/api/location/:id', locationController.update);

	app.delete('/api/location/:id', locationController.delete);

	app.post('/api/society', societyController.create);

	app.get('/api/society',societyController.get);
	
	app.get('/api/society/:id', societyController.getById);

	app.put('/api/society/:id', societyController.update);

	app.delete('/api/society/:id', societyController.delete);

	app.post('/api/tower', towerController.create);

	app.get('/api/tower', towerController.get);

	app.get('/api/tower/:id', towerController.getById);

	app.put('/api/tower/:id', towerController.update);

	app.delete('/api/tower/:id', towerController.delete);

	app.post('/api/flat',  flatController.create);

	app.get('/api/flat',  flatController.get);

	app.get('/api/flat/:id',  flatController.getById);

	app.put('/api/flat/:id',  flatController.update);

	app.put('/api/flat/delete/:id', flatController.delete);
	
	app.post('/api/service',  serviceController.create);

	app.get('/api/service', serviceController.get);

	app.get('/api/service/:id', serviceController.getById);

	app.put('/api/service/:id', serviceController.update);

	app.delete('/api/service/:id', serviceController.delete);

	app.post('/api/size',  sizeController.create);

	app.get('/api/size', sizeController.get);

	app.get('/api/size/:id', sizeController.getById);

	app.put('/api/size/:id', sizeController.update);

	app.delete('/api/size/:id', sizeController.delete);

	app.post('/api/event', eventController.create);

	app.get('/api/event', eventController.get);

	app.put('/api/event/:id', eventController.update);

	app.put('/api/event/delete/:id', eventController.delete);

	app.post('/api/sendMessage', messageController.sendMessage);

	app.post('/api/serviceDetail', serviceDetailController.create);

	app.get('/api/serviceDetail', serviceDetailController.get);

	app.get('/api/eventOrganiser', eventController.getEventOrganiser);

	
}