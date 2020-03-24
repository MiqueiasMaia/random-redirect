let btnSubmit = document.getElementById('consultant');
btnSubmit.addEventListener("click", redirect);

function redirect() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    links = new Array("url", "url", "url");
    size = links.length;
    whatsRand = Math.floor(Math.random() * size);
    text = "Olá, me chamo *" + name + "* e gostaria de ser atendido por um consultor especializado. Tenho interesse ou dúvida referente a seus produtos/serviços. 😃";
    text = encodeURI(text)

    window.open(links[whatsRand] + '&text=' + text, '_blank');

}