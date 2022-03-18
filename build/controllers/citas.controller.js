"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateCitas = exports.getGenero = exports.getEstatus = exports.getCitasId = exports.getCitas = exports.getCitaJoin = exports.deleteCitasId = exports.createCitas = void 0;

var _mysqlConx = _interopRequireDefault(require("../mysql-conx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCitas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM cita_medica as c, paciente as p WHERE c.paciente = p.id_paciente', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getCitas(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCitas = getCitas;

var getGenero = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM genero', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getGenero(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getGenero = getGenero;

var getEstatus = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT * FROM estatus', (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getEstatus(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getEstatus = getEstatus;

var getCitaJoin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    yield _mysqlConx.default.query('SELECT c.id_cita, c.cita, c.fecha_cita, med.nombres as medico, es.nombres as especialidades, e.nombres as estatus FROM estatus as e, medico as med, especialidad as es, cita_medica as c WHERE c.id_med = med.id_med AND es.id_esp = c.id_esp AND e.id_estatus = estatus', (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.status(200).json(rows);
      } else {
        console.log(err);
      }
    });
  });

  return function getCitaJoin(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getCitaJoin = getCitaJoin;

var getCitasId = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('SELECT * FROM cita_medica as c, paciente as p WHERE c.paciente = p.id_paciente AND c.id_cita = ?', [id], (err, rows, fields) => {
      if (!err) {
        res.status(200).json(rows[0]);
      } else {
        console.log(err);
      }
    });
  });

  return function getCitasId(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getCitasId = getCitasId;

var createCitas = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    var params = req.body;
    console.log(params);
    yield _mysqlConx.default.query('INSERT INTO cita_medica SET ?', params, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.status(200).json("Ok");
    });
  });

  return function createCitas(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.createCitas = createCitas;

var updateCitas = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    var params = req.body;
    yield _mysqlConx.default.query('UPDATE cita_medica SET ? where id_cita=?', [params, id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function updateCitas(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateCitas = updateCitas;

var deleteCitasId = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (req, res) {
    var {
      id
    } = req.params;
    yield _mysqlConx.default.query('DELETE FROM cita_medica WHERE id_cita=?', [id], function (error, results, fields) {
      if (error) throw error;
      res.status(200).json("Ok");
    });
  });

  return function deleteCitasId(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteCitasId = deleteCitasId;