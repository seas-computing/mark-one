import { strictEqual } from 'assert';
import { getGridColumnStyles } from '../GridContainer';

describe('getGridColumnStyles function', function () {
  it('should return the correct grid-column value for placement "left"', function () {
    const result = getGridColumnStyles('left', 12);
    strictEqual(result, 'span 12');
  });
  it('should return the correct grid-column value for placement "center"', function () {
    const result = getGridColumnStyles('center', 4);
    strictEqual(result, '5 / span 4');
  });
  it('should return the correct grid-column value for placement "right"', function () {
    const result = getGridColumnStyles('right', 6);
    strictEqual(result, '7 / span 6');
  });
  it('should return the correct grid-column value for numbered placements', function () {
    const result = getGridColumnStyles(7, 6);
    strictEqual(result, '7 / span 6');
  });
});
