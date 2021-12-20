//Tabs==================================================================
const tabs = document.getElementById('tabs')
const tabs_buttons = tabs.getElementsByClassName('_tabs-button')
const tabs_blocks = tabs.getElementsByClassName('_tabs-block')

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
const quantityChangingElements = document.getElementsByClassName('quantity__element-button')

for (let index = 0; index < quantityChangingElements.length; index++) {
  let quantityChangingElement = quantityChangingElements[index]

  quantityChangingElement.onclick = function(event) {
    const quantityElement = document.getElementById('quantity')
    let quantity = quantityElement.value

    quantityChangingElement.classList.contains('quantity__plus') ?  quantity++ : quantity--
    quantity = quantity <= 0 ? 0 : quantity
    quantityElement.value = quantity

    const quantity_output = document.getElementById('quantity_output')
    quantity_output.textContent = `${quantity}`
//price
    const priceBase = document.getElementById('price_base')
    let price = +priceBase.textContent || +priceBase.innerText
    let totalPrice = price * quantity

    const totalPrice_output1 = document.getElementById('totalPrice_output1')
    const totalPrice_output2 = document.getElementById('totalPrice_output2')
    totalPrice_output1.textContent = `${totalPrice}`
    totalPrice_output2.textContent = `${totalPrice}`
  }
}
//Contact info==========================================================
const contactsInputs = document.getElementsByClassName('form__input')

for (let index = 0; index < contactsInputs.length; index++) {
  let contactsInput = contactsInputs[index]

  contactsInput.oninput = function(event) {
    let nameValue = document.getElementById('forUserName').value
    let surnameValue = document.getElementById('forUserSurname').value
    let emailValue = document.getElementById('forUserEmail').value
    let phoneValue = document.getElementById('forUserPhone').value
    let addressValue = document.getElementById('forUserAddress').value

    const infoNameInput = document.getElementById('info_name')
    const infoSurnameInput = document.getElementById('info_surname')
    const infoEmailInput = document.getElementById('info_email')
    const infoPhoneInput = document.getElementById('info_phone')
    const infoAddressInput = document.getElementById('info_address')

    infoNameInput.textContent = `${nameValue}`
    infoSurnameInput.textContent = `${surnameValue}`
    infoEmailInput.textContent = `${emailValue}`
    infoPhoneInput.textContent = `${phoneValue}`
    infoAddressInput.textContent = `${addressValue}`
  }
}

