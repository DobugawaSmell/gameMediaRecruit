let textAnimTime = 300;
let wrapAnimTime = 500;

window.addEventListener('load', function(){
    document.getElementById("top_list1").addEventListener('mouseover', lookInfo);
    document.getElementById("top_list1").addEventListener('mouseout', hideInfo);
    document.getElementById("top_list2").addEventListener('mouseover', lookInfo2);
    document.getElementById("top_list2").addEventListener('mouseout', hideInfo2);
    document.getElementById("top_list3").addEventListener('mouseover', lookInfo3);
    document.getElementById("top_list3").addEventListener('mouseout', hideInfo3);
    document.getElementById("top_list4").addEventListener('mouseover', lookInfo4);
    document.getElementById("top_list4").addEventListener('mouseout', hideInfo4);
    document.getElementById("top_list5").addEventListener('mouseover', lookInfo5);
    document.getElementById("top_list5").addEventListener('mouseout', hideInfo5);
    document.getElementById("top_list6").addEventListener('mouseover', lookInfo6);
    document.getElementById("top_list6").addEventListener('mouseout', hideInfo6);
    document.getElementById("top_list7").addEventListener('mouseover', lookInfo7);
    document.getElementById("top_list7").addEventListener('mouseout', hideInfo7);
    document.getElementById("top-link-mission").addEventListener('click', jumpMission);
    document.getElementById("top-link-vision").addEventListener('click', jumpVision);
    document.getElementById("top-link-service").addEventListener('click', jumpService);
});

window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
});

function lookInfo(event){
    const info = document.getElementById("top-info1");
    const text = document.getElementById("top-info-text1");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo(event){
    const info = document.getElementById("top-info1");
    const text = document.getElementById("top-info-text1");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function lookInfo2(event){
    let info = document.getElementById("top-info2");
    const text = document.getElementById("top-info-text2");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo2(event){
    let info = document.getElementById("top-info2");
    const text = document.getElementById("top-info-text2");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function lookInfo3(event){
    let info = document.getElementById("top-info3");
    const text = document.getElementById("top-info-text3");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo3(event){
    let info = document.getElementById("top-info3");
    const text = document.getElementById("top-info-text3");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function lookInfo4(event){
    let info = document.getElementById("top-info4");
    const text = document.getElementById("top-info-text4");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo4(event){
    let info = document.getElementById("top-info4");
    const text = document.getElementById("top-info-text4");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function lookInfo5(event){
    let info = document.getElementById("top-info5");
    const text = document.getElementById("top-info-text5");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo5(event){
    let info = document.getElementById("top-info5");
    const text = document.getElementById("top-info-text5");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function lookInfo6(event){
    let info = document.getElementById("top-info6");
    const text = document.getElementById("top-info-text6");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo6(event){
    let info = document.getElementById("top-info6");
    const text = document.getElementById("top-info-text6");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function lookInfo7(event){
    let info = document.getElementById("top-info7");
    const text = document.getElementById("top-info-text7");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 3,
        opacity: 1,
        easing:'easeOutExpo',
        duration:300
    });
    anime({
        targets: text,
        opacity: 1,
        easing:'easeInSine',
        duration:500
    });
}

function hideInfo7(event){
    let info = document.getElementById("top-info7");
    const text = document.getElementById("top-info-text7");
    anime.remove(info);
    anime.remove(text);
    anime({
        targets: info,
        scaleY: 0.5,
        opacity: 0,
        easing:'easeInExpo',
        duration:500
    });
    anime({
        targets: text,
        opacity: 0,
        easing:'easeInSine',
        duration:300
    });
}

function jumpMission()
{
    scrollTo(0,900);
}

function jumpVision()
{
    scrollTo(0,1980);
}

function jumpService()
{
    scrollTo(0,3235);
}
