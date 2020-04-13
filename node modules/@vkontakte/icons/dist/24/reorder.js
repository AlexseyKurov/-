"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _browserSymbol = _interopRequireDefault(require("svg-baker-runtime/browser-symbol"));

var _es6ObjectAssign = require("es6-object-assign");

var _sprite = _interopRequireDefault(require("../sprite"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewBox = '0 0 24 24';
var id = 'reorder_24';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="reorder_24"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" /><path d="M21 18a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zm0-4a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2h16a1 1 0 0 1 1 1zM3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

if (_sprite.default) {
  var browserSymbol = new _browserSymbol.default({
    id: id,
    viewBox: viewBox,
    content: content
  });

  _sprite.default.add(browserSymbol);
}

function Icon(props) {
  return _react.default.createElement(_SvgIcon.default, (0, _es6ObjectAssign.assign)({}, props, {
    viewBox: viewBox,
    id: id,
    width: !isNaN(props.width) ? +props.width : 24,
    height: !isNaN(props.height) ? +props.height : 24
  }));
}

var _default = Icon;
exports.default = _default;