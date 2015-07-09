/**
 * Created by hyun4513 on 2015-06-23.
 */

var connections = require('../db/connections.js');

exports.dietList = function (req, res) {
    var date = [
        {'seq_id':'1', 'date':'2015-06-23', 'name': '조식', 'snippet': '김치볶음밥'},
        {'seq_id':'2', 'date':'2015-06-23', 'name': '중식', 'snippet': '삼겹살'},
        {'seq_id':'3', 'date':'2015-06-23', 'name': '석식', 'snippet': '밀면'}
    ];
    res.send(date);
};


exports.busList = function (req, res) {

    var params = '267000';
    var queryDate = 'SELECT emp_no, user_name '
        + 'FROM stx_com_insa_user '
        + 'WHERE 1= 1 and del_date is null  and dept_code = :did';

    connections.execute(queryDate, params, req, res);
};

exports.loginCheck = function (req, res) {


    console.log('email === ' + req.body.email);
    console.log('email ==='  + req.body.password);

    res.end();
};

