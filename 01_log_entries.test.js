const userActionCount = require('./01_log_entries');

describe('userActionCount', () => {
  const logEntries = [
    { user: 'Alice', actionType: 'login', actionTime: new Date('2021-01-01T00:00:00Z') },
    { user: 'Bob', actionType: 'login', actionTime: new Date('2021-01-01T00:01:00Z') },
    { user: 'Alice', actionType: 'logout', actionTime: new Date('2021-01-01T00:02:00Z') },
    { user: 'Alice', actionType: 'login', actionTime: new Date('2021-01-01T00:03:00Z') },
    { user: 'Bob', actionType: 'logout', actionTime: new Date('2021-01-01T00:04:00Z') },
    { user: '', actionType: 'login', actionTime: new Date('2021-01-01T00:05:00Z') },
    { user: 'Alice', actionType: 'logout', actionTime: new Date('2021-01-01T00:05:00Z') },
    { user: '', actionType: 'logout', actionTime: new Date('2021-01-01T00:06:00Z') },
  ];

  it('returns the count of unique users performing the specified action within the given time range', () => {
    const action = 'login';
    const startTime = new Date('2021-01-01T00:00:00Z');
    const endTime = new Date('2021-01-01T00:04:00Z');

    expect(userActionCount(logEntries, action, startTime, endTime)).toBe(2);
  });

  it('returns 0 when the log entries list is empty', () => {
    const action = 'login';
    const startTime = new Date('2021-01-01T00:00:00Z');
    const endTime = new Date('2021-01-01T00:04:00Z');

    expect(userActionCount([], action, startTime, endTime)).toBe(0);
  });

  it('returns 0 when no users are found within the given time range', () => {
    const action = 'login';
    const startTime = new Date('2021-01-01T00:06:00Z');
    const endTime = new Date('2021-01-01T00:07:00Z');

    expect(userActionCount(logEntries, action, startTime, endTime)).toBe(0);
  });

  it('returns 0 when no users are found for the specified action', () => {
    const action = 'giggle';
    const startTime = new Date('2021-01-01T00:00:00Z');
    const endTime = new Date('2021-01-01T00:07:00Z');

    expect(userActionCount(logEntries, action, startTime, endTime)).toBe(0);
  });

  it('returns the count of unique users performing the specified action within the given time range', () => {
    const action = 'logout';
    const startTime = new Date('2021-01-01T00:00:00Z');
    const endTime = new Date('2021-01-01T00:05:00Z');

    expect(userActionCount(logEntries, action, startTime, endTime)).toBe(2);
  });

  it('returns the count of unique users performing the specified action within the given time range', () => {
    const action = 'login';
    const startTime = new Date('2021-01-01T00:00:00Z');
    const endTime = new Date('2021-01-01T00:07:00Z');

    expect(userActionCount(logEntries, action, startTime, endTime)).toBe(3);
  });
});
