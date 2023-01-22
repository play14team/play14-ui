import ReactHtmlParser from "react-html-parser";

const Html = (props: { children: string }) => {
  const { children } = props;
  return <>{ReactHtmlParser(children)}</>;
};

export default Html;
