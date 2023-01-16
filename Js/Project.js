let bar=document.querySelector('.bar')
let item=document.querySelector('.items')
let tag=document.querySelector('.fa-solid')


let swichbtn=true;
const flip = () => { swichbtn = !swichbtn }
bar.addEventListener('click',()=>{
    if(swichbtn){
        item.classList.add('active')
        tag.classList.add('fa-circle-xmark')
        flip()
    }else{
        item.classList.remove('active')
        tag.classList.remove('fa-circle-xmark')
        flip()
    }
})