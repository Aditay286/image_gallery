const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
let check=false;
/* Looping through images */
for(i=1;i<=5;i++)
{
const newImage = document.createElement('img');
newImage.setAttribute('src',`images/pic${i}.jpg`);
//newImage.setAttribute('class',"thumb");
newImage.addEventListener('click',function(e)
{
 
 displayedImage.src=e.target.src;
});
thumbBar.appendChild(newImage);
}
/* Wiring up the Darken/Lighten button */
btn.onclick=function(e)
{
if(!check)
{
 overlay.style.backgroundColor="rgba(0,0,0,0.5)";
 btn.textContent="Lighten";
 check=true;
}
else{
 overlay.style.backgroundColor="rgba(0,0,0,0)";
 btn.textContent="Darken";
 check=false;
}
}
