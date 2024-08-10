import { addDoc, collection, getDocs } from "firebase/firestore";
import { firestore } from "@/app/api/configs/firebase";
import { formatResponse } from "@/utils/helpers";
import bcrypt from "bcrypt";

const getUsers = async () => {
  const usersCollectionRef = collection(firestore, "users");

  const querySnapshot = await getDocs(usersCollectionRef);

  const users = [];
  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });
  return users;
};
const getAppValue = async () => {
  const appCollectionRef = collection(firestore, "app");

  const querySnapshot = await getDocs(appCollectionRef);

  const appValue = [];
  querySnapshot.forEach((doc) => {
    appValue.push(doc.data());
  });
  return appValue;
};

const getWaitlistEmail = async () => {
  const appCollectionRef = collection(firestore, "waitlist-email");

  const querySnapshot = await getDocs(appCollectionRef);

  const emails = [];
  querySnapshot.forEach((doc) => {
    emails.push(doc.data());
  });
  return emails;
};

export async function POST(request) {
  try {
    const { email, password, confirmPassword } = await request.json();

    if (!email || !password || !confirmPassword) {
      return new Response("Missing email or password", { status: 400 });
    }

    if (password !== confirmPassword) {
      return new Response("Passwords do not match", { status: 400 });
    }
    const users = await getUsers();

    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      return new Response("Email already exists", { status: 400 });
    }

    const settings = await getAppValue();
    if (settings.length < 1)
      return new Response("Settings not found", { status: 404 });
    if (settings[0].waitlist) {
      const emails = await getWaitlistEmail();
      const emailEligible = emails.some((user) => user.email === email);
      if (!emailEligible)
        return new Response("Sorry! You are not waitlist", { status: 400 });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const usersCollection = collection(firestore, "users");
    const docRef = await addDoc(usersCollection, {
      email: email,
      password: hashedPassword,
      confirmPassword: hashedPassword,
      isVerified: true,
      roles: "USER",
    });
    return Response.json(
      formatResponse(201, "", "user created successfully", { id: docRef.id })
    );
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
