
ReactElement = require "react/lib/ReactElement"

Validator = require "Validator"
wrongType = require "wrongType"

module.exports = Validator "ReactElement",

  test: (value) ->
    return yes if value is null
    return yes if value is false
    return ReactElement.isValidElement value

  assert: (value, key) ->
    return if @test value
    wrongType this, key
