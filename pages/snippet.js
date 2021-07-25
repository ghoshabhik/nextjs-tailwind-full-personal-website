import { createClient } from 'contentful'

import SimpleCard from '../components/ui/SimpleCard'

export async function getStaticProps() {

    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })
  
    const res = await client.getEntries({ content_type: "snippet" })
  
    return {
      props: {
        snippets: res.items,
      },
      revalidate: 1
    }
  }

export default function Snippet({ snippets }) {
  
    return (
      <div className="lg:w-3/4 mx-auto mb-10">
        <div className="mb-10">
          <p className="text-4xl font-bold mb-3">Snippets</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">Snippets are code bits that you can easily copy and paste into your project</p>
        </div>
        <div className="grid-rows-2">
          {snippets.map((snippet, index) => (
            <SimpleCard key={index} snippet={snippet}/>
          ))}
        </div>
      </div>
    )
  }