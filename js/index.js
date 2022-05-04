// ITERATION 1
function updateSubtotal(product) {
  const price = (parseInt(product.querySelector('.price span').innerHTML))
  const quantity = parseInt(product.querySelector('input').value)
  let subTotal = price * quantity
  product.querySelector(".subtotal span").innerHTML=subTotal
  console.log(product)
}
 // ITERATION 2  
const [...products] = document.getElementsByClassName("product")
let prices=0
function calculateAll() {   
    products.forEach((element)=>{   
      updateSubtotal(element)
      prices = prices += parseInt(element.querySelector(".subtotal span").innerHTML)
    })
  // ITERATION 3
  document.getElementById("total-value").innerHTML=`Total: $${prices}`
}
// ITERATION 4
products.forEach(removeProduct =element=>{
  element.querySelector(".product .btn").addEventListener("click", ()=>{
  element.remove("tr")     
  prices = prices -= parseInt(element.querySelector(".subtotal span").innerHTML)
  document.getElementById("total-value").innerHTML=`Total: $${prices}`
  }) 
})
// ITERATION 5
document.getElementById("create").addEventListener("click", ()=>{
    let createTr=document.createElement("tr")
    createTr.className="product"    
    let newName=document.getElementById("newname").value
    let newPrice=document.getElementById("newprice").value
  createTr.innerHTML=`  
                        <td class="name"><span>${newName}</span></td>
                        <td class="price">$<span>25.00</span></td>
                        <td class="quantity">
                        <input type="number" value=5 min="0" placeholder="Quantity" />
                        </td>
                         <td class="subtotal">$<span>0</span></td>
                        <td class="action">
                        <button class="btn btn-remove"> Remove</button>
                        </td>
                        <tr>
                        `
  document.querySelector("tbody").appendChild(createTr)
   updateSubtotal(createTr)
})
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll); 
});

