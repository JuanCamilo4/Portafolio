if (screen.width < 1024) {
	$('#aside-btn-scroll').css('opacity', '0');
	$('#aside-btn-scroll').css('visibility', 'hidden');
} else {
	$(window).scroll(function () { 
		if (scrollY >= 200) {
			$('#aside-btn-scroll').css('opacity', '1');
			$('#aside-btn-scroll').css('visibility', 'visible');
		} else {
			$('#aside-btn-scroll').css('opacity', '0');
			$('#aside-btn-scroll').css('visibility', 'hidden');
		}
	});
}

const animado = document.querySelectorAll('.primera-animacion');
const animado2 = document.querySelectorAll('.segunda-animacion');
const flechaAnimada = document.querySelector('.flechas-animadas');

const mostrarScroll = () =>{
	let scrollTop = document.documentElement.scrollTop;

	recorrerAnimacon(scrollTop, animado, "mostrarArriba", (e)=>{
		flechaAnimada.style.transform = "transform: translateY(-50%);"
	});

	recorrerAnimacon(scrollTop, animado2, "mostrarIzquierda", (e)=>{});

}
const recorrerAnimacon = (scrollTop, array, claseAsignada, nx)=>{
	for (let i = 0; i < array.length; i++) {
		let alturaAnimado = array[i].offsetTop;
		if ((alturaAnimado - 500) < scrollTop) {
			array[i].style.opacity = 1;
			array[i].classList.add(claseAsignada);
			nx();
		}		
	}
}

const btn = $('.disabled');
btn.click(() => {
	console.log('Hola')
});

window.addEventListener('scroll', function(e){
	mostrarScroll();
});