console.log('%c HI', 'color: firebrick')

// CHALLENGE 1

fetch(imgUrl = "https://dog.ceo/api/breeds/image/random/4")
    .then(resp=> resp.json())
    .then(json=> renderImage(json))


function renderImage(json) {
    const container = document.getElementById('dog-image-container');
    const images = json.message;
    for (const image of images) {
        const  img= document.createElement('img');
        img.src = image;
        container.appendChild(img)
    };
};



// CHALLENGE 2
function getBreeds(){
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(resp => resp.json())
.then(json=> {
    const breedList = document.getElementById('dog-breeds')
    const breeds = json.message;

    for (const breed in breeds) {
        const node = document.createElement('li');
        node.innerText = breed;
        breedList.appendChild(node);
    }
     
})};

// CHALLENGE 3 font colour of a particular li changes on click.

function clickedColour(event) {
    event.srcElement.style.color = 'red';
}

// CHALLENGE 4 filter breeds that start with a particular letter using a dropdown.
document.addEventListener('DOMContentLoaded', () => {
 getBreeds();

 document.getElementById('breed-dropdown').addEventListener('change',event => {
    console.log(event.target.value);
    const breedList = document.getElementById('dog-breeds');
    const breeds = [...breedList.children].filter(item => {
        if (event.target.value === item.innerText[0]) {
            return true;
        }
    });
    for(const breed of breedList.children) {
        if (breeds.includes(breed)) {
            breed.style.display = 'list-item';
        } else {
            breed.style.display = 'none';
        }
    }
 })
})