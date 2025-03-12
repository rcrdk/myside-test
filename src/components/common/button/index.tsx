import { ComponentProps } from 'react'

import styles from './styles.module.scss'

type Props = ComponentProps<'button'> & {
  mode?: 'default' | 'icon'
  variant?: 'primary' | 'ghost'
}

export function Button({ mode = 'default', variant = 'ghost', ...props }: Props) {
  const baseClassName = props.className ? `${props.className} ${styles.container}` : styles.container

  const variantClassName = variant === 'primary' ? styles.variantPrimary : styles.variantGhost
  const modeClassName = mode == 'default' ? styles.modeDefault : styles.modeIcon

  return <button {...props} className={`${baseClassName} ${variantClassName} ${modeClassName}`} />
}
