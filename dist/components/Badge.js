"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _infoIcon = _interopRequireDefault(require("../images/info-icon.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const icon = {
  maxWidth: "20px",
  margin: "0 8px 0 0"
};
const Badge = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      margin: "8px",
      display: "flex"
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "badge",
    style: {
      backgroundColor: "grey",
      padding: "8px 16px",
      margin: "8px",
      color: "white",
      borderRadius: "30px",
      lineHeight: "1",
      fontWeight: "bold",
      fontSize: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    style: icon,
    src: _infoIcon.default,
    alt: "Design System Colors"
  }), props.label)));
};
var _default = Badge;
exports.default = _default;