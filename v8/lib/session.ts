import {cookies} from "next/headers";
const NAME="kbd_admin_session";
async function sign(value:string){const secret=process.env.SESSION_SECRET||"development-secret";const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);const sig=await crypto.subtle.sign("HMAC",key,new TextEncoder().encode(value));return `${value}.${Buffer.from(sig).toString("base64url")}`;}
async function verify(token:string){const [value]=token.split(".");return !!value&&(await sign(value))===token;}
export async function createAdminSession(){(await cookies()).set(NAME,await sign("admin"),{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"lax",path:"/",maxAge:28800});}
export async function clearAdminSession(){(await cookies()).delete(NAME);}
export async function isAdmin(){const token=(await cookies()).get(NAME)?.value;return token?verify(token):false;}