//console.log('forum landing page')

function cards(){
    fetch("https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg")
    .then(res=>res.json())
    .then(data=>displayusers(data))
}
function cards2(){
    fetch("https://i.ibb.co/wYxp7d6/pexels-spencer-selover-428328.jpg")
    .then(res=>res.json())
    .then(data=>displayusers(data))
}
function cards3(){
    fetch("https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg")
    .then(res=>res.json())
    .then(data=>displayusers(data))
}
function cards4(){
    fetch("https://i.ibb.co/pjM6Ybr/pexels-anastasia-shuraeva-9607206.jpg")
    .then(res=>res.json())
    .then(data=>displayusers(data))
}
function cards5(){
    fetch("https://i.ibb.co/b7GT5nt/pexels-apunto-group-agencia-de-publicidad-7752813.jpg")
    .then(res=>res.json())
    .then(data=>displayusers(data))
}
function cards6(){
    fetch("https://i.ibb.co/0QRxkd5/pexels-jan-kop-iva-3525908.jpg")
    .then(res=>res.json())
    .then(data=>displayusers(data))
}
function displaycards(){
    console.log(data);
}