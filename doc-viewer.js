function downloadDoc(){
	var head = document.getElementsByTagName("head")[0].innerHTML;
	var tit = document.getElementsByTagName("h1")[0].innerHTML;
	var pages = document.getElementById('page-container').childNodes;

	width = pages[0].offsetWidth;
	height = pages[0].offsetHeight;

	if (width > height){
		print_opt = "{@page {size: A5 landscape;} body {zoom: 90%;}";
	}else{
		print_opt = "{@page {size: A5 portrait;}";
	}

	for(i=0; i<pages.length; i++){
		pages[i].childNodes[0].style = "display: block;";
		pages[i].childNodes[0].childNodes[0].style = "display: block;";
	}

	var pdf = pages[0].parentNode.parentNode.parentNode.innerHTML;

	newWindow = window.open("", "Document", "height=865,width=625,status=yes,toolbar=no,menubar=no");  
	
	const buttonStyle = `
		#export-pdf-button {
			position: fixed;
			top: 20px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #4CAF50;
			color: white;
			padding: 15px 32px;
			font-size: 20px;
			border: none;
			border-radius: 8px;
			cursor: pointer;
			z-index: 9999;
		}
		@media print {
            #export-pdf-button {
                display: none;
            }
        }
	`;
	
	const instructionStyle = `
		.instruction-box {
			position: fixed;
			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			background-color: #00acff;
			font-weight: bold;
			color: white;
			padding: 5px 40px;
			border-radius: 10px;
			z-index: 10000;
			font-size: 1.0em;
			text-align: center;
		}
		@media print {
            .instruction-box {
                display: none;
            }
        }
	`;

	newWindow.document.getElementsByTagName("head")[0].innerHTML = head + "<style> .nofilter{filter: none !important;} </style>" + "<style> @media print " + print_opt + "</style>" + `<style>${buttonStyle}</style>` + `<style>${instructionStyle}</style>`;
	newWindow.document.title = tit;
	newWindow.document.getElementsByTagName("body")[0].innerHTML = pdf;
	newWindow.document.getElementsByTagName("body")[0].childNodes[0].style.height = "100%";
	newWindow.document.getElementsByTagName("body")[0].childNodes[0].style.width = "100%";
	newWindow.document.getElementsByTagName("body")[0].childNodes[0].style.transform = "";

	var mb_banners = newWindow.document.querySelectorAll('[class*="banner"]');
	mb_banners.forEach(el => el.remove());

	const exportButton = newWindow.document.createElement('button');
	exportButton.id = 'export-pdf-button';
	exportButton.textContent = 'Export to PDF';
	
	const instructionBox = newWindow.document.createElement('div');
	instructionBox.className = 'instruction-box';
	instructionBox.textContent = "Please select 'Save as PDF' in the menu next to 'Destination' and press the 'Save'-button.";
	instructionBox.style.display = 'none';

	exportButton.onclick = function() {
		instructionBox.style.display = 'block';
		setTimeout(() => {
			newWindow.print();
			instructionBox.style.display = 'none';
		}, 2000);
	};

	newWindow.document.body.prepend(exportButton);
	newWindow.document.body.appendChild(instructionBox);
}

function startDownloadProcess(){
	const loadingBox = document.createElement('div');
	loadingBox.className = 'loading-box';
	loadingBox.textContent = 'Fetching document, please wait...';
	document.body.appendChild(loadingBox);
	
	let scrollAmount = document.body.scrollHeight / 100;
	
	function autoScroll() {
		window.scrollBy(0, scrollAmount);
		if (window.scrollY < document.body.scrollHeight - window.innerHeight) {
			window.requestAnimationFrame(autoScroll);
		} else {
			window.scrollTo(0, 0);
			loadingBox.remove();
			downloadDoc();
		}
	}
	
	window.requestAnimationFrame(autoScroll);
}

function toggleDistractionFreeMode() {
	document.body.classList.toggle('distraction-free-mode');
	const button = document.getElementById('distraction-mode-button');
	if (document.body.classList.contains('distraction-free-mode')) {
		button.textContent = "Turn distraction-free reading mode on/off";
	} else {
		button.textContent = "Turn distraction-free reading mode on/off";
	}
}

function addButtons(){
	const button1 = document.createElement("button");
	button1.classList.add("download-button-1");
	button1.innerHTML = '<svg aria-hidden="true" focusable="false" data-prefix="fas" class="svg-inline--fa" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path></svg><span class="download-text">Download this document</span>';
		
	let prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	let i = 0;
	let buttons = [];
	while(prev_buttons.length > 0){
		if(prev_buttons[0].parentNode.parentNode.firstChild.classList.contains("download-button-1")){
			prev_buttons[0].parentNode.remove();
		}else{
			buttons.push(button1.cloneNode(true, true));
			buttons[i].onclick = function() {startDownloadProcess()};
			prev_buttons[0].parentNode.parentNode.prepend(buttons[i]);
			prev_buttons[0].parentNode.remove();
			i++;
		}
		prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	}

	const guiBox = document.createElement("div");
	guiBox.id = "guibox";
	document.body.appendChild(guiBox);

	const distractionButton = document.createElement("button");
	distractionButton.id = "distraction-mode-button";
	distractionButton.classList.add("download-button-1");
	distractionButton.textContent = "Turn distraction-free reading mode on/off";
	distractionButton.onclick = toggleDistractionFreeMode;
	
	guiBox.appendChild(distractionButton);
}

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		addButtons();
	});
});



window.addEventListener('load', function(){
	const currentUrl = window.location.href;
	if (currentUrl.includes('studocu.com/sv/document/') || currentUrl.includes('studocu.com/document/')) {
		// moved
	}
	
	const prev_buttons = document.getElementsByClassName("fa-cloud-arrow-down");
	if(prev_buttons.length > 0) {
		try{
			addButtons();
		}catch(err){
			console.log(err);
		}finally{
			let element = document.getElementById("viewer-wrapper");
			observer.observe(element, { attributes: true, childList: true, subtree: true});
		}
	}

});

