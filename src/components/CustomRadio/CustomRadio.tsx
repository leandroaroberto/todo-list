import { CheckCircle, Circle } from '@phosphor-icons/react';
import styles from './CustomRadio.module.css'

interface RadioButtonProps {
    checked?: true | false;
    onClick: () => void;
}

export const CustomRadio = ({checked, onClick} : RadioButtonProps) => {
  return (
    <div onClick={onClick}>
        {
            checked ? (
                <span className={styles.checked}>
                    <CheckCircle size={32} weight={'fill'}/>
                </span>) :
                (
                <span >
                    <Circle size={32} className={styles.unchecked}/>
                </span>)
        }
    </div>
  )
}
