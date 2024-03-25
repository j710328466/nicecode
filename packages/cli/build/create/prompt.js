"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _inquirer = _interopRequireDefault(require("inquirer"));
var _func = require("@nicecode/func");
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(config) {
  let prompts = [];
  if (!config.projectName) {
    prompts.push({
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称(demo)',
      default: "demo"
    });
  }
  return _inquirer.default.prompt([...prompts, {
    type: 'input',
    name: 'haveTemp',
    message: '是否使用自有模板（yes/no）?',
    default: 'no'
  }, {
    type: 'input',
    name: 'tempUrl',
    message: '请输入模板地址: ',
    validate: function (input) {
      var done = this.async();
      setTimeout(function () {
        if (!(0, _func.validator)('url').test(input)) {
          done('链接不正确，需要以Http(s):、或以ssh:开头');
          return;
        }
        done(null, true);
      }, 3000);
    },
    when: function (answer) {
      return answer.haveTemp === 'y' || answer.haveTemp === 'yes';
    }
  }, {
    type: 'list',
    name: 'type',
    message: '请选择模板类型',
    when: function (answer) {
      return answer.haveTemp !== 'y' && answer.haveTemp !== 'yes';
    },
    choices: _constants.TEMPLIST
  }]);
};