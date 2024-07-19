/*
You are given a list of log entries, each log entry contains a user ID, action type, and timestamp. Write a function to determine the number of unique users performing a specific action within a given time range.

strategy:
use a Set for tracking users. iterate over the list, if the action of the current log is the passed action and the time is >= the start time and <= the end time, check for user in Set. if not yet present, add the user to the Set. return the size of the Set.
*/

/**
 * Takes a list of log entries and returns a count of unique users performing a specified action within a given time range.
 * @param {Array.<logEntry>} list the list of log entries
 * @typedef {Object} logEntry
 * @property {string} user - the name of a unique user
 * @property {string} actionType - the type of action logged for the user
 * @property {Date} actionTime - the time the action was logged
 * @param {string} action - the type of action to be counted
 * @param {Date} startTime - the beginning of the time range to include
 * @param {Date} endTime - the ending of the time range to include,
 * @returns {number} - the count of unique users performing the specified action within the given time range
 */

function userActionCount(list, action, startTime, endTime) {
  const users = new Set();

  for (const entry of list) {
    if (entry.actionType === action &&
        entry.actionTime >= startTime &&
        entry.actionTime <= endTime) {
      users.add(entry.user); // if the user is already present, no user will be added due to properties of Set structure
    }
  }

  return users.size;
}

module.exports = userActionCount;
