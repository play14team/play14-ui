import { useRouter } from "next/navigation"
import { useState } from "react"

const SearchBox = () => {
  const router = useRouter()
  const [input, setInput] = useState("")

  const search = () => {
    if (input) router.push("/search?input=" + input)
  }

  return (
    <div className="others-option d-flex align-items-center">
      <div className="option-item">
        <div className="search-box">
          <input
            type="text"
            className="input-search"
            placeholder="Search for anything"
            onChange={(e) => setInput(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") search()
            }}
          />
          <button onClick={() => search()}>
            <i className="flaticon-loupe"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchBox
