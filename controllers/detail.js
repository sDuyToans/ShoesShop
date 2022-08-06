const renderShoes = (arrShoes) =>{
    let html = '';
    for (let i = 0; i < arrShoes.length & i < 6; i++){
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
const renderSize = (productSize) =>{
    let sizeHtml = ``;
    for (let i = 0; i < productSize.length; i++){
        sizeHtml += `
            <span class="size-span">${productSize[i]}</span>
        `
    }
    return sizeHtml;
}
const renderProductDetail = (product) =>{
    let html = `
        <div class="container">
            <div class="left-container">
                <img src="${product.image}" alt="..."/>
            </div>
            <div class="right-container">
                <h2>${product.name}</h2>
                <p class="p-des">${product.description}</p>
                <h3 class="text-success">Available Size</h3>
                <div class="size-container" id="size-container">
                    ${renderSize(product.size)}
                </div>
                <p class="text-danger">${product.price} $</p>
                <div class="product-amount" >
                    <span class="impact">+</span>
                    <span class="amount">1</span>
                    <span class="impact">-</span>
                </div>
                <button class="btn-detail">Add to cart</button>
            </div>
        </div>
    `;
    document.querySelector('#product-detail').innerHTML = html;
}

window.onload = () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParam}`)
    .then(result => {
        renderProductDetail(result.data.content);
    })
    .catch(err => console.log(err));
}

