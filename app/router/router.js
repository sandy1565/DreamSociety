const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');

module.exports = function(app) {

	const userController = require('../controller/user.js');
	const cityController = require('../controller/city');
	const countryController = require('../controller/country')
 
	app.post('/api/auth/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], userController.signup);
	
	app.post('/api/auth/signin', userController.signin);
	
	app.get('/api/user', [authJwt.verifyToken], userController.userContent);

	app.put('/api/user/:id', [authJwt.verifyToken], userController.update);

	app.delete('/api/user/:id', [authJwt.verifyToken], userController.delete);
	
	app.get('/api/test/owner', [authJwt.verifyToken, authJwt.isOwnerOrTenant], userController.managementBoard);
	
	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], userController.adminBoard);

	app.post('/api/city', [authJwt.verifyToken], cityController.create);

	app.get('/api/city', [authJwt.verifyToken], cityController.get);

	app.get('/api/city/:id', [authJwt.verifyToken], cityController.getById);

	app.put('/api/city/:id', [authJwt.verifyToken], cityController.update);

	app.delete('/api/city/:id', [authJwt.verifyToken], cityController.delete);

	app.post('/api/country', [authJwt.verifyToken], countryController.create);

	app.get('/api/country', [authJwt.verifyToken], countryController.get);

	app.get('/api/country/:id', [authJwt.verifyToken], countryController.getById);

	app.put('/api/country/:id', [authJwt.verifyToken], countryController.update);

	app.delete('/api/country/:id', [authJwt.verifyToken], countryController.delete);
}