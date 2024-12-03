let inputBox = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => { //button pe click krne pr event
        if (e.target.innerHTML == "=") //jab button pe click krenge to value aana chahiye
        {
            string = eval(string); //= pe click krne se eval ek inbuild function aayega jo solve krega
            inputBox.value = string;

        }
        else if(e.target.innerHTML == "AC"){
            string =""; //jab AC aayega tb sb value clear honge aur input me 0 aayega
            inputBox.value =string
        }
        else if(e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length-1); //last wala digit delete krega
            inputBox.value=string
        }
        else{

            string += e.target.innerHTML; //agar = button nhi he to jo button he vo string me aayega
            inputBox.value = string
        }
    })
})
