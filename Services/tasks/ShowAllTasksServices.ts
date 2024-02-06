import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/Firebase";


class ShowAllTasksServices {
  async handle() {
    const QueryAllItens = query(
      collection(db, "Tasks"),
      orderBy("created_at", "desc"),
      limit(14)
    );

    const data:any = await getDocs(QueryAllItens);

    return data._snapshot.docChanges;
  }
}

export { ShowAllTasksServices };
