let product=["mercedes", "audi", "ford"," lamborghini"]

const showProduct=()=>{
    if(product == ""){
        console.log(" khong co san pham de hien thi");
    }else{
        console.log(product); 
    }
}
showProduct()

// const addProduct =()=>{
//     let newProduct = prompt("New Product: ")
//     if(newProduct.length <5){
//         newProduct=prompt("Mời nhập lại: ")
//         product.push(newProduct)
//     }else{
//         product.push(newProduct)
//     }
//     console.log(product); 
// }
// addProduct();


// const removeProduct=(index)=>{
//     let remove=prompt("nhập phần tử cần xóa:")
//     let  newremove=product.indexOf(remove)
//     if(newremove!= -1){
//          index.splice(newremove,1)
//          console.log("Đã xóa phần tử:" +remove);
//         console.log(index);
//     }else{
//         console.log("không tìm thấy phần tử cần xóa");
//     }
   
// }
// removeProduct(product)




// const updateProduct =()=>{
//     let update =prompt("nhập sản phầm cần cập nhập")
//     let index=product.indexOf(update)
//     if(index!= -1){
//         let newupdate=prompt("cập nhập: ")
//         product[index]=newupdate
//         console.log("cập nhập thành công sản phẩm:"+update);
//         console.log(product);
//     }else{
//         console.log("không tìm thấy sản phẩm cần cập nhập");
//     }
// }
// updateProduct()

// const removeAllProduct=()=>{
//     product.length=0
//     console.log(product);
// }
// removeAllProduct()




