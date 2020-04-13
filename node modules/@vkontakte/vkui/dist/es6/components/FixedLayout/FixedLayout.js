import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/assertThisInitialized";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import getClassName from '../../helpers/getClassName';
import PropTypes from 'prop-types';
import classNames from '../../lib/classNames';
import { transitionEndEventName, transitionStartEventName } from '../View/View';
import { tabbarHeight } from '../../appearance/constants';
import withInsets from '../../hoc/withInsets';
import { isNumeric } from '../../lib/utils';
import withPlatform from '../../hoc/withPlatform';

var FixedLayout = /*#__PURE__*/function (_React$Component) {
  _inherits(FixedLayout, _React$Component);

  var _super = _createSuper(FixedLayout);

  function FixedLayout() {
    var _this;

    _classCallCheck(this, FixedLayout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      position: null,
      top: null
    });

    _defineProperty(_assertThisInitialized(_this), "el", void 0);

    _defineProperty(_assertThisInitialized(_this), "onViewTransitionStart", function (e) {
      var panelScroll = e.detail.scrolls[_this.context.panel] || 0;

      _this.setState({
        position: 'absolute',
        top: _this.el.offsetTop + panelScroll
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onViewTransitionEnd", function () {
      _this.setState({
        position: null,
        top: null
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getRef", function (element) {
      _this.el = element;
      var getRootRef = _this.props.getRootRef;

      if (getRootRef) {
        if (typeof getRootRef === 'function') {
          getRootRef(element);
        } else {
          getRootRef.current = element;
        }
      }
    });

    return _this;
  }

  _createClass(FixedLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.document.addEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.addEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.document.removeEventListener(transitionStartEventName, this.onViewTransitionStart);
      this.document.removeEventListener(transitionEndEventName, this.onViewTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          style = _this$props.style,
          vertical = _this$props.vertical,
          getRootRef = _this$props.getRootRef,
          insets = _this$props.insets,
          platform = _this$props.platform,
          filled = _this$props.filled,
          restProps = _objectWithoutProperties(_this$props, ["className", "children", "style", "vertical", "getRootRef", "insets", "platform", "filled"]);

      var tabbarPadding = this.context.hasTabbar ? tabbarHeight : 0;
      var paddingBottom = vertical === 'bottom' && isNumeric(insets.bottom) ? insets.bottom + tabbarPadding : null;
      return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
        ref: this.getRef,
        className: classNames(getClassName('FixedLayout', platform), {
          'FixedLayout--filled': filled
        }, "FixedLayout--".concat(vertical), className),
        style: _objectSpread({}, style, {}, this.state, {
          paddingBottom: paddingBottom
        })
      }), /*#__PURE__*/React.createElement("div", {
        className: "FixedLayout__in"
      }, children));
    }
  }, {
    key: "document",
    get: function get() {
      return this.context.document || document;
    }
  }]);

  return FixedLayout;
}(React.Component);

_defineProperty(FixedLayout, "contextTypes", {
  panel: PropTypes.string,
  document: PropTypes.any,
  hasTabbar: PropTypes.bool
});

export default withPlatform(withInsets(FixedLayout));
//# sourceMappingURL=FixedLayout.js.map