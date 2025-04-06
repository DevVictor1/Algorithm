function processAddress(){
    if(address.value='') {
        alert("input cannot be empty")
    } else {
        var letter = (address.value).toLowerCase()
        newAddress.innerHTML = letter
    }
}