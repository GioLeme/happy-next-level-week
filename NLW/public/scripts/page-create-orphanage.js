const map = L.map('mapid').setView([-23.5017406,-46.7007648], 15);
   
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

    const icon=L.icon({
        iconUrl:"/images/map-marker.svg",
        iconSize:[58,68],
        iconAnchor:[29,68],
        popupAnchor: [170,2]
   })

   let marker;

   //create and marker
   map.on('click',(event)=>{
    const lat=event.latlng.lat;
    const lng=event.latlng.lng;

    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;

    // remove icon layer
    marker && map.removeLayer(marker)


    //add icon layer
    marker=L.marker([lat,lng],{icon})
    .addTo(map)
   })

   // adicionar o campo de fotos
   function addPhotoField(){
       // pegar o container de fotod #Images
       const container=document.querySelector('#images')

       // pegar o container para duplicar .new-image
       const newsImage=document.querySelectorAll('.new-upload')

       // realizar o clone da ultima imagem adicionada
       const cloneLastImage= newsImage[newsImage.length - 1].cloneNode(true)

       // verificar se o campo do está vazio. Se sim não add ao container 
       const input=cloneLastImage.children[0]
       if(input.value == ''){
           return
       }
       // limpar campo antes da adicionar a imagem ao container
       input.value=''
       // adicionar o clone ao container de #imagem
       container.appendChild(cloneLastImage)
   }
// deletar campo
   function deleteField(event){
       const span= event.currentTarget

       const newsImage=document.querySelectorAll('.new-upload')

       if (newsImage.length < 2){
           //limpar o valor docampo
           span.parentNode.children[0].value=''
           return
       }
       // deletar campo
       span.parentNode.remove();
   }     

   // troca do sim e do não
   function toggleSelect(event){
       // retirar a class . active dos botões
       document.querySelectorAll('.button-select button')
       .forEach((button)=>{
           button.classList.remove('active')    
       })
       // colocar a clas s . active no botão clicado
       const button= event.currentTarget
       button.classList.add('active')
       // pegar o boltão clicado

       
       // atualizar meu input hidde com o valor selecionado
       const input= document.querySelector('[name="open_on_weekends"]')
       input.value= button.dataset.value
       // verificar se sim ou não
   }
   //function validate(event){
   //    const needsLatAndLng= true;
   //    //validar se lat e lng estão preencidos 
   //    if(needsLatAndLng.value == undefined)
   //    event.preventDefault()
   //    alert('Selecione um ponto no mapa ')
   // inserir o on subimit no js <main class="animate-appear with-sidebar">
   //     <form action="save-orphanage" method="post" onsubmit="validade(event)"></form>
 //  }


     
       

  