import { ComponentProps } from 'react'

import styles from './styles.module.scss'

type Props = ComponentProps<'div'>

export function Container(props: Props) {
  const className = props.className ? `${props.className} ${styles.container}` : styles.container

  return <div {...props} className={className} />
}
