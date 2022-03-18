"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = require("dotenv");

(0, _dotenv.config)();
var _default = {
  PORT: process.env.PORT || 4000,
  SECRET: 'products-api'
};
exports.default = _default;