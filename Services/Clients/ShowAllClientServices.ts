import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../../config/Firebase";

class ShowAllClientServices {
  async handle() {
    const a = collection(db, "Clientes")

    const value = query(a, where("name", "==", "primeiro"))

    return value
  }
}

export { ShowAllClientServices };
