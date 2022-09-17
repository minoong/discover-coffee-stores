import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from '~/components/card.module.css'

interface Props {
  name: string
  imgUrl: string
  href: string
}

const Card = (props: Props) => {
  const { name, imgUrl, href } = props
  return (
    <Link href={props.href} prefetch={false}>
      <a className={styles.cardLink}>
        <div className={classNames('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{props.name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={props.imgUrl}
              width={260}
              height={160}
              alt={name}
            />
          </div>
        </div>
      </a>
    </Link>
  )
}

export default Card
