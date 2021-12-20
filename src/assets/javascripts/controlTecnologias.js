/*
	Para agregar una nueva tecnología hay que hacer lo siguiente: 
	- Editar el numeroTecnologias, añadiendole las necesarias;
	- Añadir el nombre de la imagen en el array de nombreImagen;
	- Añadir la informacion de la tecnologia en el Array tecConocimientos
*/

const btnCerrarModal = document.querySelector('.container-close-modal');
const btnSiguienteTecno = document.querySelector('#btnNextTexno');
const btnAnteriorTecno = document.querySelector('#btnPrevTecno');
const btnTecno = $('.btn-tecno');

let btnActive;
let count = 0;
let countNumber = 0;
let numeroTecnologias = 10;


/*btnSiguienteTecno.addEventListener('click', function(e){
	nextTecno(1);
});
btnAnteriorTecno.addEventListener('click', function(e){
	nextTecno(0)
});
btnCerrarModal.addEventListener('click', ()=>{
	containerModal.style.opacity = 0;
	containerModal.style.zIndex = -25;
})*/

$('.btn-tecno').click(function (e) { 
	alert('aa')
	console.log('Hola')
	
});

btnTecno.click((e)=>{
	btnActive = btnTecno.prevObject[0].activeElement.id;
	mostrarTecnologia(btnActive);
	countNumber = 0;
	console.log(btnActive);
});

const obtenerPosicion = (id) => { //Funcion para obtener la tecnología actual
	let numeroid = id.charAt(id.length-1);
	return numeroid;
};

const nextTecno = (control) => {
	count = obtenerPosicion(btnActive);

	if (countNumber == 0) countNumber = parseInt(count); 

	if (control == 0) {
		if (countNumber == 1) {
			countNumber = numeroTecnologias;
			mostrarTecnologia(`btnTecno${countNumber}`);
		} else {
			mostrarTecnologia(`btnTecno${countNumber-1}`);
			countNumber -= 1;
		}
	} else {
		if (countNumber == numeroTecnologias) {
			countNumber = 1;
			mostrarTecnologia(`btnTecno${countNumber}`);
		} else {
			mostrarTecnologia(`btnTecno${countNumber+1}`);
			countNumber += 1;
		}
	}
}

mostrarTecnologia(1)

const mostrarTecnologia = (id) => { //Funcion para mostrar el modal con la información de la tecnología presionada
	const img = $('.container-img-modal img');
	const nombre = $('#nombreTecno');
	const textoNivel = $('#texto-nivel');
	const containerPorcentaje = $('#nivelManejo');
	const containerModal = $('#containerModal');

	let imgTecnologia = "";
	let numeroid = id.charAt(id.length-1);
	let nombresImgTecno = ["html", "css", "javascript", "jquery", "bootstrap", "angular", "java", "sql", "git", "corel"]; //Los nombre de las imagenes en la carpeta public. 
	let tecConocimientos = {
		btnTecno1: ["HTML 5",'Intermedio-Avanzado', '60%'], //HTML
		btnTecno2: ["CSS",'Intermedio-Avanzado', '65%'], //Css
		btnTecno3: ["JavaScript",'Intermedio', '60%'], //JavaScript
		btnTecno4: ["JQuery",'Intermedio', '50%'], //JQuery
		btnTecno5: ["Bootstrap",'Básico-Intermedio', '50%'], //Bootstrap
		btnTecno6: ["Angular",'Básico', '30%'], //Angular
		btnTecno7: ["Java",'Básico', '40%'], //Java
		btnTecno8: ["MySQL",'Básico', '30%'], //MySQL
		btnTecno9: ["Git",'Básico', '50%'], //Git
		btnTecno10: ["CorelDraw",'Intermedio-Avanzado', '80%'] //CorelDraw
	}

	containerModal.css('opacity', 1);
	containerModal.css('zIndex', 1000);

	imgTecnologia = nombresImgTecno[numeroid-1];
	nombre.text(tecConocimientos[id][0]);
	textoNivel.text(tecConocimientos[id][1]);
	containerPorcentaje.css('width', tecConocimientos[id][2]);

	img.attr('src', `src/public/img/logo_tecnologias/${imgTecnologia}.png`);
}
