// ITERATION 1
function updateSubtotal(product) {     
   let price = parseInt(product.querySelector(".price span").innerHTML)
   let quantity = parseInt(product.querySelector(".quantity input").value)  
   let subTotal = price * quantity  
    product.querySelector(".subtotal span").innerHTML=subTotal    
   return subTotal
}

// ITERATION 2
function calculateAll() {  
  let subTotal = updateSubtotal(document.querySelector(".product"))
  let [...sub] =document.getElementsByClassName("product")
  let price=0
  sub.forEach(element => {
      updateSubtotal(element)      
      price += parseInt(element.querySelector(".subtotal span").innerHTML)
  });

  // ITERATION 3
  document.getElementById("total-value").innerHTML=`Total $${price}`
}

// ITERATION 4
 let btnRemove=[]
  function removeProduct(event) {    
  let remove=event.currentTarget.parentNode.parentNode.parentNode
  remove.removeChild(document.querySelector(".product")) 
}

// ITERATION 5
function createProduct() {
 let createNewElement=document.createElement("tr")
 createNewElement.classList.add("product")
 let newName=document.getElementById("newname").value
 let newPrice=document.getElementById("newprice").value
 document.querySelector("tbody").appendChild(createNewElement) 
 createNewElement.innerHTML=
 `<tr class="product">
          <td class="name">
            <span id="name">${newName}</span>
          </td>
          <td class="price">$<span>${newPrice}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove"> Remove</button>
          </td>
        </tr>`  
 document.getElementById("newname").value=""
 document.getElementById("newprice").value=0
 createNewElement.querySelector(".btn").addEventListener("click",removeProduct) 
}

//listeners
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  document.getElementById("create").addEventListener("click",createProduct)  
  let btnRemove=document.querySelector(".btn")
  btnRemove.addEventListener("click", removeProduct)
});