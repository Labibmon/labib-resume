import { FC } from 'react'
import Layout from 'components/Layout';
import styles from 'public/scss/pages/Home.module.scss'

const Home: FC<any> = ({})=> {
  return (
    <Layout>
      <div className={styles.text}>hello world</div>
    </Layout>
  )
}


export default Home;