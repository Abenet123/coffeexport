const productList = [
    {  
        img: './images/coffee.jpg',
    },
    {   
        img: './product new/pr1.jpg',
    },
    {   
        img: './product new/pr2.jpg',
    },
    {   
        img: './product new/pr3.jpg',
    },
    {   
        img: './product new/pr4.jpg',
    },
    {   
        img: './product new/pr5.jpg',
    },
    {
        img: './product new/pr6.jpg',
    },
    {
        img: './product new/pr7.jpg',
    },
    {
        img: './product new/pr10.jpg',
    },
    {
        img: './product new/pr13.jpg',
    },
    {
        img: './product new/pr14.jpg',
    },
    {
        img: './product new/pr15.jpg',
    },

];

let productDisplay = '';

productList.forEach((lists) =>{
    productDisplay += `
    <div class="products">
    <img src="${lists.img}" alt="">
    </div>
    `
});
document.querySelector('.js-container').innerHTML = productDisplay;

// option button javascript

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const result1 = document.getElementById('result1');

btn1.addEventListener('click', () =>{
    btn1.style.backgroundColor = 'black'
    btn1.style.color = 'white';
    btn2.style.color = 'black';
    btn2.style.backgroundColor = '#fff'
    btn3.style.backgroundColor = '#fff'
    btn3.style.color = 'black';

})
btn2.addEventListener('click', () =>{
    btn2.style.backgroundColor = 'black'
    btn2.style.color = 'white';
    btn1.style.backgroundColor = '#fff'
    btn1.style.color = 'black';
    btn3.style.color = 'black';
    btn3.style.backgroundColor = '#fff'
    result1.src = './images/coffee.jpg'
})
btn3.addEventListener('click', () =>{
    btn3.style.backgroundColor = 'black'
    btn3.style.color = 'white';
    btn2.style.backgroundColor = '#fff'
    btn2.style.color = 'black';
    btn1.style.backgroundColor = '#fff';

    

})