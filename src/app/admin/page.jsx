import { currentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
// import { getCurrentUser } from "@/lib/session";

export default async function AdminPage() {
  const user = await currentUser();

  if (!user || user.role !== "ADMIN") {
    redirect("/"); 
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, {user.email}</p>

    
    </div>
  );
}
