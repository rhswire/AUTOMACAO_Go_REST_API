import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomItem, randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

export let options = {
  vus: 10, 
  duration: '30s', 
};


const firstNames = [
  'John', 'Jane', 'Alice', 'Bob', 'Michael', 'Emily', 'James', 'Olivia',
  'Daniel', 'Sophia', 'David', 'Ava', 'Robert', 'Isabella', 'William', 'Mia',
  'Matthew', 'Charlotte', 'Joseph', 'Amelia', 'Charles', 'Harper', 'Thomas', 'Evelyn',
  'Christopher', 'Abigail', 'Mark', 'Ella', 'Andrew', 'Liam', 'Joshua', 'Grace',
  'Ryan', 'Lily', 'Brandon', 'Victoria', 'Nicholas', 'Madison', 'Alexander', 'Avery',
  'Justin', 'Aria', 'Kevin', 'Penelope', 'Paul', 'Chloe', 'Samuel', 'Zoey', 'Jonathan', 'Nora'
];

const lastNames = [
  'Doe', 'Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Miller', 'Anderson',
  'Taylor', 'Thomas', 'Lee', 'Moore', 'Harris', 'Clark', 'Lewis', 'Walker',
  'Hall', 'Young', 'Allen', 'King', 'Scott', 'Wright', 'Green', 'Adams',
  'Baker', 'Nelson', 'Mitchell', 'Hill', 'Roberts', 'Carter', 'Perez', 'Turner',
  'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart',
  'Sanchez', 'Morris', 'Rogers', 'Bailey', 'Reed', 'Morris', 'Cooper', 'Howard', 'Cox', 'Ward'
];

const emailDomains = [
  'example.com', 'testmail.com', 'mailinator.com', 'tempmail.com', 'myinbox.com',
  'quickmail.com', 'inbox.test', 'fakemail.com', 'demoemail.com', 'samplemail.com'
];

const statuses = ['active', 'inactive'];
const genders = ['male', 'female'];

function getRandomEmail(firstName, lastName) {
  const timestamp = new Date().getTime();
  const domain = randomItem(emailDomains);
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${timestamp}@${domain}`;
}

export default function () {
  const firstName = randomItem(firstNames);
  const lastName = randomItem(lastNames);
  const userName = `${firstName} ${lastName}`;
  const userEmail = getRandomEmail(firstName, lastName);
  const userStatus = randomItem(statuses);
  const userGender = randomItem(genders);

  const url = 'https://gorest.co.in/public/v2/users';
  const payload = JSON.stringify({
    name: userName,
    email: userEmail,
    status: userStatus,
    gender: userGender,
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${__ENV.POSTMAN_API_TOKEN}` 
  };

  let res = http.post(url, payload, { headers: headers });

 
  check(res, { 'status was 201': (r) => r.status === 201 });

  sleep(2);
}
