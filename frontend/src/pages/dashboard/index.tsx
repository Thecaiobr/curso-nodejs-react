import { canSSRAuth } from "@/src/utils/canSSRAuth"
import Head from "next/head"
import { Header } from "@/src/components/Header"

canSSRAuth

export default function Dashboard(){
    return(
        <>
            <Head>
                <title>Painel - Sujeio Pizzaria</title>
            </Head>
            <div>
                <Header />
                <h1>Painel</h1>
            </div>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})