"use strict";

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysqlConnection = _mysql.default.createConnection({
  /* host: 'b1glzap9r1tyfqofpbam-mysql.services.clever-cloud.com',
   user: 'uonrhmk7wcxzsstp',
   password: 'rTvTFHSVHkiVr1IjasIM',
   database: 'b1glzap9r1tyfqofpbam',
   multipleStatements: true*/
  host: 'db4free.net',
  user: 'ipasme2022',
  password: '723fa34f',
  database: 'ipamesapi',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Conectado a MySQL');
  }
});
module.exports = mysqlConnection;