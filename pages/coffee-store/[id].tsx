import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '~/styles/coffee-store.module.css'
import coffeeStoresData from '~/data/coffee-stores.json'
import Image from 'next/image'
import classNames from 'classnames'
import { useCallback, useEffect, useState } from 'react'
import { fetchCoffeeStores } from '~/lib/coffee-stores'
import type { Result } from '~/types/api/places'
import { useSampleState } from '../_app'
import * as _ from 'lodash'
import useSWR from 'swr'

interface Props {
  coffeeStore: Result
}

const CoffeeStore: NextPage<Props> = (props) => {
  const router = useRouter()
  const [coffeeStore, setCoffeeStore] = useState<Result>(props.coffeeStore)
  const { coffeeStores } = useSampleState()
  const [votingCount, setVotingCount] = useState<number>(1)
  const id = router.query.id

  const { data, error } = useSWR<Result[]>(
    `/api/getCoffeeStoreById?id=${id}`,
    () => fetch(`/api/getCoffeeStoreById?id=${id}`).then((res) => res.json())
  )
  useEffect(() => {
    if (data && !_.isEmpty(data) && !_.isEmpty(_.pick(data[0], 'voting'))) {
      console.log('ok')
      // setCoffeeStore(data[0])
      // @ts-ignore: Unreachable code error
      setVotingCount(data[0].voting)
    }
  }, [data])

  useEffect(() => {
    setCoffeeStore(props.coffeeStore)
  }, [props.coffeeStore])

  useEffect(() => {
    if (_.isEmpty(props.coffeeStore) && !_.isEmpty(coffeeStores)) {
      const findCoffeeStoreById = _.find(
        coffeeStores,
        (value) => value.fsq_id === id
      )

      if (findCoffeeStoreById) {
        setCoffeeStore(findCoffeeStoreById)
        handleCreateCoffeeStore(findCoffeeStoreById)
      }
    } else {
      if (!_.isEmpty(props.coffeeStore))
        handleCreateCoffeeStore(props.coffeeStore)
    }
  }, [coffeeStore, coffeeStores, id, props.coffeeStore])

  const handleCreateCoffeeStore = async (coffeeStore: Result) => {
    try {
      const {
        fsq_id: id,
        name,
        location: { address, neighborhood },
      } = coffeeStore
      const response = await fetch('/api/createCoffeeStore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          name,
          address,
          voting: 0,
          neighborhood: neighborhood.join(''),
        }),
      })

      const result = await response.json()
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpvotingButton = useCallback(async () => {
    try {
      const response = await fetch('/api/favouriteCoffeeStoreById', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      })

      const result = await response.json()
      setVotingCount(result[0].voting)
    } catch (err) {
      console.error(err)
    }
  }, [id])

  if (router.isFallback || _.isEmpty(coffeeStore)) {
    return <div>loading</div>
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <div>
      <Head>
        <title>{coffeeStore.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>&larr; Back to Home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h1 className={styles.name}>{coffeeStore.name}</h1>
          </div>
          <Image
            src={'https://via.placeholder.com/600x360.png'}
            width={600}
            height={360}
            className={styles.storeImg}
            alt={coffeeStore.name}
          />
        </div>
        <div className={classNames('glass', styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width={24}
              height={24}
              alt="places"
            />
            <p className={styles.text}>{coffeeStore.location.address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width={24}
              height={24}
              alt="nearMe"
            />
            <p className={styles.text}>{coffeeStore.location.neighborhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width={24}
              height={24}
              alt="star"
            />
            <p className={styles.text}>{votingCount}</p>
          </div>
          <button
            className={styles.upvoteButton}
            onClick={handleUpvotingButton}
          >
            Up vote!
          </button>
        </div>
      </div>
    </div>
  )
}

// @ts-ignore: Unreachable code error
export const getStaticProps: GetStaticProps<
  { coffeeStore: Result },
  { id: string }
> = async (context) => {
  const id = context.params?.id

  const coffeeStores = await fetchCoffeeStores(
    '40.74356310868958,-73.99085595601952',
    30
  )

  // console.log(coffeeStores)

  if (id === undefined) {
    return {
      notFound: true,
    }
  }

  const coffeeStore = coffeeStores.find(
    (coffeeStore) => coffeeStore.fsq_id === id
  )

  if (coffeeStore === undefined) {
    return {
      props: {
        coffeeStore: {},
      },
    }
  }

  return {
    props: {
      coffeeStore,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const coffeeStores = await fetchCoffeeStores(
    '40.74356310868958,-73.99085595601952',
    6
  )
  const paths = coffeeStores.map((coffeeStore) => ({
    params: { id: coffeeStore.fsq_id },
  }))
  return {
    paths,
    fallback: true,
  }
}

export default CoffeeStore
