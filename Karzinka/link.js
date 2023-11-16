const container = document.querySelector(".container");
let names =[
    {
     "name": "Qizil Olma",
     "sale": "-5%",
     "price": "15.000 sum",
     "url": "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg",
     "id": "1"
    },
    {
     "name": "Yashil Olma",
     "sale": "-7%",
     "price": "15.000 sum",
     "url": "https://jivy.uz/wp-content/uploads/2020/08/apple-bottom.png",
     "id": "2"
    },
    {
     "name": "Banan",
     "sale": "-12%",
     "price": "25.000 sum",
     "url": "https://lenta.servicecdn.ru/globalassets/1/-/01/12/30/486826_1.png?preset=fulllossywhite",
     "id": "3"
    },
    {
     "name": "Anor",
     "sale": "-9%",
     "price": "15.0000 sum",
     "url": "https://dostavo4ka.uz/upload-file/2021/05/05/3815/dea8262e-597a-4255-acbd-e01e0b3fe765.jpg",
     "id": "4"
    },
    {
     "name": "Nok",
     "sale": "-3%",
     "price": "15.0000 sum",
     "url": "https://avitsenna.uz/wp-content/uploads/2015/08/nok.jpeg",
     "id": "5"
    },
    {
     "name": "Apelsin",
     "sale": "-10%",
     "price": "15.0000 sum",
     "url": "https://w7.pngwing.com/pngs/357/717/png-transparent-orange-fruit-orange-fruit-orange-clipart-thumbnail.png",
     "id":"6"
    },
     {
        "name": "Yashil Olma",
        "sale": "-7%",
        "price": "15.000 sum",
        "url": "https://jivy.uz/wp-content/uploads/2020/08/apple-bottom.png",
        "id": "7"
       },

    
    {
        "name": "Anor",
        "sale": "-9%",
        "price": "15.0000 sum",
        "url": "https://dostavo4ka.uz/upload-file/2021/05/05/3815/dea8262e-597a-4255-acbd-e01e0b3fe765.jpg",
        "id": "8"
       },
   ]
   names.forEach(
    (element) =>(container.innerHTML +=` <div class="content">  <div class="row">
    <img class="crs" src=${element.url} alt="">
<div class="sale">${element.sale}</div>
</div>
<h4 class="name">${element.name}</h4>
<p class="price">${element.price}</p>
<button>To card</button>  
</div>`))