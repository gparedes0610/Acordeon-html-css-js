let BtnItems = document.querySelectorAll('.item .btn-item');

for(let i = 0 ; i <BtnItems.length ; i++){
    BtnItems[i].addEventListener('click', (e)=>{
       /*  console.log(e.target); */

        let btn = e.target;

        if(btn.classList == "btn-item active"){
            removerClase();
        }else{
            removerClase();
            btn.classList.add('active');
        }

    });
}

function removerClase(){
    for(let i = 0 ; i <BtnItems.length ; i++){
        BtnItems[i].classList.remove('active');
    }
}