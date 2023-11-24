import Image from "next/image"
import logo from "/public/logo/play14_1500x500_transparent.png"

const Title = () => {
  return (
    <div>
      <div className="d-flex justify-content-center pt-5">
        <Image src={logo} alt="#play14 logo" width={600} height={333} />
      </div>
      <div className="d-flex justify-content-center pt-5">
        <h1>
          <span className="orange">play</span>&nbsp;
          <span className="yellow">is</span>&nbsp;
          <span className="blue">the</span>&nbsp;
          <span className="green">way</span>&nbsp;
          <span className="grey">!</span>
        </h1>
      </div>
    </div>
  )
}

export default Title
