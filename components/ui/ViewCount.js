import useSWR, {trigger} from 'swr';
import { useState, useEffect } from 'react'
import fetcher from '../../lib/fetcher'

export default function ViewCount({ slug }) {

    const [count, setCount] = useState(0)

   useEffect(() => {

    const viewRegister = async () => {
        const res = await fetch(`/api/increment-views?id=${slug}`)
        // const data = await res.json()
        // setCount(data.total)
        
    }

    viewRegister()
    
        
   })

   const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher, {refreshInterval : 1000})
   setCount(data)

  return (
    <div className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase">
        {count === 0 ? '---' : `${data} views`}
    </div>
  )
}