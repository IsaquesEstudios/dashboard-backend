import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../config/Firebase";

interface CreateNewClientOptionInterface {
  name: string;
  email: string;
  company: string;
  receive: [
    service: {
      name: string;
      value: number;
      frequency: string;
      status: string;
      paid: boolean;
      date: Date;
    }
  ];
  maintenance: [
    item: {
      name: string;
      value: number;
      date: Date;
    }
  ];
}

class CreateNewClientServi {
  async handle({
    name,
    email,
    company,
    receive,
    maintenance,
  }: CreateNewClientOptionInterface) {

    const Clients = await addDoc(collection(db, "Clients"), {
      name: name,
      email: email,
      company: company,
      receive: receive,
      maintenance: maintenance
    });


    return Clients
  }
}

export { CreateNewClientServi };
