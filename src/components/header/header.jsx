import styles from './header.module.scss'

export default function Header(props) {
  return (
    <header>
      <div className={styles.intro}>
        <div className={styles.overlay}>
          <div className={styles.container}>
            <div className={styles.subContainer}>
              <div className={styles.textContainer}>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#features'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
