import Link from 'next/link'
import { createClient } from 'contentful'
import useSWR from 'swr'
import fetcher from '../lib/fetcher'

import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import SimpleCard from '../components/ui/SimpleCard'
import Message from '../components/firestore/Message'
import { getAllFilesFrontMatter } from '../lib/mdx'

export default function Home({ snippets, posts }) {
  const { data } = useSWR(`/api/page-views`, fetcher, {refreshInterval: 2000})
  if(data){
    data.pageViews.map( page => {
      snippets.map((snippet,index) => {
        if(snippet.fields.slug === page.slug){
          snippets[index].fields.count = page.count
        }
      })
      posts.map((post,index) => {
        if(post.slug === page.slug){
          posts[index].count = page.count
        }
      })
    })
  }
  return (
    <div className="lg:w-4/6 mx-auto mb-8 px-5">
          <div className="mb-5">
            <p className="lg:text-5xl text-4xl text-right font-semibold mb-3 tracking-tight lg:px-48">Hello, I am Abhik 👋</p>
            <p className="lg:text-lg text-gray-600 dark:text-gray-400  lg:px-48">A Data Solution Architect, my day job revolves around cloud data migration, real-time data processing and data platform modernization. I love clean code and functional style programming. 
            Enjoy long run, photography and mountains. </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-5 lg:px-48">
            <Link href='/about' passHref>
                <a className="highlighted-link">
                Please read my bio here →
                </a>
            </Link>
            </p>
              <div className="flex space-x-5 justify-center my-20">
                
                <div className='has-tooltip'>
                  <span className='tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-800 -mt-10 -ml-10 text-sm'>Click to checkout my LinkedIn Profile</span>
                  <Link href='https://medium.com/@ghoshabhik'>
                    <a><FaLinkedin /> </a> 
                  </Link>
                </div>
                <div className='has-tooltip'>
                  <span className='tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-800 -mt-10 -ml-10 text-sm'>Click to checkout my Github Profile</span>
                  <Link href='https://medium.com/@ghoshabhik'>
                    
                    <a><FaGithub />  </a> 
                  </Link>
                </div>
                <div className='has-tooltip'>
                  <span className='tooltip rounded shadow-lg p-1 bg-gray-100 dark:bg-gray-800 -mt-10 -ml-10 text-sm'>Email at: abhik.ghosh5@gmail.com</span>
                  <a><HiOutlineMail /> </a> 
                </div>
              </div>
            
            <div className="w-1/2 mx-auto  mb-28 border-b-4 dark:border-gray-600 border-gray-200"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-10 gap-5">
              <div className="lg:p-3 rounded-md lg:border dark:border-gray-700">
                <p className="text-3xl font-semibold my-3 text-center">📄 Latest from the Blog</p>
                <div>
                {posts.slice(0,3).map((post, index) => (
                  <SimpleCard key={index} snippet={post} contentType={'blog'}/>
                ))}
                </div>
                <Link href='/blog' passHref>
                  <a>
                  <p className="text-right tracking-tight cursor-pointer">All Posts ➡️</p>  </a>
                </Link>
              </div>
              <div className="lg:p-3 rounded-md lg:border dark:border-gray-700">
                <p className="text-3xl font-semibold tracking-tight my-3 text-center ">💻 Featured Projects</p>
                <div>
                {snippets.slice(0,5).map((snippet, index) => (
                  <SimpleCard key={index} snippet={snippet.fields} contentType={'snippet'}/>
                ))}
                </div>
                <Link href='/snippet' passHref>
                  <a>
                  <p className="text-right cursor-pointer">All Projects ➡️</p>  </a>
                </Link>
              </div>
            </div>

        </div>
        <Message />
        
      </div>
  )
}


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "snippet" })
  const posts = await getAllFilesFrontMatter('blog');
  console.log(posts)
  return {
    props: {
      snippets: res.items,
      posts
    },
    revalidate: 1
  }
}