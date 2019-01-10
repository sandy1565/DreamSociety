const env = {
  database: 'dream_society',
  username: 'client_user',
  password: 'client1234',
  host: '192.168.1.113',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
