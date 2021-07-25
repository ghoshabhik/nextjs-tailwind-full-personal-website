import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

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

  const { featuredImage, title, tags, wordCount, detailedInformation, description } = snippet.fields

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="px-2 text-center">
        <Image 
          src={'https:' + featuredImage.fields.file.url}
          width={800}
          height={400}
          className="rounded-md"
        />
        <h2 className="text-3xl font-semibold my-8">{ title }</h2>
      </div>

      <div className="text-center">
        {tags.map((tag, index) => (
          <span className="px-2 py-1 mx-2 bg-gray-200 dark:bg-gray-700" key={index}>{ tag }</span>
        ))}
      </div>
        
      <div className="px-2">
        <div className="prose dark:prose-dark">{documentToReactComponents(detailedInformation)}</div>
      </div>

    </div>
  )
}