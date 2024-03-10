function lastedPosts(){
    fetch("https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg")
    .then(res=>res.json())
    .then(data=>displaylastedPosts(data))
}

function lastedPosts2(){
    fetch("https://i.ibb.co/hC2CtK2/pexels-monstera-production-7412067.jpg")
    .then(res=>res.json())
    .then(data=>displaylastedPosts(data))
}

function lastedPosts3(){
    fetch("https://i.ibb.co/MRFZT7G/pexels-pixabay-356056.jpg")
    .then(res=>res.json())
    .then(data=>displaylastedPosts(data))
}

function displaylastedPosts(){
    console.log(data);
}