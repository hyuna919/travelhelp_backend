const app = require('./conn_android.js');
const http = require('http').Server(app);
const io = require('./routes/chat.js')(http);
const sequelize = require('./models').sequelize;

sequelize.sync();
 
//서버연결하기 직전에뜸
console.log("outside io");


http.listen(3000, function(){
    console.log('Node app is running on port', app.get('port'));
});