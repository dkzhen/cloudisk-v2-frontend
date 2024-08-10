import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/app/api/configs/firebase";
import { formatResponse } from "@/utils/helpers";

const getUsers = async () => {
  const usersCollectionRef = collection(firestore, "users");

  const querySnapshot = await getDocs(usersCollectionRef);

  const users = [];
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return users;
};

export async function GET(request) {
  try {
    const users = await getUsers();
    return Response.json(
      formatResponse(200, "", "fetched users successfully", users)
    );
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
