// const express =require("express")
// const adminserv= require('../Services/AdminService')
// const reservationService= require('../Services/ReservationService')
// // const etatRemplissageServices =require('../Services/EtatRemplissageService')
// const etatMaterielService =require('../Services/EtatMaterielServices')
// const suivieService =require('../Services/SuivieServices')
// const agentmarti =require('../Services/AgentMartim')
// const adminRouter = express.Router();


// //Admin

// adminRouter.get("/Profile",adminserv.GetProfile)
// adminRouter.patch("/ModifierProfile",adminserv.updateProfile)



// // //Reservation
//  adminRouter.get("/Reservation",reservationService.GetReservation)
//  adminRouter.get("/Reservation/:id",reservationService.GetSingleResrvation)
//  adminRouter.patch("/AccepterReservation/:id",reservationService.ModifierReservation)
//  adminRouter.post("/AjouterReservation",reservationService.AjouterReservation)
//  adminRouter.patch("/ModifierReservation/:id",reservationService.ModifierReservation)
//  adminRouter.delete("/SuppremierReservation/:id",reservationService.SupprimerReservation)
//  //RORO
//  adminRouter.post("/AjouterRoro",reservationService.AjouterRoro)
// // //Etat Materiel
// adminRouter.get("/Materiel",etatMaterielService.GetEtatMateriel)
// adminRouter.patch("/ModifierMateriel/:id",etatMaterielService.ModifierEtatMateriel)
// adminRouter.post("/AjouterMateriel",etatMaterielService.AjouterEtatMateriel)
// adminRouter.delete("/SupprimerMaterielle/:id",etatMaterielService.SupprimerEtatMateriel)
// adminRouter.get("/SingleMateriel/:id",etatMaterielService.GetSingleEtatMateriel)

// // //Etat Remplissage
// // adminRouter.get("/Remplissage",etatRemplissageServices.GetEtatRemplissage)
// // adminRouter.patch("/ModifierRemplissage",etatRemplissageServices.ModifierEtatRemplissage)
// // adminRouter.post("/AjouterRemplissage",etatRemplissageServices.AjouterEtatRemplissage)
// // adminRouter.delete("/SupprimerRemplissage",etatRemplissageServices.SupprimerEtatRemplissage)

// // //suivie
// adminRouter.get("/GetSuivie/:nom/:numdouanier",suivieService.GetSingleSuivie)
// // adminRouter.patch("/ModifierSuivie",suivieService.ModifierSuivie)
// adminRouter.post("/AjouterSuivie",suivieService.AjouterSuivie)
// // adminRouter.delete("/SupprimerSuivie",suivieService.SupprimerSuivie)

// //Agent
// adminRouter.get("/AgentMartinm",agentmarti.GetAgent)
// adminRouter.patch("/ModifierAgentMartinm/:id",agentmarti.ModifierAgentMartim)
// adminRouter.post("/AjouterAgentMartinm",agentmarti.AjouterAgentMartime)
// adminRouter.delete("/SupprimerAgentMartinm/:id",agentmarti.SupprimerAgentMartim)
// adminRouter.get("/SingleAgentMartinm/:id",agentmarti.GetSingleAgent)

// module.exports=adminRouter
const express = require("express");
const adminserv = require('../Services/AdminService');
const reservationService = require('../Services/ReservationService');
const etatMaterielService = require('../Services/EtatMaterielServices');
const suivieService = require('../Services/SuivieServices');
const agentmarti = require('../Services/AgentMartim');
const ClientService=require('../Services/ClientService')
const adminRouter = express.Router();

// Admin
adminRouter.get("/Profile/:email", adminserv.GetProfile);
adminRouter.patch("/ModifierProfile", adminserv.updateProfile);

// Reservation
adminRouter.get("/Reservation", reservationService.GetReservation);
adminRouter.get("/Reservation/:id", reservationService.GetSingleResrvation);
adminRouter.patch("/ModifierReservation/:id", reservationService.ModifierReservation);
adminRouter.post("/AjouterReservation", reservationService.AjouterReservation);
adminRouter.post("/AjouterRoro", reservationService.AjouterRoro);
adminRouter.patch("/ModifierRoro", reservationService.ModifierRoro);
adminRouter.get("/Roro/:numero/:armateur", reservationService.GetRoro);
adminRouter.delete("/SuppremierReservation/:id", reservationService.SupprimerReservation);
adminRouter.delete("/SuppremierRoro/:num/:armateur", reservationService.SuppremierRoro);
adminRouter.get("/ReservationClient", reservationService.GetReservationClient);
adminRouter.get("/ReservationClient/:id", reservationService.GetSingleResrvationClient);
adminRouter.patch("/ModifierReservationClient/:id", reservationService.ModifierReservationClient);
adminRouter.get("/ReservationDashbord", reservationService.NombreTotaleReservation);
adminRouter.get("/ReservationClientDashbord/:email", reservationService.ReservationParClient);
// Etat Materiel
adminRouter.get("/Materiel", etatMaterielService.GetEtatMateriel);
adminRouter.patch("/ModifierMateriel/:id", etatMaterielService.ModifierEtatMateriel);
adminRouter.post("/AjouterMateriel", etatMaterielService.AjouterEtatMateriel);
adminRouter.delete("/SupprimerMaterielle/:id", etatMaterielService.SupprimerEtatMateriel);
adminRouter.get("/SingleMateriel/:id", etatMaterielService.GetSingleEtatMateriel);
adminRouter.get("/EtatMaterielDashbord", etatMaterielService.EtatDeMaterielleDashbord);

// Suivie
adminRouter.get("/GetSuivie/:nom/:numdouanier", suivieService.GetSingleSuivie);
adminRouter.post("/AjouterSuivie", suivieService.AjouterSuivie);
adminRouter.patch("/ModifierSuivie/:id", suivieService.ModifierSuivie);
adminRouter.delete("/SupprimerSuivie/:id", suivieService.SupprimerSuivie);
adminRouter.delete("/GetSingleSuivie/:id", suivieService.GetSuivie);
// Agent
adminRouter.get("/AgentMartinm", agentmarti.GetAgent);
adminRouter.patch("/ModifierAgentMartinm/:id", agentmarti.ModifierAgentMartim);
adminRouter.post("/AjouterAgentMartinm", agentmarti.AjouterAgentMartime);
adminRouter.delete("/SupprimerAgentMartinm/:id", agentmarti.SupprimerAgentMartim);
adminRouter.get("/SingleAgentMartinm/:id", agentmarti.GetSingleAgent);
//Liste des Client
adminRouter.get("/AllClient", ClientService.AllClient);
module.exports = adminRouter;
