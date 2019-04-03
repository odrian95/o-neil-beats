console.log('It Works')

$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('Clicked button')

    var name = $('.name').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Valid email</div>')  
    } else {
      event.preventDefault()

      statusElm.append('<div>Invalid email</div>')
    }

    if(name.length >= 2) {
      statusElm.append('<div>Valid name</div>')  
    } else {
      event.preventDefault()

      statusElm.append('<div>Invalid name</div>')
    }

    if(message.length >= 10) {
      statusElm.append('<div>Valid subject!</div>')  
    } else {
      event.preventDefault()

      statusElm.append('<div>Subject must have at least 10 characters inside</div>')
    }
  })
})