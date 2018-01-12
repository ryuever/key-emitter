import ArrowKeyHandler from '../ArrowKeyHandler';

test('max option is required', () => {
  expect(() => {
    const handler = new ArrowKeyHandler();
  }).toThrow()
})
