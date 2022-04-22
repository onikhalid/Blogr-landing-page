///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////////////////////////////  DESKTOP ////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

const Link1 = document.querySelector('.link1');
const Content1 = document.querySelector('.content1');
const Link2 = document.querySelector('.link2');
const Content2 = document.querySelector('.content2');
const Link3 = document.querySelector('.link3');
const Content3 = document.querySelector('.content3');


///////////////////////////////////////
////////////  Misc 1  ////////////////
//////////////////////////////////////

MContent2.classList.remove('removeContent')

MContent3.classList.remove('removeContent')

MLink1.classList.remove('mobilelink');

document.addEventListener('click', function (event) {
    var Inside1 = Link1.contains(event.target);
    if(!Inside1){
        Content1.classList.remove('showContent');
        Content1.classList.add('removeContent');
        Link1.classList.remove('desktoplinkOpen');
        Link1.classList.add('desktoplink');
    }

})

document.addEventListener('click', function (event) {
    var Inside2 = Link2.contains(event.target);
    if(!Inside2){
        Content2.classList.remove('showContent');
        Content2.classList.add('removeContent');
        Link2.classList.remove('desktoplinkOpen');
        Link2.classList.add('desktoplink');
    }

})

document.addEventListener('click', function (event) {
    var Inside3 = Link3.contains(event.target);
    if(!Inside3){
        Content3.classList.remove('showContent');
        Content3.classList.add('removeContent');
        Link3.classList.remove('desktoplinkOpen');
        Link3.classList.add('desktoplink');
    }

})




///////////////////////////////////////
////////////  LINK 1  ////////////////
//////////////////////////////////////


Link1.addEventListener('click', function() {
    
    if(Content1.classList.contains('showContent')){

        Content1.classList.remove('showContent');
        Content1.classList.add('removeContent');
        Link1.classList.remove('desktoplinkOpen');
        Link1.classList.add('desktoplink');
    }
    else{
        Content1.classList.add('showContent');
        Content1.classList.remove('removeContent');
        Link1.classList.add('desktoplinkOpen');
        Link1.classList.remove('desktoplink');
    };
})




///////////////////////////////////////
////////////  LINK 2 ////////////////
//////////////////////////////////////

Link2.addEventListener('click', function() {
    
    if(Content2.classList.contains('showContent')){

        Content2.classList.remove('showContent');
        Content2.classList.add('removeContent');
        Link2.classList.remove('desktoplinkOpen');
        Link2.classList.add('desktoplink');
    }
    else{
        Content2.classList.add('showContent');
        Content2.classList.remove('removeContent');
        Link2.classList.add('desktoplinkOpen');
        Link2.classList.remove('desktoplink');
    };
})




///////////////////////////////////////
////////////  LINK 3  ////////////////
//////////////////////////////////////

Link3.addEventListener('click', function() {
    
    if(Content3.classList.contains('showContent')){

        Content3.classList.remove('showContent');
        Content3.classList.add('removeContent');
        Link3.classList.remove('desktoplinkOpen');
        Link3.classList.add('desktoplink');
    }
    else{
        Content3.classList.add('showContent');
        Content3.classList.remove('removeContent');
        Link3.classList.add('desktoplinkOpen');
        Link3.classList.remove('desktoplink');
    };
})







///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////////////////////////////  MOBILE /////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


///////////////////////////////////////
////////////  HAMBURGER  //////////////
//////////////////////////////////////
const Ham = document.getElementById('nav__mobile');
const MobileNavLink = document.getElementById('nav__mobileLinks');
MobileNavLink.classList.remove('removeContent');

MobileNavLink.classList.remove('showContent');

MContent1.classList.remove('removeContent');
Ham.classList.remove('openMobileMenu');

Ham.addEventListener('click', function (){
    if (Ham.classList.contains('openMobileMenu')){
        Ham.classList.remove('openMobileMenu')
        MobileNavLink.classList.remove('showContent');
        MobileNavLink.classList.add('removeContent');
    }
    else{
        Ham.classList.add('openMobileMenu')
        MobileNavLink.classList.add('showContent');
        MobileNavLink.classList.remove('removeContent');
    }
})
document.addEventListener('click', function (event) {
    var Inside = MobileNavLink.contains(event.target);
    var Insid = Ham.contains(event.target);
    if(Insid&&Ham.classList.contains('openMobileMenu')){
        Ham.classList.add('openMobileMenu')
    }
    else if(Inside){
        Ham.classList.add('openMobileMenu')
        MobileNavLink.classList.add('showContent');
        MobileNavLink.classList.remove('removeContent');
    }
    else if(!Inside){
        Ham.classList.remove('openMobileMenu')
        MobileNavLink.classList.remove('showContent');
        MobileNavLink.classList.add('removeContent');
    }

})

///////////////////////////////////////
////////////  LINK 1  ////////////////
//////////////////////////////////////
const MLink1 = document.querySelector('.Mlink1');
const MContent1 = document.querySelector('.Mcontent1');
const MLink2 = document.querySelector('.Mlink2');
const MContent2 = document.querySelector('.Mcontent2');
const MLink3 = document.querySelector('.Mlink3');
const MContent3 = document.querySelector('.Mcontent3');


MLink1.addEventListener('click', function() {
    
    if(MLink1.classList.contains('mobilelinkOpen')){

        MContent1.classList.remove('MContentOpen');
        MContent1.classList.remove('showContent');
        MContent1.classList.add('removeContent');
        MLink1.classList.remove('mobilelinkOpen');
        MLink1.classList.add('mobilelink');
    }
    else{
        MContent1.classList.add('MContentOpen');
        MContent1.classList.remove('removeContent');
        MContent1.classList.add('showContent');
        MLink1.classList.add('mobilelinkOpen');
        MLink1.classList.remove('mobilelink');
    };
})
document.addEventListener('click', function (event) {
    var Inside1 = MLink1.contains(event.target);
    if(!Inside1){
        MContent1.classList.remove('MContentOpen');
        MContent1.classList.remove('showContent');
        MContent1.classList.add('removeContent');
        MLink1.classList.remove('mobilelinkOpen');
        MLink1.classList.add('mobilelink');
    }
})


///////////////////////////////////////
////////////  LINK 2  ////////////////
//////////////////////////////////////
MLink2.addEventListener('click', function() {
    
    if(MLink2.classList.contains('mobilelinkOpen')){

        MContent2.classList.remove('MContentOpen');
        MContent2.classList.remove('showContent');
        MContent2.classList.add('removeContent');
        MLink2.classList.remove('mobilelinkOpen');
        MLink2.classList.add('mobilelink');
    }
    else{
        MContent2.classList.add('MContentOpen');
        MContent2.classList.remove('removeContent');
        MContent2.classList.add('showContent');
        MLink2.classList.add('mobilelinkOpen');
        MLink2.classList.remove('mobilelink');
    };
})
document.addEventListener('click', function (event) {
    var Inside2 = MLink2.contains(event.target);
    if(!Inside2){
        MContent2.classList.remove('MContentOpen');
        MContent2.classList.remove('showContent');
        MContent2.classList.add('removeContent');
        MLink2.classList.remove('mobilelinkOpen');
        MLink2.classList.add('mobilelink');
    }


///////////////////////////////////////
////////////  LINK 3  ////////////////
//////////////////////////////////////
MLink3.addEventListener('click', function() {
    
    if(MLink3.classList.contains('mobilelinkOpen')){

        MContent3.classList.remove('MContentOpen');
        MContent3.classList.remove('showContent');
        MContent3.classList.add('removeContent');
        MLink3.classList.remove('mobilelinkOpen');
        MLink3.classList.add('mobilelink');
    }
    else{
        MContent3.classList.add('MContentOpen');
        MContent3.classList.remove('removeContent');
        MContent3.classList.add('showContent');
        MLink3.classList.add('mobilelinkOpen');
        MLink3.classList.remove('mobilelink');
    };
})})
document.addEventListener('click', function (event) {
    var Inside3 = MLink3.contains(event.target);
    if(!Inside3){
        MContent3.classList.remove('MContentOpen');
        MContent3.classList.remove('showContent');
        MContent3.classList.add('removeContent');
        MLink3.classList.remove('mobilelinkOpen');
        MLink3.classList.add('mobilelink');
    }
})









