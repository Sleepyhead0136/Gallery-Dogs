const PICTURE=document.querySelectorAll('.picture img')
const POPUP=document.querySelector('.popup')
const MAIN_PICTURE=document.querySelector('.mainimage')
const POPUP_CLOSE=document.querySelector('.popup_close')
const ARROW_RIGHT=document.querySelector('.arrow_right')
const ARROW_LEFT=document.querySelector('.arrow_left')

let currentIndex;

const escClose=()=>{
    POPUP.classList.add('liquid_out')  
    setTimeout(()=>{ 
        POPUP.classList.add('hidden')  
        POPUP.classList.remove('liquid_out')  
    }, 300) 
};
const nextPictureLeft=()=>{
    if(currentIndex===0){
        currentIndex=PICTURE.length-1
    }else{
        currentIndex--
    }
    MAIN_PICTURE.src=PICTURE[currentIndex].src
    const randomColor = randomShadow();
   POPUP.querySelector('img').style.boxShadow = `3px 3px 18px 10px${randomColor}`;
}
const nextPictureRight=()=>{
    if(currentIndex===PICTURE.length-1){
        currentIndex=0
    }else{
        currentIndex++
    }
   MAIN_PICTURE.src=PICTURE[currentIndex].src
   const randomColor = randomShadow();
   POPUP.querySelector('img').style.boxShadow = `3px 3px 18px 10px${randomColor}`;
}
const randomShadow=()=>{
   const box=['#25db00','#0400ff','#ab0be5']
    let randomIndex=Math.floor(Math.random()*box.length)
     return box[randomIndex];
    
}
PICTURE.forEach((PICTURE, index)=>{
    PICTURE.addEventListener('click',(e)=>{
    POPUP.classList.remove('hidden')
    MAIN_PICTURE.src=e.target.src
    currentIndex=index   
})
});

POPUP_CLOSE.addEventListener('click', escClose)

ARROW_RIGHT.addEventListener('click',nextPictureRight)

ARROW_LEFT.addEventListener('click',nextPictureLeft)

document.addEventListener('keydown', (e)=>{
    
    if(e.code==='ArrowRight'||e.key===39){
        const randomColor=randomShadow();
    POPUP.querySelector('img').style.boxShadow = `3px 3px 18px 10px${randomColor}`;
        nextPictureRight();
    }
})
document.addEventListener('keydown',(e)=>{
   if( e.code==='ArrowLeft'||e.key===37){
    const randomColor=randomShadow();
    POPUP.querySelector('img').style.boxShadow = `3px 3px 18px 10px${randomColor}`;
    nextPictureLeft();
   }
})

document.addEventListener('keydown',(e)=>{
    
    if(e.code==='Escape'||e.key===27){
escClose();
    }
})
