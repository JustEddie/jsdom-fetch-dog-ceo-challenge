console.log("%c HI", "color: firebrick");

fetch((imgUrl = "https://dog.ceo/api/breeds/image/random/4"))
  .then((resp) => resp.json())
  .then((json) => renderImage(json));

function renderImage(json) {
  const container = document.getElementById("dog-image-container");
  const images = json.message;
  for (const image of images) {
    const img = document.createElement("img");
    img.src = image;
    container.appendChild(img);
  }
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";
fetch(breedUrl)
  .then((resp) => resp.json())
  .then((json) => {
    const breedList = document.getElementById("dog-breeds");
    const breeds = json.message;
    const breedDropdown = document.getElementById("breed-dropdown");
    
    for (const breed in breeds) {
      const node = document.createElement("li");

      breedDropdown.addEventListener('change',(event)=>{


        if (breed.charAt(0) === event.target.value) {
            node.innerText = breed;
            breedList.appendChild(node);
          }
        
      })
  }});

  

// function chooseStartCharater() {
//     const breedDropdown = document.getElementById('breed-dropdown');
//     function isStartCharacterSame(){
//         if(node.innerText[0]===breedDropdown.value);
//         breedList.appendChild(node);
//     }
//     breedDropdown.onchange = isStartCharacterSame;
// }
//on change..... that value...first character...
