console.log('%c HI', 'color: firebrick')


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



const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
.then(resp => resp.json())
.then(json=> {
    const breedList = document.getElementById('dog-breeds')
    const breeds = json.message;
    const breedDropdown = document.querySelector('#breed-dropdown');


    for (const breed in breeds) {
        const node = document.createElement('li');

        node.innerText = breed;
        if(node.innerText[0]===breedDropdown.value){
            breedList.appendChild(node);
        }
        
        
    };
    
});

//on change..... 



