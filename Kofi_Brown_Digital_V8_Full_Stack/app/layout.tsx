import type {Metadata} from "next"; import "./globals.css";
export const metadata:Metadata={title:"Kofi Brown Digital",description:"Websites, web apps, SaaS and business automation.",manifest:"/manifest.webmanifest"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}