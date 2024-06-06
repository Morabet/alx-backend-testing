const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, 'log');
  });
  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log the correct message and call console once for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });
  it('should log the correct message and call console once for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});