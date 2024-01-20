import { getAuth } from "firebase-admin/auth";

class ShowUserServices {
  async handle() {
    const a = getAuth().getUser("0bW4KlFRS7PrT7mqSe6qK94OONJ3");

    console.log(a);
  }
}

export { ShowUserServices };
