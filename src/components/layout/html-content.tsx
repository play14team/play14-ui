import parse from "html-react-parser"

const HtmlContent = ({ children }: { children: string | undefined }) => {
  if (!children) return <></>

  return <>{parse(children)}</>
}

export default HtmlContent
