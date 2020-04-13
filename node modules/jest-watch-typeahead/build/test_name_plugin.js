'use strict';

var _jestWatcher = require('jest-watcher');

var _test_name_pattern_prompt = require('./test_name_pattern_prompt');

var _test_name_pattern_prompt2 = _interopRequireDefault(_test_name_pattern_prompt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TestNamePlugin {

  constructor({
    stdin,
    stdout
  }) {
    this._stdin = stdin;
    this._stdout = stdout;
    this._prompt = new _jestWatcher.Prompt();
    this._testResults = [];
  }

  apply(jestHooks) {
    jestHooks.onTestRunComplete(({ testResults }) => {
      this._testResults = testResults;
    });
  }

  onKey(key) {
    this._prompt.put(key);
  }

  run(globalConfig, updateConfigAndRun) {
    const p = new _test_name_pattern_prompt2.default(this._stdout, this._prompt);
    p.updateCachedTestResults(this._testResults);
    return new Promise((res, rej) => {
      p.run(value => {
        updateConfigAndRun({ mode: 'watch', testNamePattern: value });
        res();
      }, rej);
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getUsageInfo() {
    return {
      key: 't',
      prompt: 'filter by a test name regex pattern'
    };
  }
}

module.exports = TestNamePlugin;