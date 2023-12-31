let userName = '';

const loginForm = document.getElementById('welcome-form');
const messagesSection = document.getElementById('messages-section');
const messagesList = document.getElementById('messages-list');
const addMessageForm = document.getElementById('add-messages-form');
const userNameInput = document.getElementById('username');
const messageContentInput = document.getElementById('message-content');

loginForm.addEventListener('submit', login);

function login(event) {
  event.preventDefault();
  if(userNameInput.value === '') {
    alert('Name field cannot be empty!');
    return;
  }
  userName = userNameInput.value;
  loginForm.classList.remove('show');
  messagesSection.classList.add('show');
}