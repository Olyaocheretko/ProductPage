//Tabs==================================================================
const tabs = document.getElementById('tabs')
const tabs_buttons = tabs.querySelectorAll('._tabs-button')
const tabs_blocks = tabs.querySelectorAll('._tabs-block')

for (let index = 0; index < tabs_buttons.length; index++) {
  let tabs_button = tabs_buttons[index]

  tabs_button.onclick = function(event) {
    for (let index = 0; index < tabs_buttons.length; index++) {
      let _tabs_button = tabs_buttons[index]

      _tabs_button.classList.remove('_active')
      tabs_blocks[index].classList.remove('_active')
    }
    this.classList.add('_active')
    tabs_blocks[index].classList.add('_active')
  }
}
//Quantity==============================================================
let quantityButtons = document.querySelectorAll('.quantity__element-button')

for (let index = 0; index < quantityButtons.length; index++) {
  let quantityButton = quantityButtons[index]

  quantityButton.onclick = function(event) {
    let quantityInput = document.getElementById('quantity')
    let value = quantityInput.value
    let infoQuantityElement = document.getElementById('info_quantity')

    quantityButton.classList.contains('quantity__plus') ?  value++ : value--
    value = value < 1 ? 1 : value
    quantityInput.value = value
    infoQuantityElement.textContent = `${value}`

    let priceElement = document.getElementById('price')
    let price = priceElement.textContent || priceElement.innerText
    price = +price
    let totalPrice = price * value

    let totalPriceElement = document.getElementById('totalPrice')
    let infoTotalPriceElement = document.getElementById('info_price')
    totalPriceElement.textContent = `${totalPrice}`
    infoTotalPriceElement.textContent = `${totalPrice}`
  }
}

