"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _helmet = _interopRequireDefault(require("helmet"));

var _package = _interopRequireDefault(require("../package.json"));

var _especialidad = _interopRequireDefault(require("./routes/especialidad.routes"));

var _medicos = _interopRequireDefault(require("./routes/medicos.routes"));

var _tipopac = _interopRequireDefault(require("./routes/tipopac.routes"));

var _pacientes = _interopRequireDefault(require("./routes/pacientes.routes"));

var _citas = _interopRequireDefault(require("./routes/citas.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)(); // Settings

app.set("pkg", _package.default);
app.set("port", process.env.PORT);
app.set("json spaces", 4); // Middlewares

var corsOptions = {// origin: "http://localhost:4000",
};
app.use((0, _cors.default)(corsOptions));
app.use((0, _helmet.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
})); // Welcome Routes

app.get("/", (req, res) => {
  res.json({
    message: "Bienvenidos al API de Consultorios",
    name: app.get("pkg").name,
    version: app.get("pkg").version,
    description: app.get("pkg").description,
    author: app.get("pkg").author
  });
}); // Routes

app.use("/especialidad", _especialidad.default);
app.use("/medico", _medicos.default);
app.use("/tipo", _tipopac.default);
app.use("/paciente", _pacientes.default);
app.use("/cita", _citas.default);
app.use("/usuario", _user.default);
app.use("/auth", _auth.default);
var _default = app;
exports.default = _default;