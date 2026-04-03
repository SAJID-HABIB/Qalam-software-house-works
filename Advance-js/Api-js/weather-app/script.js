let input = document.getElementById("input");
let button = document.getElementById("btn");
let result = document.getElementById("result");
let showresult = document.querySelector(".ok");

async function getData() {
  try {
    const res = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=293a78918206d4687958d9ae168a4194&units=metric",
    );
    const data = await res.json();

    console.log(data);
    console.log(data.wind);

    result.addEventListener("click", (e) => {
      e.preventDefault();
      showresult.textContent = data.wind.speed;
    });
  } catch (error) {
    console.log(error);
  }
}

getData();
