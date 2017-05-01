// Generated by CoffeeScript 1.12.4
var ReactElement, Validator, wrongType;

ReactElement = require("react/lib/ReactElement");

Validator = require("Validator");

wrongType = require("wrongType");

module.exports = Validator("ReactElement", {
  test: function(value) {
    if (value === null) {
      return true;
    }
    if (value === false) {
      return true;
    }
    return ReactElement.isValidElement(value);
  },
  assert: function(value, key) {
    if (this.test(value)) {
      return;
    }
    return wrongType(this, key);
  }
});
