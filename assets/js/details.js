const getCatigoryProduct = async ()=>{

    const urlParams = new URLSearchParams(window.location.search);
    const categoryName = urlParams.get('category');

    const {data} = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
    return data;
}

const desplyProducts = async ()=>{
    const products = await getCatigoryProduct();

    const result = products.map( (product) => {
        return` <div class='product'>
        <h4>${product.title}</h4>
        <img src="${product.image}"/>
        <p>${product.price}$</p>
        <p>Rate ${product.rating.rate}</p>
        <a href='./product.html?id=${product.id}'>product</a>
        </div>`
    }).join('');

    document.querySelector(".products .row").innerHTML = result;


    console.log(products);
}

desplyProducts();
