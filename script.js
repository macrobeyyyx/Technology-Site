const mobileMenuButton = document.querySelector('.mobile-menu-button');
let showMenu = false;

mobileMenuButton.addEventListener('click', () => {
  showMenu = !showMenu;
  document.querySelector('.mobile-menu').classList.toggle('hidden');
});
function Uyar() {
    alert("Bu Sadece Bir Demo");
}
