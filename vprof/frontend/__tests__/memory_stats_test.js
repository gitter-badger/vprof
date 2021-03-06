'use strict';

var memoryStatsModule = require('../memory_stats.js');

describe('Memory stats test suite', function() {
  it('Check generateTooltipText_', function() {
    var stats = [10, 11, 15, '<func>', 'foo.py'];
    var expectedResult = (
        '<p><b>Executed line:</b> 10</p>' +
        '<p><b>Line number:</b> 11</p>' +
        '<p><b>Function name:</b> [func]</p>' +
        '<p><b>Filename:</b> foo.py</p>' +
        '<p><b>Memory usage:</b> 15 MB</p>');

    expect(memoryStatsModule.MemoryChart.generateTooltipText_(stats)).toBe(
        expectedResult);
  });
});
