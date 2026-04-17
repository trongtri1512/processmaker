import { redirect } from "next/navigation";

// Redirect "/" → "/dashboard"
export default function Home() {
  redirect("/dashboard");
}
