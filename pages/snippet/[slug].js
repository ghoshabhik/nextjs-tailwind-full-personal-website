import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';

import ViewCount from '../../components/ui/ViewCount';
import BreadCrumb from '../../components/ui/BreadCrumb';
import { useUser } from '../../firebase/useUser';
import FirebaseAuth from '../../components/auth/FirebaseAuth';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({ 
    content_type: "snippet" 
  })

  const paths = res.items.map(item => {
    return {
      params: { slug: item.fields.slug }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'snippet',
    'fields.slug': params.slug
  }) 

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: { snippet: items[0] },
    revalidate: 1
  }
}

export default function Slug({ snippet }) {

  if (!snippet) return (<div>Loading...</div>)

  const [showLogin, setShowLogin] = useState(false)
  const { user } = useUser()
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }


  const { featuredImage, title, tags, wordCount, detailedInformation, description, slug  } = snippet.fields
  // const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher, {refreshInterval : 1000})
  // const views = data?.total
 
  
  return (
    <div className="flex flex-col items-center space-y-8">
        <BreadCrumb links={[{name: 'HOME', linkUrl: ''}, {name: 'ALL SNIPPETS', linkUrl: 'snippet'}, {name: `${slug}`, linkUrl: `snippet/${slug}`}]}/>
        <div className="px-2 text-center">
            <Image 
            src={'https:' + featuredImage.fields.file.url}
            width={800}
            height={400}
            className="rounded-md"
            alt=""
            />
            <h2 className="text-3xl font-semibold my-8">{ title }</h2>
        </div>
        <div className="px-2">
            <div className="prose lg:prose-xl dark:prose-dark">{documentToReactComponents(detailedInformation)}</div>
        </div>
        <div className="w-1/2 border-b-4 dark:border-gray-600 border-gray-200"></div>
        <div className="flex items-center pb-10">
          <p className="text-left">{'Posted on : '+new Date(snippet.sys.createdAt).toLocaleDateString("en-US", options)+' '}</p>
          {tags.map((tag, index) => (
                <span className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase" key={index}>#{ tag }</span>
          ))}
          {/* <p className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase">{views ? views+' views' : '---'}</p> */}
          <div className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase"><ViewCount slug={slug}/></div>
        </div>
        
        {user ? 
        <div className="text-purple-700 dark:text-purple-200">
          <button
                  className="px-4 w-auto h-10 bg-purple-200 dark:bg-purple-700 rounded-full hover:bg-purple-300 dark:hover:bg-purple-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            <svg viewBox="0 0 20 20"  className="w-6 h-6 inline-block mr-1">
              <path fill="currentColor" d="M17.19,4.155c-1.672-1.534-4.383-1.534-6.055,0L10,5.197L8.864,4.155c-1.672-1.534-4.382-1.534-6.054,0
                                      c-1.881,1.727-1.881,4.52,0,6.246L10,17l7.19-6.599C19.07,8.675,19.07,5.881,17.19,4.155z"/>
            </svg>
            <span>Liked it!</span>
          </button>
        </div> : <button onClick={() => setShowLogin(!showLogin)}
                  className="px-4 w-auto py-2 bg-purple-200 dark:bg-purple-700 rounded-full hover:bg-purple-300 dark:hover:bg-purple-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
            {showLogin ? <span>Close Login Form</span> : <span>Please login to Like/ Comment</span>}
          </button>
          
        } 
        {showLogin ? <FirebaseAuth signInUrl={'snippet/'+slug}/> : ''}
        {/* <div className="w-1/2 border-b-1 dark:border-gray-600 border-gray-200 mb-10"></div> */}
    </div>
  )
}

