import useSWR, {trigger} from 'swr';
import { useState, useEffect } from 'react'
import fetcher from '../../lib/fetcher'

export default function ViewCount({ slug }) {

    const [count, setCount] = useState(0)
    const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher)
    // setCount(data?.total)
    console.log('view data ------ ',data)

   useEffect(() => {

    const viewRegister = async () => {
        const res = await fetch(`/api/increment-views?id=${slug}`)
        // const data = await res.json()
        // setCount(data.total)
        trigger(`/api/increment-views?id=${slug}`)
    }
    viewRegister()
        
   },[slug])


   

  return (
    <div className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase">
        {count === 0 ? '---' : `${data?.total} views`}
    </div>
  )
}