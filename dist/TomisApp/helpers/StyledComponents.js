'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormCol = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    flex: ', ';\n'], ['\n    flex: ', ';\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

// export const FormRow = styled.div`
//     display: flex;
// `;
// FormRow.defaultProps = {
//   'data-name': 'FormRow'
// };

var FormCol = exports.FormCol = _styledComponents2.default.div(_templateObject, function (props) {
  return props.colSpan ? props.colSpan : 1;
});
FormCol.defaultProps = {
  'data-name': 'FormCol'
};