import styles from "./ratings.module.css"

const Ratings = (props: { name: string; value: number }) => {
  const { name, value } = props
  const stars = []

  for (let index = 1; index <= value; index++) {
    stars.push(<i className={`fa fa-star ${styles.ratingColor}`}></i>)
  }
  for (let index = value + 1; index <= 5; index++) {
    stars.push(<i className="fa fa-star"></i>)
  }

  return (
    <div className="mt-2 d-flex justify-content-between align-items-center">
      {name}
      <div className={styles.smallRatings}>{stars}</div>
    </div>
  )
}

export default Ratings
