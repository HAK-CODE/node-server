const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const locBox = document.querySelector('#location')
const forcastBox = document.querySelector('#forcast')
const addressBox = document.querySelector('#address')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const location = search.value
    console.log("location",location)
    fetch('/weather?address='+location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
            locBox.textContent = data.error
        }
        else{
            console.log(data)
            locBox.textContent = data.location
            forcastBox.textContent = data.forcast
            addressBox.textContent = data.address
        }
    })
})
})