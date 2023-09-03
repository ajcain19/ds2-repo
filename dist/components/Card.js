"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _colors = _interopRequireDefault(require("../images/colors.png"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const cardContainer = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid #f1f1f1",
  borderRadius: "8px",
  margin: "8px",
  padding: "24px",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
};
const cardImg = {};
const Card = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    style: cardContainer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-divider"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    style: {
      marginTop: "0"
    }
  }, props.header)), /*#__PURE__*/_react.default.createElement("img", {
    style: cardImg,
    src: _colors.default,
    alt: "Design System Colors"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "card-section"
  }, /*#__PURE__*/_react.default.createElement("h3", null, props.feature), /*#__PURE__*/_react.default.createElement("p", null, props.introduction), /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, props.url))));
};
var _default = Card;
exports.default = _default;