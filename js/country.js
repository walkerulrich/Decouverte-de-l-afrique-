const countryButtonElement = document.querySelector(".button");
countryButtonElement.addEventListener("click", function (amebo) {
  const randomIndex = Math.floor(Math.random() * countryWithImages.length);
  const randomIndex1 = Math.floor(Math.random() * countryWithImages.length);
  const randomIndex2 = Math.floor(Math.random() * countryWithImages.length);
  const randomIndex3 = Math.floor(Math.random() * countryWithImages.length);
  const selectedCountry = countryWithImages[randomIndex];
  window.selectedCountry = selectedCountry;
  const selectedCountry1 = countryWithImages[randomIndex1];
  const selectedCountry2 = countryWithImages[randomIndex2];
  const selectedCountry3 = countryWithImages[randomIndex3];
  const countries = [
    selectedCountry,
    selectedCountry1,
    selectedCountry2,
    selectedCountry3,
  ];
  let options = document.getElementById("options");
  let verified = document.getElementById("answer");
  verified.innerHTML = "";

  options.innerHTML = "";
  for (let i = 0; i < countries.length; ) {
    const countryIndex = Math.floor(Math.random() * countries.length);
    const randomccountry = countries[countryIndex];
    options.innerHTML += ` <div>
    <input id="firstOption${countries.length}" onclick="verifyOption(this)" type="radio" name="country" value="${randomccountry.name}"/>
    <label for="firstOption${countries.length}">${randomccountry.name}</label>
  </div>`;
    countries.splice(countryIndex, 1);
  }

  document
    .querySelector(".img")
    .setAttribute("src", `https:${selectedCountry.file_url}`);

  // const allPElement = document.querySelectorAll("p");
  // allPElement[0].textContent = selectedCountry.name;
  // allPElement[1].textContent = selectedCountry.alpha3;
});

const verifyOption = (element) => {
  let verified = document.getElementById("answer");
  if (element.value === window.selectedCountry.name) {
    verified.innerHTML = "CORRECT";
    verified.style.color = "green";
    alert('bravo vous avez la bonne reponse ')
  } else {
    verified.innerHTML = "WRONG";
    verified.style.color = "red";
    alert('desole mais vous avez ratez ')
  }
};
