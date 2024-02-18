const fs = require('fs')
const path = require("path")




/*
Schema Overview

{
    type : ["vegitable" || "fuites" || "packages"]
    item : "Apple" ,
    varient : "Golden-delicious" ,
    information : "......" ,
    decruption : "........" ,
    image_uri : ".........."
 }

*/
const formate = {
  type: "",
  item: "",
  varient: "",
  information: "",
  discription: "",
  image_uri: ""
}


const JsonPath = 'Data.json';

const Data_Pt = "./DataDb"
const folders = fs.readdirSync(Data_Pt)

folders.forEach((type) => {

  const itemsPt = path.join(Data_Pt, type)
  const items = fs.readdirSync(itemsPt)
  outerLoop:
  items.forEach((item) => {

    const varientpt = path.join(itemsPt, item)
    const varients = fs.readdirSync(varientpt)

    if (path.extname(varients[0]) != '') {

      const discription = path.join(varientpt, `${item}_Description.txt`)
      const information = path.join(varientpt, `${item}_Information.txt`)
      const discriptionData = fs.readFileSync(discription, 'utf-8')
      const informationData = fs.readFileSync(information, 'utf-8')
      const imageUri = path.join(varientpt, `${item}_Iconic.jpg`)

      formate.type = type
      formate.item = item
      formate.varient = item
      formate.discription = discriptionData
      formate.information = informationData
      formate.image_uri = imageUri

      fs.appendFileSync(JsonPath, JSON.stringify(formate, null, 2), (err) => {
        if (err) {
          console.log(err)
        }
        else {
          console.log(done)
        }
      })



    }
    else {
      varients.forEach((varient) => {


        const discription = path.join(varientpt, varient, `${varient}_Description.txt`)
        const information = path.join(varientpt, varient, `${varient}_Information.txt`)

        const discriptionData = fs.readFileSync(discription, 'utf-8')
        const informationData = fs.readFileSync(information, 'utf-8')

        const imageUri = path.join(varientpt, varient, `${varient}_Iconic.jpg`)


        formate.type = type
        formate.item = item
        formate.varient = varient
        formate.discription = discriptionData
        formate.information = informationData
        formate.image_uri = imageUri

        fs.appendFileSync(JsonPath, JSON.stringify(formate, null, 2), (err) => {
          if (err) {
            console.log(err)
          }
          else {
            console.log(done)
          }
        })
      })

    }

  })

})












