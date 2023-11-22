import parse from "html-react-parser"

const HtmlContent = (props: { children: string }) => {
  const { children } = props
  return <>{parse(children)}</>
}

export default HtmlContent
