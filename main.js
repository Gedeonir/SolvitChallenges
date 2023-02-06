import './style.css'
/** Write your code below this comment */
const form = document.querySelector(".removeVowelsform")
const removeVowelsResult = document.querySelector('.feedback-text');
const arrayLenght = document.querySelector('.lenght');
const elements = document.querySelector('.elements');
const arrayForm = document.querySelector('.addArrayform');
const sumValue = document.querySelector('.sum');
const Addform = document.querySelector(".addNumbers")


form.addEventListener('submit',(e)=>{
  e.preventDefault()
  let string = document.querySelector('.string').value;
  const noVowels = string.replace(/[aeiou]/gi, '');
  removeVowelsResult.innerHTML=noVowels
})

arrayLenght.onkeyup=()=>{
    let lenght = arrayLenght.value;
    if(lenght>=2){
        arrayForm.style.display ="block";
    }else{
        arrayForm.style.display ="none";
        alert("Array needs to have at least two elements")
    }
    
    elements.innerHTML="";
    for(let i=0;i<lenght;i++){
        elements.innerHTML+=`<input type="number" name="string" step=0.00001 class="element${i}" required/>`
    }
}

arrayForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let sum = 0;
    let lenght = arrayLenght.value;
    for(let i=0;i<lenght;i++){
        const element = document.querySelector(`.element${i}`).value;
        sum +=parseFloat(element);
    }
    sumValue.innerHTML=`${sum}`;
  })

Addform.addEventListener('submit',(e)=>{
    e.preventDefault()
    let sum = 0;
    let number1 = document.querySelector('.number1').value;
    let number2 = document.querySelector('.number2').value;
    sum =parseFloat(number1)+parseFloat(number2);
    document.querySelector('.result').innerHTML=`${sum}`;
  })