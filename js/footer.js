window.addEventListener('load', function(){
    anime({
        targets:'.fot-animate',
        scaleY:[
          {value:12,duration:1000},
          {value:5,duration:1000},
          {value:15,duration:1000},
          {value:1,duration:1000},
          {value:12,duration:1000},
          {value:1,duration:2000},
          {value:5,duration:1000},
          {value:1,duration:1000}
        ],
        delay:anime.stagger(100),
        loop:true,
        easing:'easeInOutSine'
      });
});
