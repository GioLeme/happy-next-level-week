const Database= require('./db');
const saveOrphanage = require('./saveOrphanage')
 
// inserir dados na tabela
    Database.then(async(db)=> {
     await saveOrphanage(db,{ 
       
        id:"1",
        lat:"-23.5017406",
        lng:"-46.7107648", 
        name: " Lar dos meninos",
        about:"Presta assistência para crianças de 06 a 15 anos, que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp:"954001878",
        images:[ 
           "https://images.unsplash.com/photo-1598136490937-f77b0ce520fe?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
             "https://images.unsplash.com/photo-1602984689185-17bb08df694d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
            ].toString(), 
        instructions:"Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours:"Horário de visitas Das 08:00 às 18:00",
        open_on_weekends:"1",
        })
     // consultar dados da tabela
   const selectedOrphanages= await db.all("SELECT * FROM orphanages") 
   console.log(selectedOrphanages)

   // consultar somente um orfanato, pelo id
   const orphanage= await db.all("SELECT * FROM orphanages WHERE id = '2' ")
   console.log(orphanage)


   // deletar dado da tabela
  //console.log( await db.run('DELETE FROM orphanages WHERE id="4" '))
  
}) 

