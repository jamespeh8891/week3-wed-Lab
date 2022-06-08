let message = document.querySelector('#message')



console.log('Hello, World!');

function addMovie(event) {
    event.preventDefault()
    let inputFeild = document.querySelector('input');


let movie = document.createElement('li');

let movieTitle = document.createElement('span');
movieTitle.textContent = inputFeild.value;
movie.appendChild(movieTitle);
movieTitle.addEventListener('click', crossOffMovie);

let deleteBtn = document.createElement('button');
deleteBtn.textContent = "x";
deleteBtn.addEventListener('click', deleteMovie);
movie.appendChild(deleteBtn);

let list = document.querySelector('ul');
list.appendChild(movie); 

inputFeild.value = '';
}

document.querySelector('form').addEventListener('submit', addMovie);

function deleteMovie(event) {
    event.target.parentNode.remove();

    message.textContent = 'Movie Deleted'
}

function crossOffMovie(event) {
event.target.classList.toggle('checked')
if (event.target.classList.contains('checked') === true) {
    message.textContent = 'Movie Watched'


}else {
    message.textContent = 'Movie Added Back'
}
}
