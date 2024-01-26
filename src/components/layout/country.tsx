import clm from "country-locale-map"
import ReactCountryFlag from "react-country-flag"

interface CountryProps {
  countryCode: string
  flagPosition: "before" | "after"
}

export default function Country({ countryCode, flagPosition }: CountryProps) {
  const countryName = clm.getCountryNameByAlpha2(countryCode)
  return (
    <>
      {flagPosition == "after" && countryName}
      <ReactCountryFlag
        countryCode={countryCode}
        svg
        title={countryName}
        aria-label={countryName}
        style={{
          paddingBottom: "2px",
          marginRight: "5px",
          marginLeft: "5px",
        }}
      />
      {flagPosition == "before" && countryName}
    </>
  )
}
