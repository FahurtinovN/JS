// let elems = document.body.children;
// for (let elem of elems){
//     console.log(elem)
// // }
// // console.log(document.body.firstElementChild.nextElementSibling)
// // console.log(document.body.lastElementChild.previousElementSibling)

// let elem2 = document.querySelector('.list')
// console.log(elem2.children)
// let item = document.querySelector('.item')
// console.log(document.body.firstChild.data)
// item.innerHTML = document.body.firstChild.data;


// document.querySelector('ul').insertAdjacentHTML('afterbegin')

//     <div class='alert'>
//         <strong>Hello</strong> I love Nurik
//     </div>


// let item = document.querySelector('ul'). cloneNode(true);
// console.log(item)
// document.querySelector('h1').after(item)


let users = [
    {id:1, name: 'Polina', surname: "jnfe", grade: "9b"},
    {id:2, name: 'Albina', surname: "ddd", grade: "11b"},
    {id:3, name: 'Any', surname: "fff", grade: "10b"},
    {id:4, name: 'Nasry', surname: "jnfe", grade: "9b"},
    {id:5, name: 'sdsf', surname: "ddd", grade: "11b"},
    {id:6, name: 'eff', surname: "fff", grade: "10b"},
]
let win = [3, 6]
let nums = [1,2,3,4,5,6]
let elem = document.querySelector('.list')
for (let user of users){
    elem.insertAdjacentHTML('beforeend',
    `
        <div class="card" id="${user.id}" onclick='game(${user.id})'>
            <h4 class="name">${user.name}</h4>
            <p class="surname">${user.surname}</p>
            <p class="grade">${user.grade}</p>
        </div>
    `
    )
}
function hello(id){
    console.log(id)
    document.getElementById(id).hidden =true;
}

function game(id){
    if (win.includes(id)){
        alert('Убил девочку')
    }
    else{
        console.log(id)
        document.getElementById(id).hidden = true;
    }
}

// function Hello(name){
//     alert('Hello' + name)