// récupération de la chaine de requête dans l'url //
const queryString_url = window.location.search;

// méthode 2 - pour extraire l'id
const urlSearchParams = new URLSearchParams(queryString_url);

const productId = urlSearchParams.get("id");
console.log("l'identifiant trouvé est : " + productId);
fetch("http://localhost:3000/api/cameras/" + productId)
  .then((res) => res.json())
  .then((camera) => {
    console.log(camera);

    // Prix Caméra
    const productPriceText = document.getElementById("productPrice");
    productPriceText.innerText += `le prix est de ${camera.price / 100} e`;

    // nom Caméra
    const productNameText = document.getElementById("productName");
    productNameText.innerText += `Le nom de la caméra est ${camera.name}`;

    // image caméra
    const productImg = document.getElementById("productPicture");
    productImg.innerHTML += ` <img id="productImage" src="${camera.imageUrl}" alt="photo caméra" /> `;

    //option caméra

    optionCamera.innerHTML += `<option> ${camera.lenses}</option>`;
    for (let i = 0; i < camera.lenses; i++) {
      optionCamera.innerHTML += `<option> ${camera[i].lenses}</option>`;
    }
    console.log(camera.imageUrl);
  });
/////////////////Itération HTML ////////////////////////////

//------------------------------------------------------//
const optionCamera = document.getElementById("optionCamera");
