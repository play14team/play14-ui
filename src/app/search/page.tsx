import Search from "@/components/search"

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [input: string]: string | undefined }
}) {
  return <Search input={searchParams?.input} />
}
