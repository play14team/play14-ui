// A simple wrapper around classNames to return null, if no classes were generated
// Otherwise, original classNames returns empty string which causes class="" to be generated
export default function classNames(...args: Array<string>) {
  if (args.length == 0) return undefined;
  return args.join(" ").trim();
}
