import { getUser } from "~/server/user";
import { type CurrentUser } from "~/types";
import Navbar from "./navbar";

export default async function Header() {
  const currentUser = (await getUser()) as CurrentUser;
  return <Navbar currentUser={currentUser} />;
}
