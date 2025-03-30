const iconHamburguesa = document.querySelector('.iconHamburguesa');
const navMobil = document.querySelector('.navMobil');
const tancamentMenu = document.querySelector('.tancamentMenu');

iconHamburguesa.addEventListener('click',function(){
	navMobil.style.display = "block";
});
tancamentMenu.addEventListener('click', function(){
	navMobil.style.display = "none";
});