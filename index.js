fetch('https://backend.ichat.hu/api/countries')
    .then(res =>{
        return res.json();
    })
    .then(data =>{
    data.forEach(countries =>{
        const fovarosok = `<li>${countries.capital }</li>`;

        document.querySelector('ul').insertAdjacentHTML('beforeend', fovarosok);
        document.querySelector('h2').innerHTML = data.length+" db főváros";

        console.log(fovarosok);
        
     })
    })
    .catch(error => console.log(error));