test('server is existed', () => {
  const server = require('./server');
  expect(server).not.toBeUndefined();
});
