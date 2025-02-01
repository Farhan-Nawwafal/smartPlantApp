const getStartedBtn = document.getElementById('scroll-btn');
const getBottomPage = document.getElementById('bottom-page');
const getFooter = document.getElementById('footerHome');

getStartedBtn.addEventListener('click', () => {
	getBottomPage.style.display = 'block';
	getBottomPage.classList.toggle('bottom-content');
	getFooter.style.visibility = 'visible';
});