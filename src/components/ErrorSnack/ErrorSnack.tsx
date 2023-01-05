import React from 'react';
import styles from 'ErrorSnack.module.scss'

export const ErrorSnack = ({error}:{error?: string}) => {
  return(<div className={styles.globalError}>
      {error&&'some global error occured!'}
  </div>)
}