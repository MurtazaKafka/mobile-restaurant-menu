import { menuArray } from "./data.js";
const menuOption = document.getElementById('menu-option')

document.getElementById('pay').addEventListener('click', (e) => {
    e.preventDefault()
    const paymentForm = new FormData(document.getElementById('paymentForm'))
    document.getElementById('payment-form').style.display = 'none'
    const name = paymentForm.get('fullName')
    console.log(name)

    document.getElementById('orderBtn').style.display = 'none'

    document.getElementById('total-amount').innerHTML = `
        <div class="lastText">
            <p>Thanks, ${name}! Your order is on its way!</p>
        </div>
    `

    document.getElementById('ordered-food').textContent = ''
})

document.addEventListener("click", function(e){
    if(e.target.dataset.add){
        plusHandleClick(e.target.dataset.add)
        document.getElementById('orderBtn').style.display = 'inline'
    } else if(e.target.dataset.remove){
        document.getElementById('remove').parentElement.remove(document.getElementById('remove').parentElement.remove)
    } else if (e.target.dataset.btn){
        document.getElementById('payment-form').style.display = 'block'
    }
})

function plusHandleClick(plusInput){

    const orderedFood = document.getElementById('ordered-food')

    if(plusInput === menuArray[0].id.toString()) {

        orderedFood.innerHTML += `
            <div class='counter'>
                <h2 class='food-name'>${menuArray[0].name}</h2>
                <p id='remove' data-remove='remove'>remove</p>
                <h4>${menuArray[0].price}</h4>
            </div>
        `
    } else if (plusInput === menuArray[1].id.toString()) {
        orderedFood.innerHTML += `
            <div class='counter'>
                <h2 class='food-name'>${menuArray[1].name}</h2>
                <p id='remove' data-remove='remove'>remove</p>
                <h4>${menuArray[1].price}</h4>
            </div>
        `
    } else if (plusInput === menuArray[2].id.toString()) {
        orderedFood.innerHTML += `
            <div class='counter'>
                <h2 class='food-name'>${menuArray[2].name}</h2>
                <p id='remove' data-remove='remove'>remove</p>
                <h4>${menuArray[2].price}</h4>
            </div>
        `
    }

    const foodName = document.querySelector('.food-name')

    const totalCost = document.getElementById('total-amount')
    
}
    

function render() {
    for (let order of menuArray) {
        menuOption.innerHTML += `
                    <div class="orders">
                        <p class="orderIcon">${order.emoji}</p>
                        <div class="order-details">
                            <h2 class="order-name">${order.name}</h2>
                            <p class="ingredients">${order.ingredients}</p>
                            <h3 class="price">$${order.price}</h3>
                        </div>
                        <button class="plus-sign" id='plus-sign' data-add='${order.id}'>+</button>
                    </div>
                    
                `
    }

}

render()