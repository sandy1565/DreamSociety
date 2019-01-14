const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
db.user = require('../model/user.model.js')(sequelize, Sequelize);
db.role = require('../model/role.model.js')(sequelize, Sequelize);
db.society = require('../model/society.model.js')(sequelize, Sequelize);
db.city = require('../model/city.model.js')(sequelize, Sequelize);
db.country = require('../model/country.model.js')(sequelize, Sequelize);
db.location = require('../model/location.model.js')(sequelize, Sequelize);
db.state = require('../model/state.model.js')(sequelize, Sequelize);
db.tower = require('../model/tower.model.js')(sequelize, Sequelize);
db.flat = require('../model/flat.model.js')(sequelize, Sequelize);
db.service = require('../model/service.model.js')(sequelize, Sequelize);
db.size = require('../model/size.model.js')(sequelize, Sequelize);
 
db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
db.society.belongsTo(db.city,{foreignKey: 'cityId'});
db.society.belongsTo(db.country,{foreignKey: 'countryId'});
db.society.belongsTo(db.location,{foreignKey: 'locationId'});
db.society.belongsTo(db.state,{foreignKey: 'stateId'});
db.society.belongsTo(db.user,{foreignKey: 'userId'});
db.country.belongsTo(db.user,{foreignKey: 'userId'});
db.state.belongsTo(db.country,{foreignKey: 'countryId'});
db.state.belongsTo(db.user,{foreignKey: 'userId'});
db.city.belongsTo(db.user,{foreignKey: 'userId'});
db.city.belongsTo(db.state,{foreignKey: 'stateId'});
db.location.belongsTo(db.country,{foreignKey: 'countryId'});
db.location.belongsTo(db.state,{foreignKey: 'stateId'});
db.location.belongsTo(db.city,{foreignKey: 'cityId'});
db.location.belongsTo(db.user,{foreignKey: 'userId'});

module.exports = db;