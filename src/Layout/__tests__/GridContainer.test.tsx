import { strictEqual } from 'assert';
import { getGridColumnStyles } from '../GridContainer';

describe('getGridColumnStyles function', function () {
  it('returns correct grid-column value for placement "left"', function () {
    strictEqual(getGridColumnStyles('left', 1), 'span 1');
    strictEqual(getGridColumnStyles('left', 7), 'span 7');
    strictEqual(getGridColumnStyles('left', 12), 'span 12');
  });
  it('returns correct grid-column value for placement "center"', function () {
    strictEqual(getGridColumnStyles('center', 1), '6 / span 1');
    strictEqual(getGridColumnStyles('center', 7), '3 / span 7');
    strictEqual(getGridColumnStyles('center', 12), '1 / span 12');
  });
  it('returns correct grid-column value for placement "right"', function () {
    strictEqual(getGridColumnStyles('right', 1), '12 / span 1');
    strictEqual(getGridColumnStyles('right', 7), '6 / span 7');
    strictEqual(getGridColumnStyles('right', 12), '1 / span 12');
  });
  it('returns the correct grid-column value for numbered placements', function () {
    strictEqual(getGridColumnStyles(4, 12), '4 / span 12');
    strictEqual(getGridColumnStyles(7, 6), '7 / span 6');
    strictEqual(getGridColumnStyles(9, 5), '9 / span 5');
  });
  it('should return the correct grid-column value for the maximum width (e.g. 12) at any placement', function () {
    strictEqual(getGridColumnStyles(1, 12), '1 / span 12');
    strictEqual(getGridColumnStyles(5, 12), '5 / span 12');
    strictEqual(getGridColumnStyles(7, 12), '7 / span 12');
    strictEqual(getGridColumnStyles(11, 12), '11 / span 12');
  });
});
