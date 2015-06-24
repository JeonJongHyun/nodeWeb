/**
 * Created by hyun4513 on 2015-06-23.
 */
var oracledb = require('oracledb');
var dbConfig = require('./dbconfig.js');

function execute(queryDate, params) {
    oracledb.getConnection(
        {
            user: dbConfig.user,
            password: dbConfig.password,
            connectString: dbConfig.connectString
        },
        function (err, connection) {
            if (err) {
                console.error(err.message);
                return;
            }

            console.log('Connection was successful!');

            connection.execute( queryDate , [params],
                function (err, result) {
                    if (err) {
                        console.error(err.message);
                        return;
                    }
                    console.log(result.rows);
                });
        });
};

exports.execute = execute;
