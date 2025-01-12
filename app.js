let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
btn.addEventListener('click',function(){
    console.log("clicked");
   let delbtn = document.createElement("button");
   let done = document.createElement("button");
   delbtn.classList.add('del');
   delbtn.innerText= 'delete'
   done.classList.add('done');
   done.innerText= 'done'
   
    let item = document.createElement('li');
    item.innerText=inp.value;
    ul.appendChild(item);
    
    item.appendChild(delbtn);
    item.appendChild(done);
    inp.value ='';
})
ul.addEventListener("click",function(e){
    
    if(e.target.className == "del"){
        let papa = e.target.parentElement;
        if(papa.style.textDecoration!='line-through'){
           const conf = confirm("This task is not done yet,do u still want to delete");
           if(conf){
            console.log('d');
            papa.remove();
           }
        }
        else{
            console.log('d');
            papa.remove();
        }

       
    } 
    else if(e.target.className == "done"){
        let papa = e.target.parentElement;
        if(papa.style.textDecoration=='line-through'){
            papa.style.textDecoration='none';
            console.log('undone');
        }
        else{
            papa.style.textDecoration='line-through';
            console.log('done');
        }
    }
    

})
// let delbtns = document.querySelectorAll(".del")
// for(i of delbtns){
//     i.addEventListener('click',function(){
//         console.log('delete');
//         let par = i.parentElement;
//         par.remove();
//     })
// }
// let dn = document.querySelectorAll(".done")
// for(i of dn){
//     i.addEventListener('click',function(){
//         console.log('done');
//         let par = i.parentElement;
//         par.style.textDecoration='line-through';
//     })
// }