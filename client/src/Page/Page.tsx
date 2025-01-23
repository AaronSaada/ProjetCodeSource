import { PropsWithChildren } from "react";
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"

export type PageProps = {
    title: string;
}

export const Page = ({ title, children }: PropsWithChildren<PageProps>) => {
  return (
    <>
        <Header title={title}/>
        {children}
        <Footer />
    </>
  )
}
