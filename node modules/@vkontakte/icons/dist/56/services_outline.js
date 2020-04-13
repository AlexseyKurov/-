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

var viewBox = '0 0 56 56';
var id = 'services_outline_56';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" id="services_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M13.91 30l4.528.002c2.03.022 3.1.249 4.212.843a6.043 6.043 0 0 1 2.505 2.505c.627 1.174.845 2.301.845 4.56v4.18c0 2.259-.218 3.386-.845 4.56a6.043 6.043 0 0 1-2.505 2.505c-1.174.627-2.301.845-4.56.845h-4.18c-2.259 0-3.386-.218-4.56-.845a6.043 6.043 0 0 1-2.505-2.505C6.218 45.476 6 44.349 6 42.09l.002-4.528c.022-2.03.249-3.1.843-4.212a6.043 6.043 0 0 1 2.505-2.505c1.174-.627 2.301-.845 4.56-.845zm24 0l4.528.002c2.03.022 3.1.249 4.212.843a6.043 6.043 0 0 1 2.505 2.505c.627 1.174.845 2.301.845 4.56v4.18c0 2.259-.218 3.386-.845 4.56a6.043 6.043 0 0 1-2.505 2.505c-1.174.627-2.301.845-4.56.845h-4.18c-2.259 0-3.386-.218-4.56-.845a6.043 6.043 0 0 1-2.505-2.505c-.627-1.174-.845-2.301-.845-4.56l.002-4.528c.022-2.03.249-3.1.843-4.212a6.043 6.043 0 0 1 2.505-2.505c1.174-.627 2.301-.845 4.56-.845zm-19.82 3l-4.456.001c-1.6.013-2.225.146-2.869.49a3.044 3.044 0 0 0-1.274 1.274c-.364.68-.491 1.34-.491 3.145l.001 4.456c.013 1.6.146 2.225.49 2.869.296.553.72.978 1.274 1.274.608.325 1.2.462 2.611.487l.534.004h4.18c1.806 0 2.466-.127 3.145-.49a3.044 3.044 0 0 0 1.274-1.275c.325-.608.462-1.2.487-2.611L23 42.09v-4.18c0-1.806-.127-2.466-.49-3.145a3.044 3.044 0 0 0-1.275-1.274c-.68-.364-1.34-.491-3.145-.491zm24 0l-4.456.001c-1.6.013-2.225.146-2.869.49a3.044 3.044 0 0 0-1.274 1.274c-.364.68-.491 1.34-.491 3.145l.001 4.456c.013 1.6.146 2.225.49 2.869.296.553.72.978 1.274 1.274.608.325 1.2.462 2.611.487l.534.004h4.18c1.806 0 2.466-.127 3.145-.49a3.044 3.044 0 0 0 1.274-1.275c.325-.608.462-1.2.487-2.611L47 42.09v-4.18c0-1.806-.127-2.466-.49-3.145a3.044 3.044 0 0 0-1.275-1.274c-.68-.364-1.34-.491-3.145-.491zM38.228 4.825a6.043 6.043 0 0 1 3.544 0c1.273.385 2.224 1.029 3.821 2.626l3.2 3.203c1.42 1.451 2.017 2.368 2.382 3.574a6.043 6.043 0 0 1 0 3.544c-.385 1.273-1.029 2.224-2.626 3.821l-2.956 2.956c-1.597 1.597-2.548 2.24-3.821 2.626a6.043 6.043 0 0 1-3.544 0c-1.273-.385-2.224-1.029-3.821-2.626l-2.956-2.956c-1.597-1.597-2.24-2.548-2.626-3.821a6.043 6.043 0 0 1 0-3.544c.385-1.273 1.029-2.224 2.626-3.821l3.203-3.2c1.451-1.42 2.368-2.017 3.574-2.382zM13.91 6l4.528.002c2.03.022 3.1.249 4.212.843a6.043 6.043 0 0 1 2.505 2.505c.627 1.174.845 2.301.845 4.56v4.18c0 2.259-.218 3.386-.845 4.56a6.043 6.043 0 0 1-2.505 2.505c-1.174.627-2.301.845-4.56.845h-4.18c-2.259 0-3.386-.218-4.56-.845a6.043 6.043 0 0 1-2.505-2.505C6.218 21.476 6 20.349 6 18.09l.002-4.528c.022-2.03.249-3.1.843-4.212A6.043 6.043 0 0 1 9.35 6.845C10.524 6.218 11.651 6 13.91 6zM40.9 7.696a3.044 3.044 0 0 0-1.802 0c-.737.223-1.294.6-2.57 1.876l-3.151 3.152c-1.122 1.14-1.47 1.677-1.682 2.375a3.044 3.044 0 0 0 0 1.802c.2.66.522 1.175 1.502 2.19l.374.38 2.956 2.957c1.277 1.277 1.834 1.653 2.57 1.876.601.182 1.203.182 1.803 0 .66-.2 1.175-.522 2.19-1.502l.38-.374 2.957-2.956c1.277-1.277 1.653-1.834 1.876-2.57.182-.601.182-1.203 0-1.803-.223-.737-.6-1.294-1.876-2.57l-3.152-3.151c-1.14-1.122-1.677-1.47-2.375-1.682zM18.091 9l-4.457.001c-1.6.013-2.225.146-2.869.49a3.044 3.044 0 0 0-1.274 1.274c-.364.68-.491 1.34-.491 3.145l.001 4.456c.013 1.6.146 2.225.49 2.869.296.553.72.978 1.274 1.274.608.325 1.2.462 2.611.487l.534.004h4.18c1.806 0 2.466-.127 3.145-.49a3.044 3.044 0 0 0 1.274-1.275c.325-.608.462-1.2.487-2.611L23 18.09v-4.18c0-1.806-.127-2.466-.49-3.145a3.044 3.044 0 0 0-1.275-1.274C20.555 9.127 19.895 9 18.09 9z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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
    width: !isNaN(props.width) ? +props.width : 56,
    height: !isNaN(props.height) ? +props.height : 56
  }));
}

var _default = Icon;
exports.default = _default;