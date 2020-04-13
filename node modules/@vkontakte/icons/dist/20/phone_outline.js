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

var viewBox = '0 0 20 20';
var id = 'phone_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="phone_outline_20"><g fill="none" fill-rule="evenodd"><path opacity=".1" d="M0 0h20v20H0z" /><path d="M7.78 2.7l.7.833c1.373 1.628 1.229 4.054-.299 5.582l-.297.296c.226.38.633.878 1.23 1.475.53.53.984.912 1.344 1.149l.13.082.298-.297c1.526-1.527 3.95-1.672 5.58-.302l.833.702c1.46 1.229 1.602 3.419.346 4.894a3.859 3.859 0 0 1-2.29 1.289l-.506.06c-3.005.292-6.037-1.16-9.094-4.217-3.056-3.056-4.51-6.09-4.226-9.025l.06-.515a3.834 3.834 0 0 1 1.3-2.354l.168-.135c1.462-1.107 3.54-.924 4.723.484zm-3.911.788c-.321.276-.562.633-.698 1.033a2.37 2.37 0 0 0-.115.552c-.343 2.548.898 5.25 3.76 8.112 2.86 2.862 5.562 4.103 8.123 3.758a2.376 2.376 0 0 0 1.571-.81c.719-.844.636-2.082-.177-2.766l-.833-.701-.142-.112c-1.02-.739-2.471-.614-3.411.326l-.597.598-.088.076a.903.903 0 0 1-.862.133c-.648-.238-1.425-.818-2.346-1.74-.923-.923-1.503-1.7-1.74-2.347a.903.903 0 0 1 .209-.95l.598-.597.129-.137c.862-.987.906-2.44.084-3.416l-.702-.834-.112-.122c-.7-.697-1.853-.735-2.651-.056z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 20,
    height: !isNaN(props.height) ? +props.height : 20
  }));
}

var _default = Icon;
exports.default = _default;