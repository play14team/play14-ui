import { ApolloError } from "@apollo/client"
import Head from "next/head"
import { PropsWithChildren } from "react"
import ErrorMessage from "./error"
import Loader from "./loader"

export interface PageProps extends PropsWithChildren {
  name: string
  description?: string | undefined
  loading?: boolean | undefined
  error?: ApolloError | undefined
  hideName?: boolean
}

const Page = (props: PageProps) => {
  const { name, description, loading, error, hideName, children } = props

  return (
    <section id={name}>
      <Head>
        <title>{`#play14 - ${name ? name : "play is the way"}`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      {!hideName && <h1 className="pt-5 centered">{name}</h1>}
      {loading && <Loader />}
      {error && <ErrorMessage message={error.message} />}
      {!loading && !children && <p>Nothing there yet!</p>}
      {children}
    </section>
  )
}

export default Page
