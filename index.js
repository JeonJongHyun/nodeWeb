/**
 * Created by hyun4513 on 2015-06-18.
 */

var express = require('express'),
    morgan   = require('morgan'),
    path      = require('path'),
    bodyParser = require('body-parser'),
    routes   = require('./routes/route')
    ;




var app = express();
//PORT 설정
app.set('port', process.env.PORT || 8081);
//__dirname 절대경로의 root 를 설정
app.set('views', __dirname + '/app');
//log 출력
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//static() 정적 파일 처리 index 파일을 찾아 뷰한다
app.use(express.static(path.join(__dirname, 'app')));




app.post('/diet/dietList', routes.dietList);
app.post('/bus/busList', routes.busList);
app.post('/auth/login', routes.loginCheck);


app.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
})
