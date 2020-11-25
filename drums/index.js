var b=document.querySelectorAll("button");
for (let index = 0; index < 7; index++) {
    b[index].addEventListener("click",clickKey);}
    function clickKey()
    {
        drumPlay(this.innerHTML);
    }

    document.addEventListener("keydown",clickBoard);
    function clickBoard(e)
    {
       drumPlay(e.key);
    }
    
    function drumPlay(a)
    {
        
        
        switch(a)
        {
            case 'w':new Audio("sounds/tom-1.mp3").play();
            break;
            case 'a':new Audio("sounds/tom-2.mp3").play();
            break;
            case 's':new Audio("sounds/tom-3.mp3").play();
            break;
            case 'd':new Audio("sounds/tom-4.mp3").play();
            break;
            case 'j':new Audio("sounds/crash.mp3").play();
            break;
            case 'k':new Audio("sounds/kick-bass.mp3").play();
            break;
            case 'l':new Audio("sounds/snare.mp3").play();
            break;
        }
    
        
    
    
}