// Imports
import { fetchUser } from './github';

// Elements
const form = document.getElementById('github-form');

// Functions and listners
form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchUser();
});
