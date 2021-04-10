// Imports
import { injectCalendar } from './plugins/github-calendar';

// Globals
const API_BASE_URL = 'https://api.github.com/users';

// Elements
const input = document.querySelector('.form-control');
const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const bio = document.getElementById('bio');
const company = document.getElementById('company');

// Functions
const injectUserData = (data) => {
  avatar.src = data.avatar_url;
  avatar.style.display = 'inline-block';
  name.innerText = data.name;
  bio.innerText = data.bio;
  company.innerText = data.company;
};

const fetchUser = () => {
  fetch(`${API_BASE_URL}/${input.value}`)
    .then(response => response.json())
    .then((data) => {
      injectUserData(data);
      injectCalendar(input.value);
    });
};

export { fetchUser };
