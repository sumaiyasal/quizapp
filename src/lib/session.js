// // lib/session.js
// import { getServerSession } from "next-auth/next";
// // import { authOptions } from "@/lib/auth";  
// import { Prisma } from "@prisma/client";
// // import { prisma } from '@/lib/prisma';
// import { authOptions } from '@/lib/auth';

      

// export async function getCurrentUser() {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) return null;

//   // Fetch user from DB by email
//   const user = await Prisma.user.findUnique({
//     where: { email: session.user.email },
//   });

//   return user;
// }
