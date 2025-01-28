const getStartedBtn = document.getElementById('btn');
const getMokupImg = document.getElementById('mokup');
const getContainerTitle = document.getElementById('title');

getStartedBtn.addEventListener('click', () => {
	getMokupImg.style.visibility = 'visible';
	getContainerTitle.style.visibility = 'visible';
});
