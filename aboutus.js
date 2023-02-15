// for about us page
const awrapper = document.querySelector('.awrapper');

const abtnPopup = document.querySelector('.abtnLogin-popup');

const aiconClose = document.querySelector('.aicon-close');


abtnPopup.addEventListener('click', ()=> {
	awrapper.classList.add('active-popup');
});

aiconClose.addEventListener('click', ()=> {
	awrapper.classList.remove('active-popup');
});