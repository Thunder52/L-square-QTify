import MuiButton from '@mui/material/Button';
import styles from "./Button.module.css";

const Button = ({onClick,className="",children }) => {
  return (
    <MuiButton variant="contained" onClick={onClick} className={`${styles.customButton} ${className}`}>
      {children}
    </MuiButton>
  )
}

export default Button