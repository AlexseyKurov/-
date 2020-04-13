"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Touch = _interopRequireDefault(require("../Touch/Touch"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _withPlatform = _interopRequireDefault(require("../../hoc/withPlatform"));

var _dom = require("../../lib/dom");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Gallery = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Gallery, _Component);

  var _super = _createSuper(Gallery);

  function Gallery(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Gallery);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "container", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "slidesStore", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "viewport", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "timeout", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "isChildrenDirty", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onStart", function (e) {
      _this.setState({
        animation: false,
        startT: e.startT
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onMoveX", function (e) {
      if (_this.isDraggable) {
        e.originalEvent.preventDefault();

        if (e.isSlideX) {
          _this.props.onDragStart && _this.props.onDragStart(e);

          if (_this.state.deltaX !== e.shiftX || _this.state.dragging !== e.isSlideX) {
            _this.setState({
              deltaX: e.shiftX,
              dragging: e.isSlideX
            });
          }
        }
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onEnd", function (e) {
      var targetIndex = e.isSlide ? _this.getTarget() : _this.state.current;
      _this.props.onDragEnd && _this.props.onDragEnd(e);

      _this.go(targetIndex);

      if (_this.props.onEnd) {
        _this.props.onEnd({
          targetIndex: targetIndex
        });
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onResize", function () {
      _this.initializeSlides();

      var _this$state = _this.state,
          layerWidth = _this$state.layerWidth,
          slides = _this$state.slides;
      var containerWidth = _this.container.current.offsetWidth;

      _this.setState({
        shiftX: _this.calculateIndent(_this.state.current),
        containerWidth: containerWidth,
        min: _this.calcMin({
          layerWidth: layerWidth,
          containerWidth: containerWidth,
          slides: slides
        }),
        max: _this.calcMax({
          slides: slides
        }),
        animation: false
      }, function () {
        window.requestAnimationFrame(function () {
          return _this.setState({
            animation: true
          });
        });
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setTimeout", function (duration) {
      if (_dom.canUseDOM) {
        _this.timeout = window.setTimeout(function () {
          var _this$state2 = _this.state,
              slides = _this$state2.slides,
              current = _this$state2.current;
          var targetIndex = current < slides.length - 1 ? current + 1 : 0;

          _this.go(targetIndex);
        }, duration);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "clearTimeout", function () {
      clearTimeout(_this.timeout);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getSlideRef", function (id) {
      return function (slide) {
        _this.slidesStore["slide-".concat(id)] = slide;
      };
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getViewportRef", function (viewport) {
      _this.viewport = viewport;
    });

    var _current = typeof props.slideIndex === 'number' ? props.slideIndex : props.initialSlideIndex;

    if (!_this.props.onChange && typeof _this.props.slideIndex === 'number') {
      _this.logControlledError();
    }

    _this.state = {
      containerWidth: 0,
      current: _current,
      deltaX: 0,
      shiftX: 0,
      slides: [],
      animation: false,
      duration: 0.24
    };
    _this.container = _react.default.createRef();
    _this.slidesStore = {};
    return _this;
  }

  (0, _createClass2.default)(Gallery, [{
    key: "logControlledError",
    value: function logControlledError() {
      console.error('Failed prop type: You provided a `slideIndex` prop to `Gallery` without an `onChange` handler.');
    }
  }, {
    key: "initializeSlides",
    value: function initializeSlides(callback) {
      var _this2 = this;

      var slides = _react.default.Children.map(this.props.children, function (_item, i) {
        var elem = _this2.slidesStore["slide-".concat(i)];

        return {
          coordX: elem.offsetLeft,
          width: elem.offsetWidth
        };
      });

      var containerWidth = this.container.current.offsetWidth;
      var layerWidth = slides.reduce(function (val, slide) {
        return slide.width + val;
      }, 0);
      var min = this.calcMin({
        containerWidth: containerWidth,
        layerWidth: layerWidth,
        slides: slides
      });
      var max = this.calcMax({
        slides: slides
      });
      this.setState({
        min: min,
        max: max,
        layerWidth: layerWidth,
        containerWidth: containerWidth,
        slides: slides
      }, callback);
    }
  }, {
    key: "calcMin",
    value: function calcMin(_ref) {
      var containerWidth = _ref.containerWidth,
          layerWidth = _ref.layerWidth,
          slides = _ref.slides;
      var viewportWidth = this.viewport.offsetWidth;

      switch (this.props.align) {
        case 'left':
          return containerWidth - layerWidth;

        case 'right':
          return viewportWidth - layerWidth;

        case 'center':
          if (this.isCenterWithCustomWidth && slides.length) {
            var _slides = slides[slides.length - 1],
                coordX = _slides.coordX,
                width = _slides.width;
            return viewportWidth / 2 - coordX - width / 2;
          } else {
            return viewportWidth - (containerWidth - viewportWidth) / 2 - layerWidth;
          }

      }
    }
  }, {
    key: "calcMax",
    value: function calcMax(_ref2) {
      var slides = _ref2.slides;
      var viewportWidth = this.viewport.offsetWidth;

      if (this.isCenterWithCustomWidth && slides.length) {
        var _slides$ = slides[0],
            width = _slides$.width,
            coordX = _slides$.coordX;
        return viewportWidth / 2 - coordX - width / 2;
      } else {
        return 0;
      }
    }
    /*
     * Считает отступ слоя галереи
     */

  }, {
    key: "calculateIndent",
    value: function calculateIndent(targetIndex) {
      var slides = this.state.slides;

      if (!this.isDraggable) {
        return 0;
      }

      var targetSlide = slides.length ? slides[targetIndex] : null;

      if (targetSlide) {
        var coordX = targetSlide.coordX,
            width = targetSlide.width;

        if (this.isCenterWithCustomWidth) {
          var viewportWidth = this.viewport.offsetWidth;
          return viewportWidth / 2 - coordX - width / 2;
        }

        return this.validateIndent(-1 * coordX);
      } else {
        return 0;
      }
    }
    /*
     * Считает отступ слоя галереи во время драга
     */

  }, {
    key: "calculateDragIndent",
    value: function calculateDragIndent() {
      var _this$state3 = this.state,
          shiftX = _this$state3.shiftX,
          deltaX = _this$state3.deltaX,
          min = _this$state3.min,
          max = _this$state3.max;
      var indent = shiftX + deltaX;

      if (indent > max) {
        return max + Number((indent - max) / 3);
      } else if (indent < min) {
        return min + Number((indent - min) / 3);
      }

      return indent;
    }
  }, {
    key: "validateIndent",
    value: function validateIndent(value) {
      var _this$state4 = this.state,
          min = _this$state4.min,
          max = _this$state4.max;

      if (value < min) {
        return min;
      } else if (value > max) {
        return max;
      }

      return value;
    }
  }, {
    key: "getTarget",

    /*
     * Получает индекс слайда, к которому будет осуществлен переход
     */
    value: function getTarget() {
      var _this$state5 = this.state,
          slides = _this$state5.slides,
          current = _this$state5.current,
          deltaX = _this$state5.deltaX,
          shiftX = _this$state5.shiftX,
          startT = _this$state5.startT,
          max = _this$state5.max;
      var expectDeltaX = deltaX / (Date.now() - startT.getTime()) * 240 * 0.6;
      var shift = shiftX + deltaX + expectDeltaX - max;
      var direction = deltaX < 0 ? 1 : -1; // Находим ближайшую границу слайда к текущему отступу

      var targetIndex = slides.reduce(function (val, item, index) {
        var previousValue = Math.abs(slides[val].coordX + shift);
        var currentValue = Math.abs(item.coordX + shift);
        return previousValue < currentValue ? val : index;
      }, current);

      if (targetIndex === current) {
        var targetSlide = current + direction;

        if (targetSlide >= 0 && targetSlide < slides.length) {
          if (Math.abs(deltaX) > slides[targetSlide].width * 0.05) {
            targetIndex = targetSlide;
          }
        }
      }

      return targetIndex;
    }
  }, {
    key: "go",
    value: function go(targetIndex) {
      if (typeof this.props.slideIndex === 'number' && !this.props.onChange) {
        this.logControlledError();
        this.setState({
          animation: true,
          deltaX: 0,
          shiftX: this.calculateIndent(this.state.current)
        });
      } else {
        this.setState({
          animation: true,
          deltaX: 0,
          shiftX: this.calculateIndent(targetIndex),
          current: targetIndex
        });

        if (this.timeout) {
          this.clearTimeout();
          this.setTimeout(this.props.timeout);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.initializeSlides(function () {
        _this3.setState({
          shiftX: _this3.calculateIndent(_this3.state.current)
        });
      });
      window.addEventListener('resize', this.onResize);

      if (this.props.timeout) {
        this.setTimeout(this.props.timeout);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.children !== prevProps.children) {
        this.isChildrenDirty = true;
      }

      if (this.isChildrenDirty) {
        this.isChildrenDirty = false;
        this.initializeSlides();
      }

      if (prevState.current !== this.state.current && this.props.onChange) {
        this.props.onChange(this.state.current);
      }

      if (this.props.timeout && !prevProps.timeout) {
        this.setTimeout(this.props.timeout);
      }

      if (!this.props.timeout && prevProps.timeout) {
        this.clearTimeout();
      }

      if (this.props.slideIndex !== prevProps.slideIndex && typeof this.props.slideIndex === 'number') {
        this.go(this.props.slideIndex);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
      this.clearTimeout();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state6 = this.state,
          animation = _this$state6.animation,
          duration = _this$state6.duration,
          current = _this$state6.current,
          dragging = _this$state6.dragging;
      var _this$props = this.props,
          children = _this$props.children,
          slideWidth = _this$props.slideWidth,
          timeout = _this$props.timeout,
          initialSlideIndex = _this$props.initialSlideIndex,
          slideIndex = _this$props.slideIndex,
          onDragStart = _this$props.onDragStart,
          onDragEnd = _this$props.onDragEnd,
          onChange = _this$props.onChange,
          onEnd = _this$props.onEnd,
          align = _this$props.align,
          bullets = _this$props.bullets,
          className = _this$props.className,
          platform = _this$props.platform,
          restProps = (0, _objectWithoutProperties2.default)(_this$props, ["children", "slideWidth", "timeout", "initialSlideIndex", "slideIndex", "onDragStart", "onDragEnd", "onChange", "onEnd", "align", "bullets", "className", "platform"]);
      var indent = dragging ? this.calculateDragIndent() : this.calculateIndent(current);
      var layerStyle = {
        WebkitTransform: "translateX(".concat(indent, "px)"),
        transform: "translateX(".concat(indent, "px)"),
        WebkitTransition: animation ? "-webkit-transform ".concat(duration, "s cubic-bezier(.1, 0, .25, 1)") : 'none',
        transition: animation ? "transform ".concat(duration, "s cubic-bezier(.1, 0, .25, 1)") : 'none'
      };
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classNames.default)((0, _getClassName.default)('Gallery', platform), className, "Gallery--".concat(align), {
          'Gallery--dragging': dragging,
          'Gallery--custom-width': slideWidth === 'custom'
        })
      }, restProps, {
        ref: this.container
      }), /*#__PURE__*/_react.default.createElement(_Touch.default, {
        className: "Gallery__viewport",
        onStartX: this.onStart,
        onMoveX: this.onMoveX,
        onEnd: this.onEnd,
        style: {
          width: slideWidth === 'custom' ? '100%' : slideWidth
        },
        getRootRef: this.getViewportRef
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "Gallery__layer",
        style: layerStyle
      }, _react.default.Children.map(children, function (item, i) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "Gallery__slide",
          key: "slide-".concat(i),
          ref: _this4.getSlideRef(i)
        }, item);
      }))), bullets && /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames.default)('Gallery__bullets', "Gallery__bullets--".concat(bullets))
      }, _react.default.Children.map(children, function (_item, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: (0, _classNames.default)('Gallery__bullet', {
            'Gallery__bullet--active': index === current
          }),
          key: index
        });
      })));
    }
  }, {
    key: "isCenterWithCustomWidth",
    get: function get() {
      return this.props.slideWidth === 'custom' && this.props.align === 'center';
    }
  }, {
    key: "isDraggable",
    get: function get() {
      return this.state.layerWidth > this.state.containerWidth;
    }
  }]);
  return Gallery;
}(_react.Component);

(0, _defineProperty2.default)(Gallery, "defaultProps", {
  slideWidth: '100%',
  children: '',
  timeout: 0,
  initialSlideIndex: 0,
  align: 'left',
  bullets: false
});

var _default = (0, _withPlatform.default)(Gallery);

exports.default = _default;
//# sourceMappingURL=Gallery.js.map