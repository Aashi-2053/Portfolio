var Typed=new Typed(".text",{
strings:["Frontend Developer.","Web Developer.","Backend Developer."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
let menulist=document.getElementById("menulist")
menulist.style.maxHeight="0px";
function toggleMenu(){
    if(menulist.style.maxHeight=="0px")
    {
        menulist.style.maxHeight="400px";
    }
    else{
        
            menulist.style.maxHeight="0px";
        
    }
}