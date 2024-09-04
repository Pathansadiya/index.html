let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string ="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML =='Home'){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'Womens'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'Mens'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else if(e.target.innerHTML == 'Contact'){
        string = string.substring(0, string.length-1);
        input.value = string;
        }
        
        else if(e.target.innerHTML == 'Show collection'){
        string = string.substring(0, string.length-1);
        input.value = string;
        }
    
        else if(e.target.innerHTML == 'Read more'){
        string = string.substring(0, string.length-1);
        input.value = string;
        }
        else{
        string += e.target.innerHTML;
        input.value = string;
        }

    })
})