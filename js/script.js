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
const quantityButtons = document.querySelectorAll('.quantity__element-button')

for (let index = 0; index < quantityButtons.length; index++) {
  let quantityButton = quantityButtons[index]

  quantityButton.onclick = function(event) {
    const quantityInput = document.getElementById('quantity')
    let value = quantityInput.value
    const infoQuantityElement = document.getElementById('info_quantity')
    quantityButton.classList.contains('quantity__plus') ?  value++ : value--
    value = value < 1 ? 1 : value
    quantityInput.value = value
    infoQuantityElement.textContent = `${value}`

    const priceElement = document.getElementById('price')
    let price = priceElement.textContent || priceElement.innerText
    price = +price
    let totalPrice = price * value
    const totalPriceElement = document.getElementById('totalPrice')
    const infoTotalPriceElement = document.getElementById('info_price')
    totalPriceElement.textContent = `${totalPrice}`
    infoTotalPriceElement.textContent = `${totalPrice}`
  }
}
//Contact info==========================================================
const contactsButtons = document.querySelectorAll('.form__input')

for (let index = 0; index < contactsButtons.length; index++) {
  let contactsButton = contactsButtons[index]

  contactsButton.oninput = function(event) {
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

