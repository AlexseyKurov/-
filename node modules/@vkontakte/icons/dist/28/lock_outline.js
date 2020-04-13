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

var viewBox = '0 0 28 28';
var id = 'lock_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="lock_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M14 2a6 6 0 0 1 6 6l.002 2.023c.843.052 1.38.2 1.935.496.663.355 1.19.881 1.544 1.544.385.72.519 1.413.519 2.783v6.308c0 1.37-.134 2.063-.519 2.783a3.726 3.726 0 0 1-1.544 1.544c-.72.385-1.413.519-2.783.519H8.846c-1.37 0-2.063-.134-2.783-.519a3.726 3.726 0 0 1-1.544-1.544C4.134 23.217 4 22.524 4 21.154v-6.308c0-1.37.134-2.063.519-2.783a3.726 3.726 0 0 1 1.544-1.544c.555-.297 1.093-.444 1.936-.496L8 8a6 6 0 0 1 6-6zm5.154 10H8.846c-1.068 0-1.449.073-1.84.283-.314.168-.555.409-.723.723-.21.391-.283.772-.283 1.84v6.308c0 1.068.073 1.449.283 1.84.168.314.409.555.723.723.391.21.772.283 1.84.283h10.308c1.068 0 1.449-.073 1.84-.283.314-.168.555-.409.723-.723.21-.391.283-.772.283-1.84v-6.308c0-1.068-.073-1.449-.283-1.84a1.726 1.726 0 0 0-.723-.723c-.391-.21-.772-.283-1.84-.283zM14 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm0-11a4 4 0 0 0-4 4v2h8V8a4 4 0 0 0-4-4z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 28,
    height: !isNaN(props.height) ? +props.height : 28
  }));
}

var _default = Icon;
exports.default = _default;