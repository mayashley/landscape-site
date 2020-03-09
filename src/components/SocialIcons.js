import React from 'react'
import styles from '../css/footer.module.css'

export const Example = ({data}) => {
    return (
        <a
              
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
                <div className={styles.iconWrapper}>
              {data.icon}
              </div>
              <div className={styles.textWrapper}>
              {data.text}
              </div>
            </a>
    )
}
