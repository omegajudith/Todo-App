

    // let field = document.querySelector('#field').value;
    // let all = document.querySelector('.all')
    // let myArr = [];
    // function practice(){
    //     myArr.push(field.value)
    // }
    // if(field.value === ""){
    //     alert('Hey Try to write something')
    // }
    // let pra = document.createElement('p')
    // myArr.forEach(function(item){
    //     all.appendChild(pra)
    // })
    // pra.className = 'para'    //setAttribute()
    // practice()
    
    let input = document.querySelector('#textField')
    let store = document.querySelector('.store')
    
    let items = [];

    if(input.value === "" ){
        alert('pliz write in something')
        // let 
    }else{
        let myParagraph = document.createElement('p');
        myParagraph.className = 'myPara';
        items.forEach(function(i){
            store.appendChild(myParagraph);
            // textField.value = ''
        });

    }


     function assgn(){
         myForm.onsubmit = assgn;
         items.push(field.value)
     }
     assgn()





