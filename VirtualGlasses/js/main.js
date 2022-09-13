let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

let renderGlasses = (Glasses) => {
    let html = '';
    for (let i = 0; i < Glasses.length; i++) {
        let glass = Glasses[i];
        html += `
        <div class="glasses">
        <div class="item">
        <a href="./index.html?productid=${glass.id}">
            <img src="${glass.src}" alt="product"/>
            </a>
        </div>
        </div>
        `
    }
    document.querySelector('#vglassesList').innerHTML = html;
}


let renderGlassesInfo = (GlassesInfo) => {
    let virtual = '';
    let html = '';
    const urlParams = new URLSearchParams(window.location.search);
    const glassID = urlParams.get('productid');
    for (let i = 0; i < GlassesInfo.length; i++) {
        let glass = GlassesInfo[i];
        if (glass.id == glassID) {
            html += `
            <div class="name-brand-color">
            <h1>${glass.name} - </h1>
            <h1> - ${glass.brand}</h1>
            <p>(${glass.color})</p>
            </div>

            <div class="price">
            <span>${glass.price}$</span>
            <p>Stocking</p>
            </div>

            <div class="desc">
            <p>${glass.description}</p>
            </div>
            
            `

            virtual += `
            <img src="${glass.virtualImg}" />
            `

            console.log(html)
            document.querySelector('#glassesInfo').innerHTML = html;
            document.querySelector('#avatar').innerHTML = virtual;
            document.querySelector('#glassesInfo').style.display = 'block';

        }
    }
}

window.onload = function () {
    renderGlasses(dataGlasses);
    renderGlassesInfo(dataGlasses);
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('productid');
    console.log(myParam);
}