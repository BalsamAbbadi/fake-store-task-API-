const getCategories = async() =>{
    const {data} = await axios.get("https://fakestoreapi.com/products/categories");
    return data;

}

const desplayCatigories = async() =>{
    const categories = await getCategories();
   
    const result = categories.map( (category)=>{
        return`
        <div class='category'>
        <h2>${category}</h2>
        <a href="./details.html?category=${category}"> details </a>
        </div>
        `
    }).join('');
     console.log(categories);
    document.querySelector(".catigories .row").innerHTML = result;

}

desplayCatigories();


