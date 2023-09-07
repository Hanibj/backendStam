// const express = require("express");
// const clientServ=require("../Services/ClientService");


const reservationService= require('../Services/ReservationService')
// // const etatRemplissageServices =require('../Services/EtatRemplissageService')
// // const etatMaterielService =require('../Services/EtatMaterielServices')
// // const suivieService =require('../Services/SuivieServices')
// const ClientRouter =express.Router()


// //Admin
// ClientRouter.post("/Signin",clientServ.SigninClient)
// ClientRouter.post("/Signup",clientServ.SignupClient)
// ClientRouter.get("/Profile",clientServ.GetProfile)
// ClientRouter.patch("/ModifierProfile",clientServ.updateClientProfile)
// ClientRouter.patch("/ModifierMotsDePasse",clientServ.ResetPassword)


// // //suivie
// // ClientRouter.get("/Suivie/:nom",suivieService.GetSuivieClient)
const express = require("express");
const clientServ = require("../Services/ClientService");

const ClientRouter = express.Router();

// Routes

ClientRouter.get("/Profile/:email", clientServ.GetProfile);
ClientRouter.patch("/ModifierProfile", clientServ.updateClientProfile);





// // //Reservation
ClientRouter.get("/Reservation",reservationService.GetReservation)
ClientRouter.patch("/ModifierReservation/:id",reservationService.ModifierReservation)
ClientRouter.post("/ReservationRoro",reservationService.AjouterReservationRoro)
ClientRouter.delete("/SupprimerReservation/:id",reservationService.SupprimerReservation)
ClientRouter.get("/Reservation/:id", reservationService.GetSingleResrvation);
ClientRouter.patch("/ModifierRoro", reservationService.ModifierRoro);
ClientRouter.get("/SuivieReservation/:client", reservationService.GetResrvationByClient);
//ClientRouter.delete("/GetListReservation/:client",reservationService.SupprimerReservation)
ClientRouter.delete("/SupprimerReservationClient/:id",reservationService.SupprimerReservationClient)
module.exports = ClientRouter;
