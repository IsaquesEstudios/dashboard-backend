import { Router } from "express";

import { SendFormCampanhaController } from "./Controller/Forms/SendFormCampanhaController";
import { SendFormSimCompanyController } from "./Controller/Forms/SendFormSimCompanyController";
import { SendFormSimCompanySocietyController } from "./Controller/Forms/SendFormSimCompanySocietyController";
import { CreateNewPlanController } from "./Controller/Plans/CreateNewPlanController";
import { ShowAllPlansController } from "./Controller/Plans/ShowAllPlansController";

// Handle plan
const NewPlan = new CreateNewPlanController()
const AllPlan = new ShowAllPlansController()

// Handle Send Form
const SendFormCampanha = new SendFormCampanhaController();
const SendFormSimCompany = new SendFormSimCompanyController()
const SendFormSimCompanySociety = new SendFormSimCompanySocietyController()

const router = Router();

// Handle plan
router.post("/paymount/plan", NewPlan.execute)
router.get("/paymount/plan/all", AllPlan.execute)


// Handle send form
router.post("/form/sim-company-parceria", SendFormSimCompanySociety.execute);
router.post("/form/sim-company", SendFormSimCompany.execute);
router.post("/form/send-form-campanha", SendFormCampanha.execute);

export { router };
