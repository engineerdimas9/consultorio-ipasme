"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.isAnalista = exports.isAdmin = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    var token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({
      message: "No token provided"
    });

    try {
      var decoded = _jsonwebtoken.default.verify(token, _config.default.SECRET);

      req.userId = decoded.id;
      yield _mysqlConx.default.query('SELECT * FROM usuarios WHERE id = ?', [req.userId], (err, rows, fields) => {
        if (!err) {
          next();
        } else {
          console.log(err);
          return res.status(404).json({
            message: "No user found"
          });
        }
      });
    } catch (error) {
      return res.status(401).json({
        message: "Unauthorized!"
      });
    }
  });

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var isAdmin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res, next) {
    try {
      yield _mysqlConx.default.query('SELECT * FROM usuarios WHERE id = ? AND roles = "ADMIN"', [req.userId], (err, rows, fields) => {
        if (!err) {
          next();
          return;
        } else {
          console.log(err);
          return res.status(403).json({
            message: "Require Admin Role!"
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: error
      });
    }
  });

  return function isAdmin(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;

var isAnalista = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res, next) {
    try {
      yield _mysqlConx.default.query('SELECT * FROM usuarios WHERE id = ? AND (roles = "ANALISTA" OR roles = "ADMIN")', [req.userId], (err, rows, fields) => {
        if (!err) {
          next();
          return;
        } else {
          console.log(err);
          return res.status(403).json({
            message: "Require Analista Role!"
          });
        }
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: error
      });
    }
  });

  return function isAnalista(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isAnalista = isAnalista;