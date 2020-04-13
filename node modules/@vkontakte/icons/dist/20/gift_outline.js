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
var id = 'gift_outline_20';
var content = '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="gift_outline_20"><g fill="none" fill-rule="evenodd"><path d="M0 0h20v20H0z" /><path d="M14.846 2.314c1.026 1.026 1.23 2.875-.257 4.186h.911a3 3 0 0 1 3 3v.49c0 .827-.093 1.16-.267 1.487-.174.326-.43.582-.756.756a1.88 1.88 0 0 1-.477.182v1.618c0 1.56-.162 2.126-.467 2.696a3.18 3.18 0 0 1-1.324 1.324l-.202.101c-.48.224-1.037.349-2.229.364l-5.291.002c-1.56 0-2.126-.162-2.696-.467a3.18 3.18 0 0 1-1.324-1.324l-.101-.202c-.224-.48-.349-1.037-.364-2.229L3 12.415a1.88 1.88 0 0 1-.477-.182 1.817 1.817 0 0 1-.756-.756c-.16-.299-.251-.605-.265-1.29L1.5 9.5a3 3 0 0 1 3-3h.911c-1.487-1.31-1.283-3.16-.257-4.186C6.369 1.099 8.738 1.038 10 3.569c1.262-2.531 3.631-2.47 4.846-1.255zM9.25 12.499L4.5 12.5l.001 1.762.009.399c.021.604.083.924.202 1.2l.078.161c.165.309.399.543.708.708l.162.078c.33.143.724.203 1.598.211l1.991-.001v-4.519zm6.251.001l-4.751-.001v4.519l1.993.001.399-.009c.604-.021.924-.083 1.2-.202l.161-.078a1.68 1.68 0 0 0 .708-.708c.186-.348.267-.688.286-1.551l.004-.438V12.5zM9.159 7.999L4.5 8A1.5 1.5 0 0 0 3 9.5v.638l.007.232c.012.227.037.315.083.4a.319.319 0 0 0 .14.14c.11.059.223.085.632.09l5.387-.001.002-3L9.16 8l-.001-.001zM15.5 8l-4.661-.001h-.09v3h5.39c.408-.004.521-.03.63-.089a.319.319 0 0 0 .141-.14c.065-.122.09-.248.09-.78V9.5A1.5 1.5 0 0 0 15.5 8zM9.223 6.159c-.43-3.101-1.96-3.834-3.009-2.785C5.165 4.424 5.898 5.952 9 6.384l.257.032zm1.554 0l-.024.191.007.062.241-.029c3.101-.43 3.834-1.96 2.785-3.009-1.05-1.049-2.578-.316-3.01 2.785z" fill="currentColor" fill-rule="nonzero" /></g></symbol>';

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