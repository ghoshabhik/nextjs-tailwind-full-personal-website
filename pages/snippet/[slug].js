import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import Link from 'next/link'

import BreadCrumb from '../../components/ui/BreadCrumb'

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

export default function RecipeDetails({ snippet }) {

  if (!snippet) return (<div>Loading...</div>)
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

  const { featuredImage, title, tags, wordCount, detailedInformation, description, slug  } = snippet.fields
  
  return (
    <div className="flex flex-col items-center space-y-8">
        <BreadCrumb links={[{name: 'HOME', linkUrl: ''}, {name: 'ALL SNIPPETS', linkUrl: 'snippet'}, {name: `${slug}`, linkUrl: `snippet/${slug}`}]}/>
        <div className="px-2 text-center">
            <Image 
            src={'https:' + featuredImage.fields.file.url}
            width={800}
            height={400}
            className="rounded-md"
            />
            <h2 className="text-3xl font-semibold my-8">{ title }</h2>
        </div>
        <div className="px-2">
            <div className="prose lg:prose-xl dark:prose-dark">{documentToReactComponents(detailedInformation)}</div>
        </div>
        <div className="w-1/2 border-b-4 dark:border-gray-600 border-gray-200"></div>
        <div className="flex items-center pb-20">
        <p className="text-left">{'Posted on : '+new Date(snippet.sys.createdAt).toLocaleDateString("en-US", options)+' '}</p>
        {tags.map((tag, index) => (
              <span className="px-2 mx-1 bg-gray-200 dark:bg-gray-700 uppercase" key={index}>#{ tag }</span>
        ))}
        
        </div>
        <div className="w-1/2 border-b-1 dark:border-gray-600 border-gray-200 mb-10"></div>

    </div>
  )
}