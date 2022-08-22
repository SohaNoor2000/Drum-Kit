var len=document.querySelectorAll("button").length;
for(let i=0;i<len;i++){
    //for buttons press 
    document.querySelectorAll("button")[i].addEventListener("click",function() {
       var x= this.innerHTML;
       makeSound(x);
       addAnimations(x);
    });
}
// for keyboard Keys press
document.addEventListener("keydown",function(event){
   makeSound(event.key);
   addAnimations(event.key);
});

function makeSound(key) {
    switch (key) {
        case 'w':
            var crash=new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case 'a':
            var kick=new Audio('sounds/kick-bass.mp3')
            kick.play();
            break;
         case 's':
            var snare=new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case 'd':
            var tom1=new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case 'j':
            var tom2=new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case 'k':
            var tom3=new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case 'l':
            var tom4=new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;   
        default:
            console.log(this.innerHTML);
       }
}
// Animations
function addAnimations(key) {
    var x=document.querySelector("."+key);
    x.classList.add("pressed");
    setTimeout(function() {
        x.classList.remove("pressed");
    },100)

}