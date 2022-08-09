//  make use of a workouts-api.js
import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

export function getWorkouts() {
    return sendRequest(`${BASE_URL}/activity`);
  }