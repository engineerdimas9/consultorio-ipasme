"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEspecialidad = exports.getEspecialidadId = exports.getEspecialidad = exports.deleteEspecialidadId = exports.createEspecialidad = void 0;

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getEspecialidad = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM especialidad', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getEspecialidad(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getEspecialidad = getEspecialidad;

var getEspecialidadId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('SELECT * FROM especialidad WHERE id_esp = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  return function getEspecialidadId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getEspecialidadId = getEspecialidadId;

var createEspecialidad = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var params = req.body;
    console.log(params);
    yield _mysqlConx.default.query('INSERT INTO especialidad SET ?', params, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.status(200).json("Ok");
    });
  });

  return function createEspecialidad(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createEspecialidad = createEspecialidad;

var updateEspecialidad = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('UPDATE especialidad SET nombres=? where id_esp=?', [req.body.nombres, id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function updateEspecialidad(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateEspecialidad = updateEspecialidad;

var deleteEspecialidadId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('DELETE FROM especialidad WHERE id_esp=?', [id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function deleteEspecialidadId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteEspecialidadId = deleteEspecialidadId;