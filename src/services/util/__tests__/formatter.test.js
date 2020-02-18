import { formatPrice } from '../formatter';

describe('util', () => {
  describe('formatPrice()', () => {
    it('should by default return decimal separated by dot', () => {
      expect(formatPrice(10)).toEqual('10.00');
    });
  });
});
