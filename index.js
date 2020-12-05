const express = require('express')
const app = new express()
const port = 8000


// l'url dovrebbe essere strutturato così:
// http://localhost:8000/ossequi?nome=Ciccio&cognome=Pasticcio&abitante=Placido
app.get("/ossequi", (req, res) => {
  console.log(req.headers)
  const saluti = "Ciao " + req.query.nome + " " + req.query.cognome
  let preferito = ", da quello che ho sentito il tuo abitante preferito è " + req.query.abitante + "... <br/>"

  if (req.query.abitante === "Salomone" || req.query.abitante === "Ketchup" || req.query.abitante === "Coco") {
  	preferito += "OOOOOTTIMA SCELTAA!"
  } else {
  	preferito += "Non mentirò, sono un po' deluso dai tuoi gusti"
  }

  res.send(saluti + preferito)
})


// l'url dovrebbe essere strutturato così:
// http://localhost:8000/osebasta
app.get("/osebasta", (req, res) => {
  const os = req.get("user-agent").substr(13,1)
  sistema = "Secondo le ricerche condotte nel nostro Quartier Generale lei come sistema operativo sta usando "
 
  if (os === "W") {
  	sistema += "Windows. <br/> Non è molto, ma è un lavoro onesto"
  } else if (os = "M") {
  	sistema += "Mac OS. <br/> La smetta di flexare, la prego"
  } else if (os = "L") {
  	sistema += "Linux. <br/> Inaccettabile... Stiamo mandando i suoi dati alla polizia locale per prelevarla immediatamente dalla sua abitazione"
  } else {
  	sistema += "sconosciuto. <br/> Probabilmente sta usando un cellulare portatile... Le sembra il caso cercare questo sito sul  telefono?"
  }

  res.send(sistema)
})


app.listen(port, () =>  console.log("Il server è attivo sulla porta " + port + ", glhf!"))