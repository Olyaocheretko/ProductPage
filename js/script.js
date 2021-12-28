const tabs = document.getElementById('tabs')
const tabs_buttons = tabs.getElementsByClassName('_tabs-button')
const tabs_blocks = tabs.getElementsByClassName('_tabs-block')
const quantityChangingElements = document.getElementsByClassName('quantity__element-button')
const contactsInputs = document.getElementsByClassName('form__input')

for (let index = 0; index < tabs_buttons.length; index++) {
  tabs_buttons[index].onclick = function(event) {
    makeTabActive(index)
  }
}

for (let index = 0; index < quantityChangingElements.length; index++) {
  quantityChangingElements[index].onclick = function(event) {
    changeQuantity(this)
  }
}

for (let index = 0; index < contactsInputs.length; index++) {
  contactsInputs[index].onchange = function(event) {
    let infoFieldId = this.id.replace('form', 'info')
    document.getElementById(infoFieldId).textContent = this.value
  }
}

function makeTabActive(tabIndex) {
  for (let index = 0; index < tabs_buttons.length; index++) {
    tabs_buttons[index].classList.remove('_active')
    tabs_blocks[index].classList.remove('_active')
  }
  tabs_buttons[tabIndex].classList.add('_active')
  tabs_blocks[tabIndex].classList.add('_active')
}

function changeQuantity(element) {
  const quantityElement = document.getElementById('quantity')
  let quantity = quantityElement.value
  const quantity_output = document.getElementById('quantity_output')

  element.classList.contains('quantity__plus') ?  quantity++ : quantity--
  quantity = quantity <= 0 ? 0 : quantity
  quantityElement.value = quantity
  quantity_output.textContent = `${quantity}`

  const priceBase = document.getElementById('price_base')
  const totalPrice_output1 = document.getElementById('totalPrice_output1')
  const totalPrice_output2 = document.getElementById('totalPrice_output2')

  let price = +priceBase.textContent || +priceBase.innerText
  let totalPrice = price * quantity
  totalPrice_output1.textContent = `${totalPrice}`
  totalPrice_output2.textContent = `${totalPrice}`
}
