import { PropsWithChildren } from "react"

export interface PageProps extends PropsWithChildren {
  name: string
  hideName?: boolean
}

const Page = ({ name, hideName, children }: PageProps) => {
  return (
    <section id={name}>
      {!hideName && <h1 className="pt-5 centered">{name}</h1>}
      {children}
    </section>
  )
}

export default Page
