import hitSafe1 from "../../public/products-image/hit safe/HIT SAFE - LUMION - 8K TRANSPARENTE.webp"
import hitSafe2 from "../../public/products-image/hit safe/HIT SAFE 0.375mts - LUMION - 8K TRANSPARENTE.webp"
import hitSafe3 from "../../public/products-image/hit safe/HIT SAFE 0.6mts - LUMION - 8K TRANSPARENTE.webp"
import hitSafe4 from "../../public/products-image/hit safe/HIT SAFE 0.9mts - LUMION - 8K TRANSPARENTE.webp"

import baston1 from "../../public/products-image/p&p/P&P - LUMION - 8K TRANSPARENTE.webp"
import baston2 from "../../public/products-image/p&p/P&P 0,50mts - LUMION - 8K TRANSPARENTE.webp"
import baston3 from "../../public/products-image/p&p/P&P 1,20mts - LUMION - 8K TRANSPARENTE.webp"
import baston4 from "../../public/products-image/p&p/P&P 1,50mts - LUMION - 8K TRANSPARENTE.webp"

import truckLock1 from "../../public/products-image/truck_lock/TRUCK LOCK - LUMION - 8K TRANSPARENTE.webp"
import truckLock2 from "../../public/products-image/truck_lock/truckLock_detail1.webp"
import truckLock3 from "../../public/products-image/truck_lock/truckLock_detail2.webp"
import truckLock4 from "../../public/products-image/truck_lock/truckLocl_detail3.webp"

import rollCan1 from "../../public/products-image/roll_can/rollCan.webp"

import iromGrip1 from "../../public/products-image/iron_grip/tubeHandler.webp"


const ficha_baston="/fichas_tecnicas/BASTON_P&P.pdf"
const ficha_truckLock="/fichas_tecnicas/TRUCK_LOCK.pdf"
const ficha_hitSafe="/fichas_tecnicas/HIT-SAFE.pdf"
const ficha_ironGrip="/fichas_tecnicas/IRON-GRIP.pdf"
const ficha_irolCan="/fichas_tecnicas/ROLL-CAN-INTERIOR.pdf"


export const productsInfo = [
    {
      id: 1,
      name: "Bastón P&P",
      category:"Bastón Balizador",
      description2:"El Bastón P&P fue creado para la protección de manos que es utilizada para mover carga; evitando aplastamiento, cortes y atrapamiento en manos o personas.",
      image: baston4,
      pdf:ficha_baston,
      videoId:"Mgfq70oaW4w",
      gallery:[{path:baston1,title:"Bastón"},{path:baston2,title:"Bastón"},{path:baston3,title:"Bastón"},{path:baston4,title:"Bastón"}],
      description: "Creada para mover cargas, evitando golpes.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ],
      
    },
    {
      id: 2,
      name: "Hit Safe",
      category:"Martillo Smart",
      description2:"El bastón Hit Safe fue creado para evitar que los operadores expongan sus manos al riesgo de impacto. Con él, la mano del operador quedará fuera del contacto con el dispositivo que será impactado.",
      image: hitSafe3,
      pdf:ficha_hitSafe,
      videoId:"1ZHVrYpzhLg",
      gallery:[{path:hitSafe1,title:"Hit Safe"},{path:hitSafe2,title:"Hit Safe"},{path:hitSafe3,title:"Hit Safe"},{path:hitSafe4,title:"Hit Safe"}],
      description: "Creada para evitar el impacto en las manos.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
    {
      id: 3,
      name: "Truck Lock",
      category:"Calzas Ergonómicas",
      image: truckLock1,
      pdf:ficha_truckLock,
      videoId:"InvG2owGUsU",
      gallery:[{path:truckLock1,title:"Truck Lock"},{path:truckLock2,title:"Truck Lock"},{path:truckLock3,title:"Truck Lock"},{path:truckLock4,title:"Truck Lock"}],
      description: "Diseñada para inmovilizar vehículos",
      description2:"El uso de la calza ergonómica es una excelente herramienta para inmovilizar y priorizar la seguridad de los profesionales que realizan su posicionamiento en los vehículos.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
    {
      id: 4,
      name: "Iron Grip",
      category:"Equipamientos ergonómicos",
      description2:"La pinza Iron grip es una herramienta de protección de manos que fue diseñada para manipular tubos.",
      image: iromGrip1,
      pdf:ficha_ironGrip,
      videoId:"",
      gallery:[{path:iromGrip1,title:"Iron Grip"}],
      description: "Diseñada para la manipulación de tubos.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
    {
      id: 5,
      name: "Roll Can Interior", 
      category:"Equipamientos ergonómicos",
      description2:"Es una herramienta diseñada con agarre interno para trasladar los tubos casimg en la cama, haciéndolos girar para evitar el aplastamiento en las manos de los operarios.",
      image: rollCan1,
      pdf:ficha_irolCan,
      videoId:"",
      gallery:[{path:rollCan1,title:"Roll Can Interior"}],
      description: "Diseñada para girar y trasladar tubos casing",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },

    {
      id: 6,
      name: "Hit Safe",
      category:"Martillo Smart",
      description2:"El bastón Hit Safe fue creado para evitar que los operadores expongan sus manos al riesgo de impacto. Con él, la mano del operador quedará fuera del contacto con el dispositivo que será impactado.",
      image: hitSafe3,
      pdf:ficha_hitSafe,
      videoId:"1ZHVrYpzhLg",
      gallery:[{path:hitSafe1,title:"Hit Safe"},{path:hitSafe2,title:"Hit Safe"},{path:hitSafe3,title:"Hit Safe"},{path:hitSafe4,title:"Hit Safe"}],
      description: "Creada para evitar el impacto en las manos.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
    {
      id: 7,
      name: "Truck Lock",
      category:"Calzas Ergonómicas",
      image: truckLock1,
      pdf:ficha_truckLock,
      videoId:"1ZHVrYpzhLg",
      gallery:[{path:truckLock1,title:"Truck Lock"},{path:truckLock2,title:"Truck Lock"},{path:truckLock3,title:"Truck Lock"},{path:truckLock4,title:"Truck Lock"}],
      description: "Diseñada para inmovilizar vehículos",
      description2:"El uso de la calza ergonómica es una excelente herramienta para inmovilizar y priorizar la seguridad de los profesionales que realizan su posicionamiento en los vehículos.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
    {
      id: 8,
      name: "Iron Grip",
      category:"Equipamientos ergonómicos",
      description2:"La pinza Iron grip es una herramienta de protección de manos que fue diseñada para manipular tubos.",
      image: iromGrip1,
      pdf:ficha_ironGrip,
      videoId:"",
      gallery:[{path:iromGrip1,title:"Iron Grip"}],
      description: "Diseñada para la manipulación de tubos.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
    {
      id: 9,
      name: "Bastón P&P",
       category:"Bastón Balizador",
      description2:"El Bastón P&P fue creado para la protección de manos que es utilizada para mover carga; evitando aplastamiento, cortes y atrapamiento en manos o personas.",
      image: baston4,
      pdf:ficha_baston,
      videoId:"1ZHVrYpzhLg",
      gallery:[{path:baston1,title:"Bastón"},{path:baston2,title:"Bastón"},{path:baston3,title:"Bastón"},{path:baston4,title:"Bastón"}],
      description: "Creada para mover cargas, evitando golpes.",
      descriptionItems:[
        "Tubo de polímero especialmente diseñado para soportar golpes",
        "Cinta de sujeción tejida con compuestos para soportar golpes y fricciones.",
        "Manopla ergonómica para tener un mejor agarre y absorber el golpe.",
        "Cuerda elástica confeccionada con la finalidad de soportar la fricción."
      ]
    },
   
  ];


  