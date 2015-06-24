/**
 * Created by hyun4513 on 2015-06-23.
 */

//var connections = require('../db/connections.js');

exports.dietList = function (req, res) {
    var date = [
        {'seq_id':'1', 'date':'2015-06-23', 'name': '조식', 'snippet': '김치볶음밥'},
        {'seq_id':'2', 'date':'2015-06-23', 'name': '중식', 'snippet': '삼겹살'},
        {'seq_id':'3', 'date':'2015-06-23', 'name': '석식', 'snippet': '밀면'}
    ];
    res.send(date);
};


exports.busList = function (req, res) {

    //var params = 'P01072';
    //var queryDate = 'SELECT dept_code, dept_name '
    //                + 'FROM stx_com_insa_user '
    //                + 'WHERE emp_no = :did';
    //connections.execute(queryDate, params);
    var date = [
        {'seq_id':'1', 'date':'2015-06-23', 'name': '조식', 'snippet': '김치볶음밥'},
        {'seq_id':'2', 'date':'2015-06-23', 'name': '중식', 'snippet': '삼겹살'},
        {'seq_id':'3', 'date':'2015-06-23', 'name': '석식', 'snippet': '밀면'}
    ];

    res.send(date);
};