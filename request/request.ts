

export async function getAllCategories() {
    const categoryRes = await fetch('https://fakestoreapi.com/products/categories')



    return categoryRes.json()
    
}


export async function getAllProducts() {
    const productsRes = await fetch('https://fakestoreapi.com/products')
 


    return productsRes.json()
    
}

export async function getSingleProduct(id: string) {
    const singleProductsRes = await fetch(`https://fakestoreapi.com/products/${id}`)
 


    return singleProductsRes.json()
    
}

export async function getProductByCategory(category:string) {
    const productByCateforyRes = await fetch(`https://fakestoreapi.com/products/category/${category}`)
 


    return productByCateforyRes.json()
    
}
