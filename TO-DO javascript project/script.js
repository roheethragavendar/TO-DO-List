const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const myBtn = document.getElementById('myButton');


let addTask = () => {
    if(inputBox.value === '') {
        alert('You must Write Something!!!');
    }else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span)
    }
    inputBox.value = '';
    saveData();
}
myBtn.addEventListener('click', addTask);

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}

const showTask =() => {
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();
