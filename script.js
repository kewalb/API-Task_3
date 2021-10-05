getUnits = () => {
    fetch("https://axoltlapi.herokuapp.com")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}


// fetch("https://axoltlapi.herokuapp.com")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))