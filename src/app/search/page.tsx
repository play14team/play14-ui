import Search from "@/components/search"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search results",
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [input: string]: string | undefined }
}) {
  return <Search input={searchParams?.input} />
}
