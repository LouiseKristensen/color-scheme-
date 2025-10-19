console.log("script loaded")

document.querySelector("#colorscheme").addEventListener("submit", function(e){
    e.preventDefault(); 

    let color = document.querySelector("#favcolor").value.substring(1); 
    let mode = document.querySelector("#colorcombos").value; 

    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API data:", data);
            console.log("colors length:", data.colors && data.colors.length);

        const colorContainer = document.querySelector("#colors");

        const fragment = document.createDocumentFragment();

        data.colors.forEach(colorobj =>{
            
            const item = document.createElement("div");
            item.classList.add("swatch");

            const colorBox = document.createElement("div");
            colorBox.classList.add("swatch-color");
            colorBox.style.setProperty("--bg", colorobj.hex.value);

            const p = document.createElement("p");
            p.classList.add("swatch-hex");
            p.textContent = colorobj.hex.value;

            item.append(colorBox, p);
            fragment.append(item);
        })

    colorContainer.append(fragment)

    }) 
    .catch(err => console.error("error:", err));
}); 
