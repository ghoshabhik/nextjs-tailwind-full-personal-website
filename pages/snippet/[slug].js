import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

import ViewCount from '../../components/ui/ViewCount'
import BreadCrumb from '../../components/ui/BreadCrumb'
import LikeButton from '../../components/ui/LikeButton'

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

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }


  const { featuredImage, title, tags, wordCount, detailedInformation, description, slug  } = snippet.fields
  // const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher, {refreshInterval : 1000})
  // const views = data?.total
 
  
  return (
    <div className="flex flex-col items-center space-y-8">
        {/* <BreadCrumb links={[{name: 'HOME', linkUrl: ''}, {name: 'ALL Projects', linkUrl: 'snippet'}, {name: `${slug}`, linkUrl: `snippet/${slug}`}]}/> */}
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
        { title }
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-2 mb-10">
          <div className="flex items-center">
            <Image
              alt="Abhik Ghosh"
              height={24}
              width={24}
              src="/images/site/profile1.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {'Abhik Ghosh / '}
              {new Date(snippet.sys.createdAt).toLocaleDateString("en-US", options)}{` • `}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0 mx-2">
            <ViewCount slug={slug}/>
          </p>
        </div>
        
        
        <div className="px-2 text-center">
            <Image 
            src={'https:' + featuredImage.fields.file.url}
            width={800}
            height={400}
            className="rounded-md"
            alt=""
            />
        </div>
        <div className="px-2">
            <div className="prose lg:prose-xl dark:prose-dark">{documentToReactComponents(detailedInformation)}</div>
        </div>
        <div className="w-1/2 border-b-4 dark:border-gray-600 border-gray-200"></div>
        <div className="flex flex-col justify-center items-center">
          
        <div>
          {tags.map((tag, index) => (
                <span className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase" key={index}>#{ tag }</span>
          ))}
        </div>
        </div>
        <div className="lg:w-2/5">
        <LikeButton slug={slug} contentType={'snippet'}/>
        </div>
        
        
        
    </div>
  )
}

