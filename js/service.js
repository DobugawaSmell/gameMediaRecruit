
window.addEventListener('load', function(){
    document.getElementById("svc-tab1").addEventListener('click', changeService1);
    document.getElementById("svc-tab2").addEventListener('click', changeService2);
    document.getElementById("svc-tab3").addEventListener('click', changeService3);
    document.getElementById("svc-tab4").addEventListener('click', changeService4);
    document.getElementById("svc-tab1").addEventListener('mouseover', serviceMouseOver1);
    document.getElementById("svc-tab2").addEventListener('mouseover', serviceMouseOver2);
    document.getElementById("svc-tab3").addEventListener('mouseover', serviceMouseOver3);
    document.getElementById("svc-tab4").addEventListener('mouseover', serviceMouseOver4);
    document.getElementById("svc-tab1").addEventListener('mouseout', serviceMouseOut1);
    document.getElementById("svc-tab2").addEventListener('mouseout', serviceMouseOut2);
    document.getElementById("svc-tab3").addEventListener('mouseout', serviceMouseOut3);
    document.getElementById("svc-tab4").addEventListener('mouseout', serviceMouseOut4);
});

function changeService1()
{
    document.getElementById("svc-img").src="img/media.jpg";
    let tab = document.getElementById("svc-tab1");
    let otherTab1 = document.getElementById("svc-tab2");
    let otherTab2 = document.getElementById("svc-tab3");
    let otherTab3 = document.getElementById("svc-tab4");
    let text1 = document.getElementById("svc-text1");
    let text2 = document.getElementById("svc-text2");
    tab.style.borderBottomWidth = "3px";
    otherTab1.style.borderBottomWidth = "0px";
    otherTab2.style.borderBottomWidth = "0px";
    otherTab3.style.borderBottomWidth = "0px";
    text1.innerHTML = "国内最大級のゲームアプリ情報・攻略サイト「GameWith」";
    text2.innerHTML = "ゲームを有利に進めるための攻略情報や、新作ゲームのレビュー情報を提供しています。";
}

function changeService2()
{
    document.getElementById("svc-img").src="img/production.jpg";
    let tab = document.getElementById("svc-tab2");
    let otherTab1 = document.getElementById("svc-tab1");
    let otherTab2 = document.getElementById("svc-tab3");
    let otherTab3 = document.getElementById("svc-tab4");
    let text1 = document.getElementById("svc-text1");
    let text2 = document.getElementById("svc-text2");
    tab.style.borderBottomWidth = "3px";
    otherTab1.style.borderBottomWidth = "0px";
    otherTab2.style.borderBottomWidth = "0px";
    otherTab3.style.borderBottomWidth = "0px";
    text1.innerHTML = "クリエイタープロダクション「GameWith Creators」";
    text2.innerHTML = "ゲーム分野に特化した動画配信者が所属するプロダクションの運営を行なっています。";
}

function changeService3()
{
    document.getElementById("svc-img").src="img/esports.jpg";
    let tab = document.getElementById("svc-tab3");
    let otherTab1 = document.getElementById("svc-tab2");
    let otherTab2 = document.getElementById("svc-tab1");
    let otherTab3 = document.getElementById("svc-tab4");
    let text1 = document.getElementById("svc-text1");
    let text2 = document.getElementById("svc-text2");
    tab.style.borderBottomWidth = "3px";
    otherTab1.style.borderBottomWidth = "0px";
    otherTab2.style.borderBottomWidth = "0px";
    otherTab3.style.borderBottomWidth = "0px";
    text1.innerHTML = "eスポーツ事業";
    text2.innerHTML = "プロゲーミングチームの運営、ならびにeスポーツイベントの企画制作・運営を行なっています。";
}

function changeService4()
{
    document.getElementById("svc-img").src="img/blockChain.jpg";
    let tab = document.getElementById("svc-tab4");
    let otherTab1 = document.getElementById("svc-tab2");
    let otherTab2 = document.getElementById("svc-tab3");
    let otherTab3 = document.getElementById("svc-tab1");
    let text1 = document.getElementById("svc-text1");
    let text2 = document.getElementById("svc-text2");
    tab.style.borderBottomWidth = "3px";
    otherTab1.style.borderBottomWidth = "0px";
    otherTab2.style.borderBottomWidth = "0px";
    otherTab3.style.borderBottomWidth = "0px";
    text1.innerHTML = "ブロックチェーン事業";
    text2.innerHTML = "ブロックチェーン技術を活用した、ゲーム開発などを展開していきます。";
}

function serviceMouseOver1()
{
    let tab = document.getElementById("svc-tab1");
    tab.style.fontWeight = '800';
}

function serviceMouseOver2()
{
    let tab = document.getElementById("svc-tab2");
    tab.style.fontWeight = '800';
}

function serviceMouseOver3()
{
    let tab = document.getElementById("svc-tab3");
    tab.style.fontWeight = '800';
}

function serviceMouseOver4()
{
    let tab = document.getElementById("svc-tab4");
    tab.style.fontWeight = '800';
}

function serviceMouseOut1()
{
    let tab = document.getElementById("svc-tab1");
    tab.style.fontWeight = '600';
}
function serviceMouseOut2()
{
    let tab = document.getElementById("svc-tab2");
    tab.style.fontWeight = '600';
}
function serviceMouseOut3()
{
    let tab = document.getElementById("svc-tab3");
    tab.style.fontWeight = '600';
}
function serviceMouseOut4()
{
    let tab = document.getElementById("svc-tab4");
    tab.style.fontWeight = '600';
}
