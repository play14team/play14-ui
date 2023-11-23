import parse from "html-react-parser"

const HtmlContent = ({ children }: { children: string }) => {
  if (!children) return <></>

  return <>{parse(children)}</>
}

export default HtmlContent
