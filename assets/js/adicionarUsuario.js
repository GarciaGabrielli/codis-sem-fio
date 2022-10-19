var digiteOCpf = document.querySelector('.liberar_acesso__formulario-cpf');
var cpfEncontrado = document.querySelector('.liberar_acesso__usuario_encontrado_container-cpf-usuario');
var botaoLiberarAcesso = document.querySelector('.liberar_acesso__botao_liberar_acesso');
var botaoImg = document.querySelector('.liberar_acesso__formulario-icone');


botaoImg.addEventListener('click', function(){
    cpfEncontrado.innerHTML = digiteOCpf.value;
});





botaoLiberarAcesso.addEventListener('click', function(){
   
});
