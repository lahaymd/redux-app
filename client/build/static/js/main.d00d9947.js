'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Circle = function (_Component) {
    _inherits(Circle, _Component);

    function Circle() {
        _classCallCheck(this, Circle);

        return _possibleConstructorReturn(this, (Circle.__proto__ || Object.getPrototypeOf(Circle)).apply(this, arguments));
    }

    _createClass(Circle, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('circle', { onClick: function onClick() {
                    return _this2.props.onClick();
                }, cx: '50%', cy: '50%', r: '200', filter: 'url(#f)', fill: 'url(#p)' });
        }
    }]);

    return Circle;
}(_react.Component);

exports.default = Circle;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EdgeDetection = function (_Component) {
    _inherits(EdgeDetection, _Component);

    function EdgeDetection() {
        _classCallCheck(this, EdgeDetection);

        return _possibleConstructorReturn(this, (EdgeDetection.__proto__ || Object.getPrototypeOf(EdgeDetection)).apply(this, arguments));
    }

    _createClass(EdgeDetection, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement('feConvolveMatrix', { 'in': 'comp', result: 'edge', order: '3 3', preserveAlpha: 'false', kernelMatrix: '-1 -1 -1 -1 8 -1 -1 -1 -1' });
        }
    }]);

    return EdgeDetection;
}(_react.Component);

exports.default = EdgeDetection;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeBlend = function (_Component) {
    _inherits(FeBlend, _Component);

    function FeBlend() {
        _classCallCheck(this, FeBlend);

        return _possibleConstructorReturn(this, (FeBlend.__proto__ || Object.getPrototypeOf(FeBlend)).apply(this, arguments));
    }

    _createClass(FeBlend, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feBlend', { 'in': this.props.in, in2: this.props.in2, mode: this.props.mode });
        }
    }]);

    return FeBlend;
}(_react.Component);

exports.default = FeBlend;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeColorMatrix = function (_Component) {
    _inherits(FeColorMatrix, _Component);

    function FeColorMatrix() {
        _classCallCheck(this, FeColorMatrix);

        return _possibleConstructorReturn(this, (FeColorMatrix.__proto__ || Object.getPrototypeOf(FeColorMatrix)).apply(this, arguments));
    }

    _createClass(FeColorMatrix, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feColorMatrix', { type: this.props.type, values: this.props.values, 'in': this.props.in, result: this.props.result });
        }
    }]);

    return FeColorMatrix;
}(_react.Component);

exports.default = FeColorMatrix;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeComponentTransfer = function (_Component) {
    _inherits(FeComponentTransfer, _Component);

    function FeComponentTransfer() {
        _classCallCheck(this, FeComponentTransfer);

        return _possibleConstructorReturn(this, (FeComponentTransfer.__proto__ || Object.getPrototypeOf(FeComponentTransfer)).apply(this, arguments));
    }

    _createClass(FeComponentTransfer, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'feComponentTransfer',
                { 'in': this.props.in, result: this.props.result },
                _react2.default.createElement('feFuncR', {
                    type: this.props.typeR,
                    tableValues: this.props.tableValuesR,
                    slope: this.props.slopeR,
                    intercept: this.props.interceptR,
                    amplitude: this.props.amplitudeR,
                    exponent: this.props.exponentR,
                    offset: this.props.offsetR

                }),
                _react2.default.createElement('feFuncG', {
                    type: this.props.typeG,
                    tableValues: this.props.tableValuesG,
                    slope: this.props.slopeG,
                    intercept: this.props.interceptG,
                    amplitude: this.props.amplitudeG,
                    exponent: this.props.exponentG,
                    offset: this.props.offsetG

                }),
                _react2.default.createElement('feFuncB', {
                    type: this.props.typeB,
                    tableValues: this.props.tableValuesB,
                    slope: this.props.slopeB,
                    intercept: this.props.interceptB,
                    amplitude: this.props.amplitudeB,
                    exponent: this.props.exponentB,
                    offset: this.props.offsetB

                }),
                _react2.default.createElement('feFuncA', {
                    type: this.props.typeA,
                    tableValues: this.props.tableValuesA,
                    slope: this.props.slopeA,
                    intercept: this.props.interceptA,
                    amplitude: this.props.amplitudeA,
                    exponent: this.props.exponentA,
                    offset: this.props.offsetA

                })
            );
        }
    }]);

    return FeComponentTransfer;
}(_react.Component);

exports.default = FeComponentTransfer;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeComposite = function (_Component) {
    _inherits(FeComposite, _Component);

    function FeComposite() {
        _classCallCheck(this, FeComposite);

        return _possibleConstructorReturn(this, (FeComposite.__proto__ || Object.getPrototypeOf(FeComposite)).apply(this, arguments));
    }

    _createClass(FeComposite, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("feComposite", {
                operator: this.props.operator,
                k1: this.props.k1,
                k2: this.props.k2,
                k3: this.props.k3,
                k4: this.props.k4,
                "in": this.props.in,
                in2: this.props.in2,
                result: this.props.result });
        }
    }]);

    return FeComposite;
}(_react.Component);

exports.default = FeComposite;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeConvolveMatrix = function (_Component) {
    _inherits(FeConvolveMatrix, _Component);

    function FeConvolveMatrix() {
        _classCallCheck(this, FeConvolveMatrix);

        return _possibleConstructorReturn(this, (FeConvolveMatrix.__proto__ || Object.getPrototypeOf(FeConvolveMatrix)).apply(this, arguments));
    }

    _createClass(FeConvolveMatrix, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement("feConvolveMatrix", {
                "in": this.props.in,
                result: this.props.result,
                kernelMatrix: this.props.kernelMatrix,
                divisor: this.props.divisor,
                bias: this.props.bias,
                targetX: this.props.targetX,
                targetY: this.props.targetY,
                edgeMode: this.props.edgeMode,
                kernelUnitLength: this.props.kernelUnitLength,
                preserveAlpha: this.props.preserveAlpha,
                order: this.props.order
            });
        }
    }]);

    return FeConvolveMatrix;
}(_react.Component);

exports.default = FeConvolveMatrix;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeDiffuseLightingFeDistantLight = function (_Component) {
    _inherits(FeDiffuseLightingFeDistantLight, _Component);

    function FeDiffuseLightingFeDistantLight() {
        _classCallCheck(this, FeDiffuseLightingFeDistantLight);

        return _possibleConstructorReturn(this, (FeDiffuseLightingFeDistantLight.__proto__ || Object.getPrototypeOf(FeDiffuseLightingFeDistantLight)).apply(this, arguments));
    }

    _createClass(FeDiffuseLightingFeDistantLight, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "feDiffuseLighting",
                {
                    "in": this.props.in,
                    result: this.props.result,
                    surfaceScale: this.props.surfaceScale,
                    diffuseConstant: this.props.diffuseConstant,
                    kernelUnitLength: this.props.kernelUnitLength,
                    lightingColor: this.props.lightingColor

                },
                _react2.default.createElement("feDistantLight", {
                    azimuth: this.props.azimuth,
                    elevation: this.props.elevation
                })
            );
        }
    }]);

    return FeDiffuseLightingFeDistantLight;
}(_react.Component);

exports.default = FeDiffuseLightingFeDistantLight;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeDiffuseLightingFePointLight = function (_Component) {
    _inherits(FeDiffuseLightingFePointLight, _Component);

    function FeDiffuseLightingFePointLight() {
        _classCallCheck(this, FeDiffuseLightingFePointLight);

        return _possibleConstructorReturn(this, (FeDiffuseLightingFePointLight.__proto__ || Object.getPrototypeOf(FeDiffuseLightingFePointLight)).apply(this, arguments));
    }

    _createClass(FeDiffuseLightingFePointLight, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "feDiffuseLighting",
                {
                    "in": this.props.in,
                    result: this.props.result,
                    surfaceScale: this.props.surfaceScale,
                    diffuseConstant: this.props.diffuseConstant,
                    kernelUnitLength: this.props.kernelUnitLength,
                    lightingColor: this.props.lightingColor

                },
                _react2.default.createElement("fePointLight", { x: this.props.x, y: this.props.y, z: this.props.z })
            );
        }
    }]);

    return FeDiffuseLightingFePointLight;
}(_react.Component);

exports.default = FeDiffuseLightingFePointLight;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeDiffuseLightingFeSpotLight = function (_Component) {
    _inherits(FeDiffuseLightingFeSpotLight, _Component);

    function FeDiffuseLightingFeSpotLight() {
        _classCallCheck(this, FeDiffuseLightingFeSpotLight);

        return _possibleConstructorReturn(this, (FeDiffuseLightingFeSpotLight.__proto__ || Object.getPrototypeOf(FeDiffuseLightingFeSpotLight)).apply(this, arguments));
    }

    _createClass(FeDiffuseLightingFeSpotLight, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "feDiffuseLighting",
                {
                    "in": this.props.in,
                    result: this.props.result,
                    surfaceScale: this.props.surfaceScale,
                    diffuseConstant: this.props.diffuseConstant,
                    kernelUnitLength: this.props.kernelUnitLength,
                    lightingColor: this.props.lightingColor

                },
                _react2.default.createElement("feSpotLight", {
                    x: this.props.x,
                    y: this.props.y,
                    z: this.props.z,
                    pointsAtX: this.props.pointsAtX,
                    pointsAtY: this.props.pointsAtY,
                    pointsAtZ: this.props.pointsAtZ,
                    limitingConeAngle: this.props.limitingConeAngle
                })
            );
        }
    }]);

    return FeDiffuseLightingFeSpotLight;
}(_react.Component);

exports.default = FeDiffuseLightingFeSpotLight;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeDisplacementMap = function (_Component) {
    _inherits(FeDisplacementMap, _Component);

    function FeDisplacementMap() {
        _classCallCheck(this, FeDisplacementMap);

        return _possibleConstructorReturn(this, (FeDisplacementMap.__proto__ || Object.getPrototypeOf(FeDisplacementMap)).apply(this, arguments));
    }

    _createClass(FeDisplacementMap, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feDisplacementMap', { 'in': this.props.in, in2: this.props.in2, result: this.props.result, xChannelSelector: this.props.xChannelSelector, yChannelSelector: this.props.yChannelSelector, scale: this.props.scale });
        }
    }]);

    return FeDisplacementMap;
}(_react.Component);

exports.default = FeDisplacementMap;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeFlood = function (_Component) {
    _inherits(FeFlood, _Component);

    function FeFlood() {
        _classCallCheck(this, FeFlood);

        return _possibleConstructorReturn(this, (FeFlood.__proto__ || Object.getPrototypeOf(FeFlood)).apply(this, arguments));
    }

    _createClass(FeFlood, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feFlood', { 'in': this.props.in, result: this.props.result, 'flood-color': this.props.floodColor, 'flood-opacity': this.props.floodOpacity });
        }
    }]);

    return FeFlood;
}(_react.Component);

exports.default = FeFlood;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeGaussianBlur = function (_Component) {
    _inherits(FeGaussianBlur, _Component);

    function FeGaussianBlur() {
        _classCallCheck(this, FeGaussianBlur);

        return _possibleConstructorReturn(this, (FeGaussianBlur.__proto__ || Object.getPrototypeOf(FeGaussianBlur)).apply(this, arguments));
    }

    _createClass(FeGaussianBlur, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("feGaussianBlur", { "in": this.props.in, result: this.props.result, stdDeviation: this.props.stdDeviation });
        }
    }]);

    return FeGaussianBlur;
}(_react.Component);

exports.default = FeGaussianBlur;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeImage = function (_Component) {
    _inherits(FeImage, _Component);

    function FeImage() {
        _classCallCheck(this, FeImage);

        return _possibleConstructorReturn(this, (FeImage.__proto__ || Object.getPrototypeOf(FeImage)).apply(this, arguments));
    }

    _createClass(FeImage, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feImage', { result: this.props.result, x: this.props.x, y: this.props.y, width: this.props.width, height: this.props.height, preserveAspectRatio: this.props.par, href: this.props.image });
        }
    }]);

    return FeImage;
}(_react.Component);

exports.default = FeImage;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeMerge = function (_Component) {
    _inherits(FeMerge, _Component);

    function FeMerge() {
        _classCallCheck(this, FeMerge);

        return _possibleConstructorReturn(this, (FeMerge.__proto__ || Object.getPrototypeOf(FeMerge)).apply(this, arguments));
    }

    _createClass(FeMerge, [{
        key: 'render',
        value: function render() {
            console.log('node in', this.props.in);

            // let mergenode = this.props.in.map((el,idx) => {

            //     return  <feMergeNode in={el} />
            // })

            return _react2.default.createElement(
                'feMerge',
                null,
                _react2.default.createElement('feMergeNode', { 'in': this.props.in }),
                _react2.default.createElement('feMergeNode', { 'in': this.props.in2 }),
                _react2.default.createElement('feMergeNode', { 'in': this.props.in3 }),
                _react2.default.createElement('feMergeNode', { 'in': this.props.in4 })
            );
        }
    }]);

    return FeMerge;
}(_react.Component);

exports.default = FeMerge;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeMorphology = function (_Component) {
    _inherits(FeMorphology, _Component);

    function FeMorphology() {
        _classCallCheck(this, FeMorphology);

        return _possibleConstructorReturn(this, (FeMorphology.__proto__ || Object.getPrototypeOf(FeMorphology)).apply(this, arguments));
    }

    _createClass(FeMorphology, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feMorphology', { 'in': this.props.in, result: this.props.result, operator: this.props.operator, radius: this.props.radius });
        }
    }]);

    return FeMorphology;
}(_react.Component);

exports.default = FeMorphology;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeOffset = function (_Component) {
    _inherits(FeOffset, _Component);

    function FeOffset() {
        _classCallCheck(this, FeOffset);

        return _possibleConstructorReturn(this, (FeOffset.__proto__ || Object.getPrototypeOf(FeOffset)).apply(this, arguments));
    }

    _createClass(FeOffset, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("feOffset", { "in": this.props.in, result: this.props.result, dx: this.props.dx, dy: this.props.dy });
        }
    }]);

    return FeOffset;
}(_react.Component);

exports.default = FeOffset;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeSpecularLightingFeDistantLight = function (_Component) {
    _inherits(FeSpecularLightingFeDistantLight, _Component);

    function FeSpecularLightingFeDistantLight() {
        _classCallCheck(this, FeSpecularLightingFeDistantLight);

        return _possibleConstructorReturn(this, (FeSpecularLightingFeDistantLight.__proto__ || Object.getPrototypeOf(FeSpecularLightingFeDistantLight)).apply(this, arguments));
    }

    _createClass(FeSpecularLightingFeDistantLight, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "feSpecularLighting",
                {
                    "in": this.props.in,
                    result: this.props.result,
                    surfaceScale: this.props.surfaceScale,
                    specularConstant: this.props.specularConstant,
                    specularExponent: this.props.specularExponent,
                    kernelUnitLength: this.props.kernelUnitLength,
                    lightingColor: this.props.lightingColor

                },
                _react2.default.createElement("feDistantLight", {
                    azimuth: this.props.azimuth,
                    elevation: this.props.elevation
                })
            );
        }
    }]);

    return FeSpecularLightingFeDistantLight;
}(_react.Component);

exports.default = FeSpecularLightingFeDistantLight;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeSpecularLightingFePointLight = function (_Component) {
    _inherits(FeSpecularLightingFePointLight, _Component);

    function FeSpecularLightingFePointLight() {
        _classCallCheck(this, FeSpecularLightingFePointLight);

        return _possibleConstructorReturn(this, (FeSpecularLightingFePointLight.__proto__ || Object.getPrototypeOf(FeSpecularLightingFePointLight)).apply(this, arguments));
    }

    _createClass(FeSpecularLightingFePointLight, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "feSpecularLighting",
                {
                    "in": this.props.in,
                    result: this.props.result,
                    surfaceScale: this.props.surfaceScale,
                    specularConstant: this.props.specularConstant,
                    specularExponent: this.props.specularExponent,
                    kernelUnitLength: this.props.kernelUnitLength,
                    lightingColor: this.props.lightingColor

                },
                _react2.default.createElement("fePointLight", { x: this.props.x, y: this.props.y, z: this.props.z })
            );
        }
    }]);

    return FeSpecularLightingFePointLight;
}(_react.Component);

exports.default = FeSpecularLightingFePointLight;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeSpecularLightingFeSpotLight = function (_Component) {
    _inherits(FeSpecularLightingFeSpotLight, _Component);

    function FeSpecularLightingFeSpotLight() {
        _classCallCheck(this, FeSpecularLightingFeSpotLight);

        return _possibleConstructorReturn(this, (FeSpecularLightingFeSpotLight.__proto__ || Object.getPrototypeOf(FeSpecularLightingFeSpotLight)).apply(this, arguments));
    }

    _createClass(FeSpecularLightingFeSpotLight, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "feSpecularLighting",
                {
                    "in": this.props.in,
                    result: this.props.result,
                    surfaceScale: this.props.surfaceScale,
                    specularConstant: this.props.specularConstant,
                    specularExponent: this.props.specularExponent,
                    kernelUnitLength: this.props.kernelUnitLength,
                    lightingColor: this.props.lightingColor

                },
                _react2.default.createElement("feSpotLight", {
                    x: this.props.x,
                    y: this.props.y,
                    z: this.props.z,
                    pointsAtX: this.props.pointsAtX,
                    pointsAtY: this.props.pointsAtY,
                    pointsAtZ: this.props.pointsAtZ,
                    limitingConeAngle: this.props.limitingConeAngle
                })
            );
        }
    }]);

    return FeSpecularLightingFeSpotLight;
}(_react.Component);

exports.default = FeSpecularLightingFeSpotLight;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeTile = function (_Component) {
    _inherits(FeTile, _Component);

    function FeTile() {
        _classCallCheck(this, FeTile);

        return _possibleConstructorReturn(this, (FeTile.__proto__ || Object.getPrototypeOf(FeTile)).apply(this, arguments));
    }

    _createClass(FeTile, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feTile', { 'in': this.props.in, result: this.props.result });
        }
    }]);

    return FeTile;
}(_react.Component);

exports.default = FeTile;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeTurbulence = function (_Component) {
    _inherits(FeTurbulence, _Component);

    function FeTurbulence() {
        _classCallCheck(this, FeTurbulence);

        return _possibleConstructorReturn(this, (FeTurbulence.__proto__ || Object.getPrototypeOf(FeTurbulence)).apply(this, arguments));
    }

    _createClass(FeTurbulence, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('feTurbulence', {
                'in': this.props.in,
                result: this.props.result,
                baseFrequency: this.props.baseFrequency,
                numOctaves: this.props.numOctaves,
                seed: this.props.seed,
                type: this.props.type,
                stitchTiles: this.props.stitchTiles
            });
        }
    }]);

    return FeTurbulence;
}(_react.Component);

exports.default = FeTurbulence;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FeOffset = require('./FeOffset');

var _FeOffset2 = _interopRequireDefault(_FeOffset);

var _FeGaussianBlur = require('./FeGaussianBlur');

var _FeGaussianBlur2 = _interopRequireDefault(_FeGaussianBlur);

var _EdgeDetection = require('./EdgeDetection');

var _EdgeDetection2 = _interopRequireDefault(_EdgeDetection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this.state = {
            numberOfCircles: [0, 1],
            radius: [10, 9],
            items: ['foo', 'bar', 'baz'],
            circs: [30, 20],
            cx: [50, 100],
            elements: ['FeOffset', 'FeGaussianBlur'],
            offsetX: 10,
            offsetY: 10,
            offsetElement: [5, 20]
        };
        return _this;
    }

    _createClass(Filter, [{
        key: 'handleFilterElements',
        value: function handleFilterElements() {
            var elements = this.state.offsetElement.slice();
            elements.push(2);
            console.log('elements', elements);
            this.setState({ offsetElement: elements });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var offset = this.state.offsetElement.map(function (e) {
                return _react2.default.createElement(_FeOffset2.default, { key: e * Math.random(), offsetX: _this2.state.offsetX, offsetY: _this2.state.offsetY });
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            return _this2.handleFilterElements();
                        } },
                    'add filter'
                ),
                _react2.default.createElement(
                    'filter',
                    { width: '200%', height: '200%', id: 'f' },
                    offset,
                    _react2.default.createElement(_FeGaussianBlur2.default, { deviation: '1' }),
                    _react2.default.createElement('feComposite', { operator: 'over', result: 'comp', 'in': 'blur', in2: 'offset' }),
                    _react2.default.createElement(_EdgeDetection2.default, null),
                    _react2.default.createElement('feComposite', { operator: 'in', result: 'comp', 'in': 'comp', in2: 'edge' })
                )
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterElementEditor = function (_Component) {
    _inherits(FilterElementEditor, _Component);

    function FilterElementEditor() {
        _classCallCheck(this, FilterElementEditor);

        return _possibleConstructorReturn(this, (FilterElementEditor.__proto__ || Object.getPrototypeOf(FilterElementEditor)).apply(this, arguments));
    }

    _createClass(FilterElementEditor, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'offsetCard' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'dx:',
                        _react2.default.createElement('input', { type: 'text', value: this.props.offsetX, onChange: this.props.onChangeX })
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'dy:',
                        _react2.default.createElement('input', { type: 'text', value: this.props.offsetY, onChange: this.props.onChangeY })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'filterCardsContainer' },
                    _react2.default.createElement(
                        'label',
                        null,
                        'dx:',
                        _react2.default.createElement('input', { type: 'text' })
                    ),
                    _react2.default.createElement(
                        'label',
                        null,
                        'dy:',
                        _react2.default.createElement('input', { type: 'text' })
                    )
                )
            );
        }
    }]);

    return FilterElementEditor;
}(_react.Component);

exports.default = FilterElementEditor;
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterSelect = function (_Component) {
    _inherits(FilterSelect, _Component);

    function FilterSelect() {
        _classCallCheck(this, FilterSelect);

        return _possibleConstructorReturn(this, (FilterSelect.__proto__ || Object.getPrototypeOf(FilterSelect)).apply(this, arguments));
    }

    _createClass(FilterSelect, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "select",
                { value: "", onChange: this.props.selectChange },
                _react2.default.createElement(
                    "option",
                    { value: "", disabled: true },
                    "Choose filter here"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeOffset" },
                    "FeOffset"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeGaussianBlur" },
                    "FeGaussianBlur"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeComposite" },
                    "FeComposite"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeMerge" },
                    "FeMerge"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeMorphology" },
                    "FeMorphology"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeFlood" },
                    "FeFlood"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeImage" },
                    "FeImage"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeTile" },
                    "FeTile"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeBlend" },
                    "FeBlend"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeColorMatrix" },
                    "FeColorMatrix"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeDisplacementMap" },
                    "FeDisplacementMap"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeTurbulence" },
                    "FeTurbulence"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeComponentTransfer" },
                    "FeComponentTransfer"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeConvolveMatrix" },
                    "FeConvolveMatrix"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeSpecularLightingFePointLight" },
                    "FeSpecularLightingFePointLight"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeSpecularLightingFeSpotLight" },
                    "FeSpecularLightingFeSpotLight"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeSpecularLightingFeDistantLight" },
                    "FeSpecularLightingFeDistantLight"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeDiffuseLightingFePointLight" },
                    "FeDiffuseLightingFePointLight"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeDiffuseLightingFeSpotLight" },
                    "FeDiffuseLightingFeSpotLight"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "FeDiffuseLightingFeDistantLight" },
                    "FeDiffuseLightingFeDistantLight"
                )
            );
        }
    }]);

    return FilterSelect;
}(_react.Component);

exports.default = FilterSelect;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this.state = {
            numberOfElements: 0,
            radius: [10, 9],
            items: ['foo', 'bar', 'baz'],
            circs: [30, 20],
            cx: [50, 100],
            elements: ['FeOffset', 'FeGaussianBlur'],
            offsetX: 10,
            offsetY: 10,
            offsetElement: [5, 20]
        };
        return _this;
    }

    _createClass(Filter, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'filter',
                { width: '200%', height: '200%', id: 'f' },
                _react2.default.createElement(FeGaussianBlur, { result: '', deviation: '1' }),
                _react2.default.createElement('feComposite', { result: 'comp', operator: 'over', 'in': 'blur', in2: 'offset' }),
                _react2.default.createElement(EdgeDetection, { result: '' }),
                _react2.default.createElement('feComposite', { result: '', operator: 'out', in2: 'offset', 'in': 'edge' })
            );
        }
    }]);

    return Filter;
}(_react.Component);

exports.default = Filter;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _EmptyFilter = require('./EmptyFilter');

var _EmptyFilter2 = _interopRequireDefault(_EmptyFilter);

var _Rect = require('./Rect');

var _Rect2 = _interopRequireDefault(_Rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTMLRepresentation = function (_Component) {
    _inherits(HTMLRepresentation, _Component);

    function HTMLRepresentation() {
        _classCallCheck(this, HTMLRepresentation);

        return _possibleConstructorReturn(this, (HTMLRepresentation.__proto__ || Object.getPrototypeOf(HTMLRepresentation)).apply(this, arguments));
    }

    _createClass(HTMLRepresentation, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var test = _react2.default.Children.map(this.props.children, function (child, idx) {
                console.log('child ', child);
                console.log('child key', child.key);
                console.log('i ', idx);
                return _react2.default.createElement(
                    'div',
                    { key: 'html' + idx, className: 'htmlcard' },
                    _react2.default.createElement(
                        'div',
                        { className: 'component-name' },
                        child.type.name + 'Attrs' + child.key
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'flex' },
                        _react2.default.createElement(
                            'button',
                            { onClick: _this2.props.deleteFilter(child.type.name, child.key) },
                            'delete'
                        ),
                        _react2.default.createElement(_Rect2.default, { type: child.type.name, props: child.props, filter: 'url(#filter' + child.key + ')', id: 'filter' + child.key })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'label-wrapper' },
                        Object.keys(child.props).map(function (item, i) {
                            console.log('item::', item);
                            console.log('values:', Object.values(child.props));

                            return _react2.default.createElement(
                                'label',
                                { key: item },
                                item,
                                _react2.default.createElement('input', { onFocus: _this2.props.passEl(child.type.name, child.key, idx), onChange: _this2.props.changeInputs(child.type.name, child.key), type: 'text', name: item, value: Object.values(child.props)[i] })
                            );
                        })
                    )
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'htmlrep' },
                _react2.default.createElement(
                    'div',
                    { className: 'grid' },
                    test
                )
            );
        }
    }]);

    return HTMLRepresentation;
}(_react.Component);

exports.default = HTMLRepresentation;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewRep = function (_Component) {
    _inherits(NewRep, _Component);

    function NewRep() {
        _classCallCheck(this, NewRep);

        return _possibleConstructorReturn(this, (NewRep.__proto__ || Object.getPrototypeOf(NewRep)).apply(this, arguments));
    }

    _createClass(NewRep, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var childs = _react2.default.Children.map(this.props.children, function (child) {
                console.log('childdprops ', _this2.props.children);
                console.log('childd ', child);

                return _react2.default.createElement(
                    'div',
                    null,
                    child.type.name
                );
            });

            return childs;
        }
    }]);

    return NewRep;
}(_react.Component);

exports.default = NewRep;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pattern = function (_Component) {
    _inherits(Pattern, _Component);

    function Pattern() {
        _classCallCheck(this, Pattern);

        return _possibleConstructorReturn(this, (Pattern.__proto__ || Object.getPrototypeOf(Pattern)).apply(this, arguments));
    }

    _createClass(Pattern, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'pattern',
                { width: '10', height: '10', id: 'p', patternUnits: 'userSpaceOnUse' },
                _react2.default.createElement('rect', { width: '5', height: '5', fill: 'rgb(0,255,0)' }),
                _react2.default.createElement('rect', { width: '5', height: '5', x: '5', y: '5', fill: 'rgb(255,0,0)' }),
                _react2.default.createElement('rect', { width: '5', height: '5', x: '0', y: '5', fill: 'rgb(0,0,255)' }),
                _react2.default.createElement('rect', { width: '5', height: '5', x: '5', y: '0', fill: 'rgb(128,128,128)' })
            );
        }
    }]);

    return Pattern;
}(_react.Component);

exports.default = Pattern;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadialGradient = function (_Component) {
    _inherits(RadialGradient, _Component);

    function RadialGradient() {
        _classCallCheck(this, RadialGradient);

        return _possibleConstructorReturn(this, (RadialGradient.__proto__ || Object.getPrototypeOf(RadialGradient)).apply(this, arguments));
    }

    _createClass(RadialGradient, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'radialGradient',
                { id: 'rg' },
                _react2.default.createElement('stop', { offset: '0%', 'stop-color': 'white' }),
                _react2.default.createElement('stop', { offset: '100%', 'stop-color': 'blue' })
            );
        }
    }]);

    return RadialGradient;
}(_react.Component);

exports.default = RadialGradient;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rect = function (_Component) {
    _inherits(Rect, _Component);

    function Rect() {
        _classCallCheck(this, Rect);

        return _possibleConstructorReturn(this, (Rect.__proto__ || Object.getPrototypeOf(Rect)).apply(this, arguments));
    }

    _createClass(Rect, [{
        key: 'render',
        value: function render() {
            console.log('proptype', this.props.type.charAt(0).toLowerCase());
            console.log('' + this.props.type[0].toLowerCase() + this.props.type.slice(1));
            var str = '' + this.props.type[0].toLowerCase() + this.props.type.slice(1);

            var filter = _react2.default.createElement(str, this.props.props);

            return _react2.default.createElement(
                'svg',
                { width: '50', height: '50' },
                _react2.default.createElement(
                    'filter',
                    { id: this.props.id },
                    filter
                ),
                _react2.default.createElement('rect', { width: '30', height: '30', x: '10', y: '10', filter: this.props.filter })
            );
        }
    }]);

    return Rect;
}(_react.Component);

exports.default = Rect;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderSelectedElementCard = function (_Component) {
    _inherits(RenderSelectedElementCard, _Component);

    function RenderSelectedElementCard() {
        _classCallCheck(this, RenderSelectedElementCard);

        return _possibleConstructorReturn(this, (RenderSelectedElementCard.__proto__ || Object.getPrototypeOf(RenderSelectedElementCard)).apply(this, arguments));
    }

    _createClass(RenderSelectedElementCard, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            if (this.props.attrs !== null) {
                return _react2.default.createElement(
                    'div',
                    { className: 'card' },
                    _react2.default.createElement(
                        'div',
                        null,
                        this.props.selectedElement
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        this.props.attrs.map(function (item) {
                            return _react2.default.createElement(
                                'label',
                                { key: Object.keys(item) },
                                Object.keys(item),
                                _react2.default.createElement('input', { onChange: _this2.props.changeInputs, type: 'text', name: Object.keys(item), value: Object.values(item) })
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'button',
                        { onClick: this.props.alertAttrs },
                        'Submit Values'
                    )
                );
            } else {
                return _react2.default.createElement('div', null);
            }
        }
    }]);

    return RenderSelectedElementCard;
}(_react.Component);

exports.default = RenderSelectedElementCard;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text = function (_Component) {
    _inherits(Text, _Component);

    function Text() {
        _classCallCheck(this, Text);

        return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).apply(this, arguments));
    }

    _createClass(Text, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'text',
                { x: '50%', y: '15%', style: { fontSize: 100 + 'px' }, filter: 'url(#f)', textAnchor: 'middle' },
                'svg'
            );
        }
    }]);

    return Text;
}(_react.Component);

exports.default = Text;
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import registerServiceWorker from './registerServiceWorker';

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
// registerServiceWorker();
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.unregister = unregister;
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}