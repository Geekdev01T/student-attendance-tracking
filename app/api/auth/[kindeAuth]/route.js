// import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
// export const GET = handleAuth();
import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
export const GET = async (...args) => {
  try {
    return handleAuth()(...args);
  } catch (e) {
    console.error("Auth error:", e);
    return new Response("Auth failed", { status: 500 });
  }
};