//  make use of a workouts-api.js
import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

export function getAllWorkouts() {
  return sendRequest(`${BASE_URL}/index`);
}

export function addWorkouts(workoutData) {
    return sendRequest(`${BASE_URL}/activity`, 'POST', workoutData);
  }

export function deleteWorkout(workout) {
  return sendRequest(`${BASE_URL}/delete/${workout}`, 'DELETE')
}


