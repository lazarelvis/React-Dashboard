const app = require('../../src/app');

describe('\'expense\' service', () => {
  it('registered the service', () => {
    const service = app.service('expense');
    expect(service).toBeTruthy();
  });
});
