let list = document.querySelector('#list')
let addBtn = document.getElementById('add')
let item = document.getElementById('item')
let lis = document.querySelectorAll('li')

let myForm = document.getElementById('myForm').addEventListener('submit',function(e){
    let value = item.value;
    let li = document.createElement('li');
    li.textContent = value
    list.appendChild(li);
    item.value = ''

    li.addEventListener('click',function(e){
        e.target.classList.toggle('crossed');
    })
    e.preventDefault()
})



addBtn.addEventListener('click', function(e){
    let value = item.value;
    let li = document.createElement('li');
    li.textContent = value
    list.appendChild(li);
    item.value = ''

    li.addEventListener('click',function(e){
        e.target.classList.toggle('crossed');
    })
    e.preventDefault();
})



