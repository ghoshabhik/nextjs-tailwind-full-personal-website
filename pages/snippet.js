import { createClient } from 'contentful'
import { useState } from 'react'
import useSWR from 'swr'

import SimpleCard from '../components/ui/SimpleCard'
import SearchBox from '../components/ui/SearchBox'
import TagCloud from '../components/ui/TagCloud'

import fetcher from '../lib/fetcher'

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
  const [tag, setTag] = useState("Recent")
  const [filteredSnippets, setFilteredSnippets] = useState(snippets)
  const { data } = useSWR(`/api/page-views`, fetcher, {refreshInterval: 2000})

  // console.log(data)

  if(data){
    data.pageViews.map( page => {
      snippets.map((snippet,index) => {
        if(snippet.fields.slug === page.slug){
          snippets[index].fields.count = page.count
        }
      })
    })
  }
  

  // console.log('Snippets ----',snippets)

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

  const selectedTag = (e) => {
    setTag(e.target.innerText.split(" (")[0].replace('#',''))

    if(e.target.innerText.split(" (")[0].replace('#','') != 'Show All'){
      const filteredSnippetsByTag = snippets.filter( snippet => snippet.fields.tags.includes(e.target.innerText.split(" (")[0].replace('#','')))
      setFilteredSnippets(filteredSnippetsByTag)
    } else{
      setFilteredSnippets(snippets)
    }
  }
  
    return (
      <div className="lg:w-3/6 mx-auto mb-10 px-2 lg:px-0">
        <div className="mb-5">
          <p className="lg:text-4xl text-3xl  font-bold mb-3 tracking-tight">Projects</p>
          <p className="text-gray-600 dark:text-gray-400">These are my hobby side projects. These code bits can easily be copied and pasted into your project. Use the searchbox below to filter snippets by title or filter by tags.</p>
        </div>
        <SearchBox handleType={handleType} placeholder={'Project'} />
        <TagCloud posts={filteredSnippets} selectedTag={selectedTag}/>
        <div className="mt-5">
          {filteredSnippets.map((snippet, index) => (
            <SimpleCard key={index} snippet={snippet.fields}/>
          ))}
        </div>
        
      </div>
    )
  }