"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTipo = exports.getTipoId = exports.getTipo = exports.deleteTipoId = exports.createTipo = void 0;

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getTipo = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM tipo_paciente', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getTipo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getTipo = getTipo;

var getTipoId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('SELECT * FROM tipo_paciente WHERE id_tipo_p = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  return function getTipoId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getTipoId = getTipoId;

var createTipo = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var params = req.body;
    console.log(params);
    yield _mysqlConx.default.query('INSERT INTO tipo_paciente SET ?', params, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.status(200).json("ok");
    });
  });

  return function createTipo(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createTipo = createTipo;

var updateTipo = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    var params = req.body;
    yield _mysqlConx.default.query('UPDATE tipo_paciente SET ? where id_tipo_p=?', [params, id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function updateTipo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateTipo = updateTipo;

var deleteTipoId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('DELETE FROM tipo_paciente WHERE id_tipo_p=?', [id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function deleteTipoId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteTipoId = deleteTipoId;