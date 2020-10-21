const options ={
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}
//get values from html
const lat=document.querySelector('span[data-lat]').dataset.lat
const lng=document.querySelector('span[data-lng]').dataset.lng

const map = L.map('mapid',options).setView([lat,lng], 15);
   
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    // create icon
    const icon=L.icon({
        iconUrl:"/images/map-marker.svg",
        iconSize:[58,68],
        iconAnchor:[29,68],
        popupAnchor: [170,2]
   })
   // create and add marker
    
    L
    .marker([lat,lng],{icon})
    .addTo(map)

    function selectImage(event){
        const button = event.currentTarget
        const buttons=document.querySelectorAll(".images button")
       
        //remover classe active
        buttons.forEach((button) =>{
            button.classList.remove("active")
        })

        //selecionar a image clicada
        const image=button.children[0]
        const imageContainer=document.querySelector(".orphanage-details > img")

        //atualizar o container da image
        imageContainer.src =image.src


        // adcionar classe active
        button.classList.add('active')
         
    }
    
    
     
        
   
        