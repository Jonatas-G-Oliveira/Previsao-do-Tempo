const apiKey = "db1297e68b191f9a92e03db53a023a0c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const nomeCidade = window.document.querySelector(".search input");
const searchBtn = window.document.querySelector(".search button");
const imgClima = window.document.querySelector(".img_clima");
const divClima = document.querySelector(".clima");

searchBtn.addEventListener('click',() =>{
   conexaoApi(nomeCidade.value); 
});

async function conexaoApi(cidade) {
    const resposta = await fetch(apiUrl + `&q=${cidade}` +`&appid=${apiKey}`);

    if(resposta.status == 404 || resposta.status == 400){
        const erro = document.querySelector(".erro").style.display = "block";
        divClima.style.display = 'none';
    }else{
        
        const data = await resposta.json();
       
        //Trocando o nome da cidade
        document.querySelector(".cidade").innerHTML = data.name;
        document.querySelector(".temperatura").innerHTML = `${Math.round(data.main.temp)} °c`;
        document.querySelector(".humidade").innerHTML = ` ${data.main.humidity} %`;
        document.querySelector(".vento").innerHTML = `${data.wind.speed} Km/h`
        
        //Clear,Clouds,drizzle,mist,rain,snow
        if(data.weather[0].main == "Clouds"){
            imgClima.src = "";
        }else if(data.weather[0].main == "Clear"){
            imgClima.src = "";
        }else if(data.weather[0].main == "Drizzle"){
            imgClima.src = "";
        }else if(data.weather[0].main == "Mist"){
            imgClima.src = "";
        }else if(data.weather[0].main == "Rain"){
            imgClima.src = " ";
        }else{
            imgClima.src = " ";
        }


        divClima.style.display = 'block';
        const erro = document.querySelector(".erro").style.display = "none";
    }
};

