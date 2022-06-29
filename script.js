(function() {
    // Necessário declarar a variável img 
    var img = ["img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png"];
    var mudar = Math.floor(Math.random() * img.length);
    let classe = "imagem-aniversario"
    document.getElementById("imagem").innerHTML = "<img src='" + img[mudar] + " '>";
})();