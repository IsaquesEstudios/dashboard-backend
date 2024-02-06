import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/Firebase";

type CreateNewTaskServicesType = {
  titulo: string;
  description: string;
  client: {
    name: string;
    email: string;
    number: string;
  };
  finishes: string;
  employee: string[];
  updated_at?: string;
  created_at?: string;
};

class CreateNewTaskServices {
  async handle({
    titulo,
    description,
    client,
    finishes,
    employee,
    updated_at,
    created_at,
  }: CreateNewTaskServicesType) {
    const CreateTasks = await addDoc(collection(db, "Tasks"), {
      titulo: titulo,
      status: "pending",
      description: description,
      client: client,
      finishes: finishes,
      employee: employee,
      updated_at: new Date().toLocaleDateString(),
      created_at: new Date().toLocaleDateString(),
    });

    return CreateTasks;
  }
}

export { CreateNewTaskServices };
