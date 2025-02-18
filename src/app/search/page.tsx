import Search from "@/components/search"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search results",
}

export default async function SearchPage(props: {
  searchParams?: Promise<{ [input: string]: string | undefined }>
}) {
  const searchParams = await props.searchParams
  return <Search input={searchParams?.input} />
}
