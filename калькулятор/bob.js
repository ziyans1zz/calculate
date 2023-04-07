
window.onload = () => {
		
	document.querySelector('#lol').onclick = calculate;
    document.querySelector('.lol2').onclick = del;

};



function calculate() {
    let sumInput = document.querySelector('#razmer').value;
    let quality = document.querySelector('#grade').value;
    let kolichestvo = document.querySelector('#chel').value;
    let itog = (sumInput * quality) / kolichestvo;
    itog = itog.toFixed(2);
    document.querySelector('#schet').innerHTML = itog;
    sKazhdogo = document.querySelector('.podschet').innerHTML = itog / kolichestvo;
    console.log(itog);
};      

function del() {
    // sumInput = document.querySelector('#razmer').innerHTML = '0';
    // quality = document.querySelector('#grade').innerHTML = '0%';
    // kolichestvo = document.querySelector('#chel').innerHTML = '0';


    document.querySelector('#schet').innerHTML = '';
    document.querySelector('.podschet').innerHTML = '';
    document.querySelector('.ad').innerHTML = '';
    document.querySelector('.da').innerHTML = '';
    document.querySelector('.aad').innerHTML = '';
    document.querySelector('.dda').innerHTML = '';
};


