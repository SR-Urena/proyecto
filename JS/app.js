
const form = document.querySelector(".search");
if (form) {
  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    console.log("Submiting ...");

    const filter = iSearch.value;

    if (filter !== "") {
      const dataRequest = await fetch("../JSON/data.json");
      const dataJson = await dataRequest.json();
      const products = dataJson.products;

      let filtered = products.filter(
        (p) => p.productName.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      );
      console.log(filtered);

      if (filtered.length > 0) {
        document.getElementById("iResults").innerHTML = "";
        
        filtered.forEach((p) => {
          const li = document.createElement("h5");//nombre
          li.innerHTML = p.productName;
          li.classList.add('card-header');
          iResults.appendChild(li);

          const div = document.createElement("div");
          div.classList.add('card-body');
          div.classList.add('principal-card');
          iResults.appendChild(div);
          
          const data = document.createElement("h5");
          data.innerHTML = `Category: ${p.category.categoryName} <br>
          Price: $${p.unitPrice}`;//categoria
          data.classList.add('card-title')
          div.appendChild(data);
          
          const price = document.createElement("p");
          price.innerHTML = `${p.unitsInStock} Available`;//precio
          price.classList.add('card-text');
          price.classList.add('text-muted');
          div.appendChild(price);

          const info = document.createElement('a');
          // info.innerHTML = `<p>See more</p>`;
          info.textContent = `See more`;
          info.classList.add('info');
          info.setAttribute('onclick', 'verInfo()');
          div.appendChild(info);

          const btn = document.createElement("button");//boton
          // btn.setAttribute('id',`${p.id}`);
          btn.innerHTML = `<p>Add to cart</p>`;
          btn.classList.add('bttn');
          btn.setAttribute('onclick', 'sumar()');
          div.appendChild(btn);

          const btn2 = document.createElement('button');
          btn2.innerHTML = `<p>Remove from cart</p>`;
          btn2.classList.add('bttn2');
          btn2.setAttribute('onclick', 'restar()');
          div.appendChild(btn2);
          
        });
      }
    }
  });
}
function sumar(){
  alert('Se agregó un producto al carrito')
}
function restar(){
  alert('Se eliminó un producto del carrito')
}
function verInfo(){
  alert('"Detalle del producto"');
}