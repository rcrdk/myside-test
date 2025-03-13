import styles from './styles.module.scss'

type Props = {
  className?: string
}

export function Skeleton({ className = '' }: Props) {
  return <div className={`${styles.container} ${className}`} />
}
