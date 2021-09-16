fetch("http://localhost:3000/api/cameras")
  .then((res) => res.json())
  .then((cameras) => {
    for (let i = 0; i < cameras.length; i++) {
      productList.innerHTML += ` <li>
 <h3> ${cameras[i].name}</h3>
 <p> le prix est à ${cameras[i].price} e</p>
 <a href="html/product.html?${cameras[i]._id}">
 <img src=${cameras[i].imageUrl}> 
 </a>
</li> `;
    }
  });

const productList = document.getElementById("product-list");
