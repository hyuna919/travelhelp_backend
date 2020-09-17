const app = require('./conn_android.js');
const http = require('http').Server(app);
const io = require('./routes/chat.js')(http);
//const io = require('socket.io')(http);
const sequelize = require('./models').sequelize;

sequelize.sync();

// app.set('port', (process.env.PORT || 3000));
 
// app.use(express.static(__dirname + '/public'));
 
// // views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
 
//서버연결하기 직전에뜸
console.log("outside io");




http.listen(3000, function(){
    console.log('Node app is running on port', app.get('port'));
});