const usuario = document.querySelector('.usuarios_liberados__usuarios_liberados__usuarios');
var botaoRemover = document.querySelector('.usuarios_liberados__usuarios_liberados__usuarios-remover');

botaoRemover.addEventListener('click', function(){
    if(usuario.classList) usuario.classList.add('remover_usuario');
    else usuario.className += ' remover_usuario';
});