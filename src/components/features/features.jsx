import styles from './features.module.scss'

export default function Features(props){
  return (
    <div id='features' className={styles.wrapper}>
      <div className={styles.container}>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Why Kandra?</h2>
        </div>
        <div className={styles.boxContainer}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className={styles.itemBox}>
                  {' '}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
