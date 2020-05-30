let count = 0

let timer = 0


function sliderTimer(){
    const images = document.querySelectorAll('.slider img')
    const slider = document.querySelector('.slider')
    const size = images[0].clientWidth

    if(count > 3) count = 0


    slider.addEventListener('transitionend', ()=>{
        if(images[count].id === 'lastImage'){
            slider.style.transition = "none"
            count = 0
            slider.style.transform = `translateX(${-size * count}px)`
        }
    })
    
    if(images[count] === images[3]){
        timer = 1000

    }
    else{
        timer = 10000
    }

    slider.style.transition = 'transform 0.5s ease-in-out'
    slider.style.transform = `translateX(${-size * count}px)`
    
    count ++
    setTimeout(sliderTimer,timer);
} 

sliderTimer();