window.onload = function(){
    const keyApi = "99f2fc5f49a95078a42e34ec23447289"



    const searchButton = document.querySelector(".search-button")
    searchButton.addEventListener("click", clickButton);


    function dataOnScreen(dados){
        document.querySelector(".temp-sp").innerHTML = "Tempo em " + dados.name
        document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "C"
        document.querySelector(".Nublado").innerHTML = dados.weather[0].description
        document.querySelector(".Umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
        document.querySelector(".cloud").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
  
    }


    async function searchCity(cidade){
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyApi}&lang=pt_br&units=metric`).then( resposta => resposta.json())
        dataOnScreen(dados)
    }


    function clickButton(){
        const inputCity = document.querySelector(".input-city").value;
        searchCity(inputCity); 
    }
}