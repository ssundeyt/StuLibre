window.addEventListener('load', function(){
    try {
        version = chrome.runtime.getManifest().version;

        const up_buttons = document.getElementsByClassName("fa-cloud-arrow-up");
    
        button_cv = document.createElement("button");
        button_cv.classList.add("github-button");
        button_cv.classList.add("tooltip-bottom");
        
        button_cv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 60" aria-labelledby="title" aria-describedby="desc" role="img" class="svg-inline--fa" xmlns:xlink="http://www.w3.org/1999/xlink"><path data-name="layer" d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z" fill="#fff"></path></svg><span>v.'+version+'</span><span class="tooltiptext-bottom">+</span>';
        button_cv.onclick = function() {location.href="https://github.com/ssundeyt/" }
    
        up_buttons[0].parentNode.parentNode.parentNode.insertBefore(button_cv, up_buttons[0].parentNode.parentNode.parentElement.children[2]);
    
        const logos = document.querySelectorAll('[aria-label="Studocu Logo"]');
    
        logos.forEach(logo => {
            updateLogo(logo);
        });
  
    } catch (error) {
        console.log(error);
    }

    try {
        const toggleButton = document.querySelector('[data-test-selector="content-sidebar-toggle"]');
        toggleButton.addEventListener('click', () => {
            setTimeout(() => {  
                const logos = document.querySelectorAll('[aria-label="Studocu Logo"]');
                logos.forEach(logo => {
                    updateLogo(logo);
                });
            }, 200);
        });
    } catch (error) {   
        console.log(error);
    }
});

const updateLogo = (logo) => {
    const logoPath = logo.firstChild;
    logoPath.innerHTML = 
        `<g transform="matrix(0.030577, 0, 0, -0.031212, 0.081575, 28.593828)" fill="#000000" stroke="none" style="">
        <path d="M152 849 c-65 -25 -117 -76 -131 -126 -27 -95 -3 -194 58 -246 18 -15 91 -57 162 -93 143 -73 166 -97 154 -161 -13 -70 -123 -98 -184 -48 -16 14 -35 41 -41 60 l-12 35 -79 0 -79 0 0 -43 c0 -59 41 -138 88 -170 47 -33 107 -46 203 -47 183 0 279 81 279 235 -1 121 -47 174 -236 273 -137 71 -163 96 -150 145 8 35 44 58 95 60 45 1 81 -24 101 -74 12 -29 14 -29 92 -29 l80 0 -4 54 c-6 78 -41 126 -119 165 -55 27 -72 31 -143 30 -56 0 -97 -6 -134 -20z" style="fill: rgb(26, 35, 126);"></path>
        <path d="M1670 435 l0 -415 85 0 85 0 0 175 0 175 125 0 125 0 0 -175 0 -175 80 0 80 0 0 415 0 415 -85 0 -85 0 0 -160 0 -160 -120 0 -120 0 0 160 0 160 -85 0 -85 0 0 -415z" style="fill: rgb(255, 193, 7);"></path>
        <path d="M3540 440 l0 -410 80 0 80 0 0 120 c0 149 3 149 104 -11 l72 -114 87 -3 c53 -2 87 1 87 7 0 10 -105 179 -163 265 -15 21 -27 44 -27 51 0 6 41 68 90 138 50 70 90 130 90 132 0 11 -167 4 -182 -7 -8 -7 -35 -42 -58 -78 -47 -72 -79 -110 -92 -110 -4 0 -8 97 -8 215 l0 215 -80 0 -80 0 0 -410z" style="fill: rgb(255, 193, 7);"></path>
        <path d="M699 723 c-1 -10 -1 -32 0 -50 3 -34 -27 -73 -54 -73 -21 0 -35 -33 -35 -84 l0 -46 45 0 45 0 0 -160 c0 -251 5 -257 258 -294 21 -3 22 0 22 75 0 75 -1 79 -22 79 -13 0 -37 9 -54 19 -37 22 -44 52 -44 189 l0 92 60 0 60 0 0 75 0 75 -60 0 -60 0 0 60 0 60 -80 0 c-69 0 -80 -2 -81 -17z" style="fill: rgb(26, 35, 126);"></path>
        <path d="M2516 629 c-94 -22 -146 -76 -146 -153 l0 -36 66 0 c59 0 70 3 100 30 19 16 45 32 58 36 34 8 79 -16 91 -50 8 -24 6 -31 -13 -46 -12 -10 -46 -21 -74 -25 -207 -25 -258 -62 -258 -187 0 -110 64 -180 177 -194 63 -8 112 7 159 48 34 30 34 30 34 7 0 -42 11 -48 78 -42 l64 6 -4 246 c-3 235 -4 248 -26 282 -44 71 -183 107 -306 78z m174 -374 c0 -46 -23 -101 -48 -114 -80 -43 -178 37 -128 104 9 12 37 23 82 31 98 17 94 18 94 -21z" style="fill: rgb(255, 193, 7);"></path>
        <path d="M3071 619 c-79 -31 -123 -102 -142 -230 -15 -101 7 -234 48 -293 49 -69 80 -81 218 -81 110 0 124 2 165 25 55 31 89 88 92 156 l3 49 -78 3 -77 3 -6 -30 c-17 -85 -125 -108 -178 -38 -18 25 -21 42 -21 137 0 126 14 158 79 175 50 12 85 -7 111 -62 l20 -42 78 -1 c87 0 85 -2 66 80 -15 65 -47 107 -103 135 -44 22 -63 25 -150 24 -56 0 -112 -5 -125 -10z" style="fill: rgb(255, 193, 7);"></path>
         <path d="M1050 388 c0 -205 3 -238 19 -274 37 -81 101 -108 250 -102 119 4 164 24 201 89 24 43 25 50 28 282 l4 237 -81 0 -81 0 0 -194 c0 -111 -5 -206 -11 -224 -13 -37 -55 -57 -104 -48 -62 12 -65 26 -65 258 l0 208 -80 0 -80 0 0 -232z" style="fill: rgb(26, 35, 126);"></path>
        </g>`;
}