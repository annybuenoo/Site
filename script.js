function toggleMode() {
    let html = document.documentElement 
    html.classList.toggle('light')
}




const images = [
    {'id': 'a', 'url':'./a.png'},
    {'id': 'b', 'url':'./b.png'},
    {'id': 'c', 'url':'./c.png'},
]
const container = document.querySelector('.container-items');
   for (const image of images){
    container.innerHTML += `
    <div class ='item'>
      <img src ='${image.url}'
      </div>
    `
} 

let items = document.querySelectorAll('.item');

document.querySelector('#next').addEventListener('click', ()=>{
    container.appendChild(items[0]);
    items = document.querySelectorAll('.item');
});

document.querySelector('#previous').addEventListener('click', ()=> {
    const lastItem = items[items.length - 1];
    container.insertBefore(lastItem, items[0] );
    items = document.querySelectorAll('.item');
});




