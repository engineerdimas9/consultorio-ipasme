"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePaciente = exports.getPacienteId = exports.getPaciente = exports.deletePacienteId = exports.createPaciente = void 0;

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPaciente = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM paciente', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getPaciente(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPaciente = getPaciente;

var getPacienteId = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('SELECT * FROM paciente WHERE id_paciente = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  return function getPacienteId(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPacienteId = getPacienteId;

var createPaciente = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var params = req.body;
    console.log(params);
    yield _mysqlConx.default.query('INSERT INTO paciente SET ?', params, function (error, results, fields) {
      if (error) throw error;

      _mysqlConx.default.query('SELECT id_paciente FROM paciente WHERE nombres = ?', [req.body.nombres], (err, rows, fields) => {
        if (!err) {
          res.status(200).json({
            "id": rows[0].id_paciente
          });
        } else {
          console.log(err);
        }
      });
    });
  });

  return function createPaciente(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createPaciente = createPaciente;

var updatePaciente = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    var params = req.body;
    yield _mysqlConx.default.query('UPDATE paciente SET ? where id_paciente=?', [params, id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function updatePaciente(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updatePaciente = updatePaciente;

var deletePacienteId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('DELETE FROM paciente WHERE id_paciente=?', [id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function deletePacienteId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deletePacienteId = deletePacienteId;