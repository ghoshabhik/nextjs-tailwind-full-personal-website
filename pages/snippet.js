import { createClient } from 'contentful'
import { useState } from 'react'

import SimpleCard from '../components/ui/SimpleCard'
import SearchBox from '../components/ui/SearchBox'
import BreadCrumb from '../components/ui/BreadCrumb'

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

  const [searchTerm, setSearchTerm] = useState("")
  const [filteredSnippets, setFilteredSnippets] = useState(snippets)

  const handleType = e => {
    if(e.target.value.length > 2){
        setSearchTerm(e.target.value)
        const filteredSnippets = snippets.filter( snippet => snippet.fields.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredSnippets(filteredSnippets)
    } else {
        const filteredSnippetsByTag = snippets
        setFilteredSnippets(filteredSnippetsByTag)
        setSearchTerm("")
    }
  }
  
    return (
      <div className="lg:w-3/4 mx-auto mb-10">
        <div className="mb-5">
          <BreadCrumb links={[{name: 'HOME', linkUrl: ''}]}/>
          <p className="text-4xl font-bold mb-3">Snippets</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">Snippets are code bits that you can easily copy and paste into your project. Use the searchbox below to filter snippets by title.</p>
        </div>
        <SearchBox handleType={handleType} placeholder={'Snippets'} />
        <div className="grid-rows-2 mt-5">
          {filteredSnippets.map((snippet, index) => (
            <SimpleCard key={index} snippet={snippet}/>
          ))}
        </div>
      </div>
    )
  }