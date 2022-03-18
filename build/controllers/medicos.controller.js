"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMedico = exports.getMedicoJoin = exports.getMedicoId = exports.getMedico = exports.deleteMedicoId = exports.createMedico = void 0;

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getMedico = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM medico', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getMedico(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getMedico = getMedico;

var getMedicoJoin = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT med.id_med,med.nombres,e.nombres as especialidades FROM medico as med join especialidad as e on med.especialidades = e.id_esp', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getMedicoJoin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMedicoJoin = getMedicoJoin;

var getMedicoId = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('SELECT * FROM medico WHERE id_med = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  return function getMedicoId(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMedicoId = getMedicoId;

var createMedico = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    var params = req.body;
    console.log(params);
    yield _mysqlConx.default.query('INSERT INTO medico SET ?', params, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.status(200).json("Ok");
    });
  });

  return function createMedico(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.createMedico = createMedico;

var updateMedico = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    var params = req.body;
    yield _mysqlConx.default.query('UPDATE medico SET ? where id_med=?', [params, id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function updateMedico(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.updateMedico = updateMedico;

var deleteMedicoId = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('DELETE FROM medico WHERE id_med=?', [id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function deleteMedicoId(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.deleteMedicoId = deleteMedicoId;