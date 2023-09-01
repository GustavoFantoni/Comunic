var menu = document.querySelector('div.menu-content');
var buttonMenu = document.querySelector('button.menu-r');
menu.addEventListener('mouseenter', activeMenu);
menu.addEventListener('mouseleave', deactivateMenu);
function activeMenu() {
    menu.classList.add('menuActived');
}
function deactivateMenu() {
    menu.classList.toggle('menuActived');
}
var contacts = document.querySelector('div.menu');
var buttonContacts = document.querySelector('p.barra-contatos');
buttonContacts.addEventListener('mouseenter', activeContacts);
function activeContacts() {
    contacts.classList.add('contactsActived');
    buttonContacts.classList.add('buttonContactsActived');
}
contacts.addEventListener('mouseleave', DesactiveMenuContacts)
function DesactiveMenuContacts() {
    contacts.classList.toggle('contactsActived')
    buttonContacts.classList.toggle('buttonContactsActived');
}
var openChat = document.querySelector('div.contact-perfil');
var chat = document.querySelector('section.chat');
openChat.addEventListener('click', OpenChatF)
function OpenChatF(){
    chat.classList.toggle('chatContent')
}



