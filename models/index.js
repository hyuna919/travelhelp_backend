
const path = require('path');
const Sequelize = require('sequelize'); //sequelize 연결

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

//user와 comment 테이블을 연결시킨다.
db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize); 
db.Message = require('./message')(sequelize, Sequelize); 

//테이블 간의 관계를 정의해줌
db.User.hasMany(db.Post,{foreignKey:'UserId', sourceKdy:'id'});
db.Post.belongsTo(db.User, {foreignKey: 'writer_id', targetKey: 'id'});
db.Message.belongsTo(db.User, {foreignKey: 'sender', targetKey: 'id'});

module.exports = db; //db라는 객체에 user와 comment 모델을 담는다.