import parse from "html-react-parser"

// Strip inline styles from HTML to allow theme colors to apply
function stripInlineStyles(html: string): string {
  return html.replace(/\s*style="[^"]*"/gi, "")
}

const HtmlContent = ({
  children,
  preserveStyles = false,
}: {
  children: string | undefined
  preserveStyles?: boolean
}) => {
  if (!children) return <></>

  const content = preserveStyles ? children : stripInlineStyles(children)
  return <>{parse(content)}</>
}

export default HtmlContent
