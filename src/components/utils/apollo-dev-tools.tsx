import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev"

export default function ApolloDevTools() {
  if (process.env.NODE_ENV !== "production") {
    // Adds messages only in a dev environment
    loadDevMessages()
    loadErrorMessages()
  }
  return <></>
}
