document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const nome = document.querySelector('#nome');
    const usuario = document.querySelector('#usuario');
    const repositorios = document.querySelector('#repositorios');
    const seguidores = document.querySelector('#seguidores');
    const seguindo = document.querySelector('#seguindo');
    const linkPerfil = document.querySelector('#link');


    const endpoint = `https://api.github.com/users/daviirb`;
    fetch(endpoint)
    .then(resposta => resposta.json())
    .then(json => {
        avatar.src = json.avatar_url;
        nome.innerText = json.name;
        usuario.innerText = json.login;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        linkPerfil.href = json.html_url;

    })

})