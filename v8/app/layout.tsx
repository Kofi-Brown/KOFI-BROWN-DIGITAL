import "./globals.css"; import type {Metadata} from "next";
export const metadata:Metadata={title:"Kofi Brown Digital | Digital Products & Web Systems",description:"Websites, web apps and business automation for ambitious businesses."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}