import { Router } from "express";
import './config/Firebase'

import { SendFormCampanhaController } from "./Controller/Forms/SendFormCampanhaController";
import { SendFormSimCompanyController } from "./Controller/Forms/SendFormSimCompanyController";
import { SendFormSimCompanySocietyController } from "./Controller/Forms/SendFormSimCompanySocietyController";
import { CreateNewPlanController } from "./Controller/Plans/CreateNewPlanController";
import { ShowAllPlansController } from "./Controller/Plans/ShowAllPlansController";
import { ShowPlanController } from "./Controller/Plans/ShowPlanController";
import { ShowUserController } from "./Controller/Authenticate/ShowUserController";
import { CreateNewPaymentController } from "./Controller/payment/CreateNewPaymentController";
import { ShowAllPaymentController } from "./Controller/payment/ShowAllPaymentController";
import { ShowPaymentServices } from "./Services/payment/ShowPaymentServices";
import { ShowPaymentController } from "./Controller/payment/ShowPaymentController";

import { CreateNewClientServi } from "./Services/Clients/CreateNewClientServices";
import { CreateNewClientController } from "./Controller/Clients/CreateNewClientController";
import { ShowAllClientsController } from "./Controller/Clients/ShowAllClientController";
import { CreateNewTaskController } from "./Controller/tasks/CreateNewTaskController";
import { ShowAllTasksController } from "./Controller/tasks/ShowAllTasksController";

//authenticated
const ShowUser = new ShowUserController();

//paymount
const NewPaymount = new CreateNewPaymentController();
const AllPayment = new ShowAllPaymentController();
const Payment = new ShowPaymentController();

// Handle plan
const NewPlan = new CreateNewPlanController();
const AllPlan = new ShowAllPlansController();
const Plan = new ShowPlanController();

// Handle Send Form
const SendFormCampanha = new SendFormCampanhaController();
const SendFormSimCompany = new SendFormSimCompanyController();
const SendFormSimCompanySociety = new SendFormSimCompanySocietyController();

//handle Create Client
const CreateNewClient = new CreateNewClientController()
const ShowAllClients = new ShowAllClientsController()

//handle create task
const CreateTasks = new CreateNewTaskController()
const AllTasks = new ShowAllTasksController()

const router = Router();

// Authenticate
router.get("/auth/show", ShowUser.execute);

// New Payment
router.post("/payment/create", NewPaymount.execute);
router.get("/payment/show/all", AllPayment.execute);
router.get("/payment/show/:id", Payment.execute);

// Handle plan
router.post("/payment/plan", NewPlan.execute);
router.get("/payment/plan/all", AllPlan.execute);
router.get("/payment/plan/:id", Plan.execute);

// Handle send form
router.post("/form/sim-company-parceria", SendFormSimCompanySociety.execute);
router.post("/form/sim-company", SendFormSimCompany.execute);
router.post("/form/send-form-campanha", SendFormCampanha.execute);

//handle create client
router.post("/client/create", CreateNewClient.execute)
router.get("/client/show/all", ShowAllClients.execute)

// handle create new task
router.post("/task/create", CreateTasks.execute)
router.get("/task/show/all", AllTasks.execute)

export { router };
