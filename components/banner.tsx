import styles from '~/components/banner.module.css'

interface Props {
  buttonText: string
  onClickButton: () => void
}

const Banner = (props: Props) => {
  const { buttonText, onClickButton } = props
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.prefix}>Coffee</span>{' '}
        <span className={styles.subfix}>Connoisseur</span>
      </h1>
      <p className={styles.subTitle}>Discover your local coffee shops!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.onClickButton}>
          {props.buttonText}
        </button>
      </div>
    </div>
  )
}

export default Banner
