import { motion } from 'framer-motion';
import { useState, useEffect } from 'react'

const AlertBox = ({ text, type, setAlertText, setAlertType }) => {

  const [color, setColor] = useState("")
  const [visibility, setVisibility] = useState(true)

  useEffect(() => {
      if(type === 'success'){
        setColor('bg-green-200 dark:bg-green-700 text-green-700 dark:text-green-200 border-green-900 dark:border-green-100')
      }
      if(type === 'info'){
        setColor('bg-blue-200 dark:bg-blue-700 text-blue-700 dark:text-blue-200 border-blue-900 dark:border-blue-100')
      }
      if(type === 'error'){
        setColor('bg-red-200 dark:bg-red-700 text-red-700 dark:text-red-200 border-red-900 dark:border-red-100')
      }
      if(type === 'warning'){
        setColor('bg-yellow-200 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-200 border-yellow-900 dark:border-yellow-100')
      }
  })

  const handleClick = () => {
    setVisibility(false)
    setAlertText('')
    setAlertType('')
  }

  return (
     <> <div className={ visibility ? 'relative' : 'hidden relative' }>
     <div className={`${color} my-2 py-3 px-2 shadow-lg flex justify-between rounded`}>
       <p className="px-4">{text}</p>
       <p className="absolute right-2 top-2 cursor-pointer" onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path  d="M6 18L18 6M6 6l12 12" />
         </svg></p>
     </div>
     </div>
    </>
  )
}

export default AlertBox;