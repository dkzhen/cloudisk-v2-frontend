import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/app/api/configs/firebase";
import { formatResponse } from "@/utils/helpers";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getUsers = async () => {
  try {
    const usersCollectionRef = collection(firestore, "users");

    const querySnapshot = await getDocs(usersCollectionRef);

    const users = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data());
    });
    return users;
  } catch (error) {
    throw new Error();
  }
};
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const expiresIn = process.env.JWT_EXPIRESIN || "1h";
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new Response("Missing email or password", { status: 400 });
    }

    const users = await getUsers();

    const user = users.find((user) => user.email === email);
    if (!user) {
      return new Response("User not found", { status: 404 });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return new Response("Incorrect password", { status: 401 });
    }

    if (!user.isVerified) {
      return new Response("Please verify your account", { status: 401 });
    }

    const token = jwt.sign(
      { email: user.email, roles: user.roles },
      JWT_SECRET,
      { expiresIn: expiresIn }
    );
    const refreshToken = jwt.sign(
      { email: user.email, roles: user.roles },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return Response.json(
      formatResponse(200, "", "user authenticated successfully", {
        email: user.email,
        token: token,
        refreshToken: refreshToken,
      })
    );
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
