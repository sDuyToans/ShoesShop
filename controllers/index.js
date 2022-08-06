import  Product  from "../models/Product.js";

const renderShoes = (arrShoes) =>{
    let html = '';
    for (let i = 0; i < arrShoes.length; i++){
        let product = arrShoes[i];
        html += `
            <div class="card">
                <a class="product-href" href="/routes/detail/detail.html?productid=${product.id}">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text text-muted">${product.shortDescription}</p>
                </div>
                <div class="card-footer">
                    <button class="buynow-btn">Buy now</button>
                <div class="price-text">
                    <span>${product.price}$</span>
                </div>
            </div>
                </a>
            </div>
        `
    }
    document.querySelector('#renderProduct').innerHTML = html;
}

axios.get('https://shop.cyberlearn.vn/api/Product')
.then(result =>{
    renderShoes(result.data.content)
})
.catch(err =>{
    console.log(err)
})

