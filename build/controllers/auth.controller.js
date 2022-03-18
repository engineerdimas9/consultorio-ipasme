"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signUp = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var salt = yield _bcryptjs.default.genSalt(10);
    var params = {
      nombres: req.body.nombres,
      cedula: req.body.cedula,
      cargo: req.body.cargo,
      roles: req.body.roles,
      usuario: req.body.usuario,
      passwor: yield _bcryptjs.default.hash(req.body.password, salt),
      email: req.body.email,
      direccion: req.body.direccion,
      telefono: req.body.telefono
    };
    console.log(params);
    yield _mysqlConx.default.query('INSERT INTO usuarios SET ?', params, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.status(200).json("Ok");
    });
  });

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    try {
      // Request body email can be an email or username
      yield _mysqlConx.default.query('SELECT * FROM usuarios WHERE usuario = ?', [req.body.usuario], (err, rows, fields) => {
        if (!err) {
          console.log(rows[0]);

          var matchPassword = _bcryptjs.default.compare(req.body.password, rows[0].passwor);

          if (!matchPassword) return res.status(401).json({
            token: null,
            message: "Invalid Password"
          });

          var token = _jsonwebtoken.default.sign({
            id: rows[0].id,
            role: rows[0].roles
          }, _config.default.SECRET, {
            expiresIn: 28800 // 7 hours

          });

          res.json({
            token
          });
        } else {
          console.log(err);
        }
      });
    } catch (error) {
      console.log(error);
    }
  });

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;