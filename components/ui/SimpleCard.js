import Link from 'next/link'


export default function SimpleCard({ snippet, contentType }) {
  
    const { slug, title, description } = snippet
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    // console.log(snippet)
    return (
      <div className="block my-3 py-3 ">
            <Link href={'/'+contentType+'/' + slug} passHref>
                <a>
                    <div className="grid lg:grid-cols-5 grid-cols-1">
                        <p className="text-lg md:text-xl font-medium lg:col-span-4">{title}</p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm lg:text-right">{snippet.count ? snippet.count : '---'} Views</p>
                    </div>
                    
                    
                    {/* <div className="">
                        {tags.map((tag, index) => (
                            <span className="py-1 lowercase text-gray-600 dark:text-gray-400 text-sm" key={index}>#{ tag } </span>
                        ))} 
                    </div> */}
                    {/* <p className="text-gray-600 dark:text-gray-400 text-sm">{''+new Date(snippet.sys.createdAt).toLocaleDateString("en-US", options)+' '}</p> */}
                    <p className=" text-gray-600 dark:text-gray-400">{description}</p>
                </a>
            </Link>
      </div>
    )
  }