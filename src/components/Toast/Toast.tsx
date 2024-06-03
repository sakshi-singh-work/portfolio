// import React from 'react'

// type toastType ={
//     message:string;
//     close : ()=> void;
//     btn:string;
// }
// const Toast = ({message="" ,close,btn="X"}:toastType) => {
//   return (
//     <div>
//         {message}
//       <button onClick ={close}> {btn}</button> 
//     </div>
//   )
// }

// export default Toast

import Lottie from 'lottie-react'
import ToastData from './Toast.json'
import styles from './Toast.module.scss'

export const Toast = () => {
  return (
    <div className={styles.toastContainer}><Lottie animationData={ToastData}/></div>
  )
}
