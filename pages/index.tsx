import { FC } from 'react'
import Layout from 'components/Layout';
import styles from 'public/scss/pages/Home.module.scss'

const Home: FC<any> = ({})=> {
  return (
    <Layout>
      <div className={styles.home_wrapper}>
        <div className={styles.home_container}>
          <div>
            left
          </div>
          <div>
            right
          </div>
        </div>  
      </div>
    </Layout>
  )
}


export default Home;