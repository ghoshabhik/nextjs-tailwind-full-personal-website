import useSWR, {trigger} from 'swr';
import { useState, useEffect } from 'react'
import fetcher from '../../lib/fetcher'

export default function ViewCount({ slug }) {

    const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher)
    const views = new Number(data?.total);

    console.log('view data ------ ',data?.total)

   useEffect(() => {

    const viewRegister = async () => {
        const res = await fetch(`/api/increment-views?id=${slug}`)
        // const data = await res.json()
        // setCount(data.total)
        trigger(`/api/increment-views?id=${slug}`)
    }
    viewRegister()
        
   },[slug])


   

  return `${views > 0 ? views.toLocaleString()+" views" : '–––'}`;
}