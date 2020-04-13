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
var id = 'check_shield_device_outline_28';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="check_shield_device_outline_28"><g fill="none" fill-rule="evenodd"><path d="M0 0h28v28H0z" /><path d="M18.108 8.076l.218.018c.206.027.375.066.762.177l5.752 1.643A1.6 1.6 0 0 1 26 11.453V17.5c0 3.48-2.611 6.279-7.606 8.42l-.394.168-.394-.169C12.611 23.78 10 20.981 10 17.5v-6.047a1.6 1.6 0 0 1 1.16-1.539l5.905-1.686c.283-.079.432-.111.61-.134.22-.028.43-.028.65 0zM12.872 2c1.777 0 2.648.168 3.553.652a4.632 4.632 0 0 1 1.887 1.858 1 1 0 0 1-1.686 1.069l-.063-.1a2.632 2.632 0 0 0-1.08-1.063c-.51-.272-1.004-.388-2.126-.411L12.873 4l-3.006.001c-1.29.016-1.803.123-2.35.415a2.635 2.635 0 0 0-1.1 1.102c-.273.508-.389 1.003-.412 2.126L6 8.128l.001 12.005c.016 1.29.123 1.803.415 2.35.255.477.624.846 1.102 1.1.508.273 1.003.389 2.126.412l.484.005h.369a1 1 0 0 1 .117 1.993l-.117.007h-.37c-1.776 0-2.647-.168-3.552-.652a4.634 4.634 0 0 1-1.923-1.923c-.43-.806-.61-1.58-.645-2.99l-.005-.29L4 8.128c0-1.777.168-2.648.652-3.553a4.634 4.634 0 0 1 1.923-1.923c.806-.43 1.58-.61 2.99-.645l.29-.005L12.872 2zM18 10.073l-.073.005c-.059.008-.12.02-.258.058L12 11.754V17.5c0 2.38 1.833 4.476 5.692 6.268l.308.14.308-.14c3.745-1.74 5.582-3.766 5.687-6.059L24 17.5v-5.746l-5.713-1.63a1.917 1.917 0 0 0-.178-.04l-.036-.006a.535.535 0 0 0-.146 0zm3.536 4.19a.9.9 0 0 1 .08 1.181l-.08.092-4 4a.9.9 0 0 1-1.18.08l-.092-.08-1.6-1.6a.9.9 0 0 1 1.18-1.353l.092.08.964.964 3.364-3.363a.9.9 0 0 1 1.272 0z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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