var items = document.querySelectorAll('.item')
var pre = document.querySelector('.pev')
var next = document.querySelector('.next')

pre.addEventListener('click', slider)

next.addEventListener('click', slider)

function slider(){
    for(let i=0; i<items.length; i++){
        if(items[i].classList.contains("hide")){
            items[i].classList.remove('hide')
            let j = (i+1)%2
            items[j].classList.add('hide')
            break;
        }
    }
}