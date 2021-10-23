import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from 'public/scss/components/Navbar.module.scss'

type NavbarType = {

}

const Navbar: FC<NavbarType> = ({

}) => {
  const { asPath } = useRouter()

  const routes = [
    {
      title: 'Home',
      href: '/'
    }, {
      title: 'Profile',
      href: '/profile'
    }, {
      title: 'Portofolio',
      href: '/portofolio'
    }
  ]

  return (
    <div className={styles.navbar_wrapper}>
      <div className={styles.navbar_container}>
        <nav>
          <ul className={styles.navbar_linkItems}>
            {routes.map((route, index) => (
              <li
                key={index}
                className={
                  `${styles.navbar_linkItem} ${asPath === route.href ? 'active' : ''}`
                }
              >
                <Link href={route.href}>
                  <a>{route.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}


export default Navbar;