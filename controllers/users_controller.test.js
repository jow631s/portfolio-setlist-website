const isAlreadyUser = require('./users_controller');

describe('isAlreadyUser', () => {
  it('returns true when username exists as first element in usernames array', () => {
    let existingUsernames = [{username: 'abc'}, {username: 'bcd'}, {username: 'cde'}];
    let requestedUsername = 'abc';
    let results = isAlreadyUser(requestedUsername, existingUsernames);
    expect(results).toEqual(true);
  });
  it('returns true when username exists as last element in usernames array', () => {
    let existingUsernames = [{username: 'abc'}, {username: 'bcd'}, {username: 'cde'}];
    let requestedUsername = 'cde';
    let results = isAlreadyUser(requestedUsername, existingUsernames);
    expect(results).toEqual(true);
  });
  it('returns true when username exists as element in usernames array case insensitive', () => {
    let existingUsernames = [{username: 'abc'}, {username: 'bcd'}, {username: 'cdE'}];
    let requestedUsername = 'cDe';
    let results = isAlreadyUser(requestedUsername, existingUsernames);
    expect(results).toEqual(true);
  });
  it('returns false when username does not exist', () => {
    let existingUsernames = [{username: 'abc'}, {username: 'bcd'}, {username: 'cde'}];
    let requestedUsername = 'xxx';
    let results = isAlreadyUser(requestedUsername, existingUsernames);
    expect(results).toEqual(false);
  });
  
});