import Link from 'next/link'


export default function SimpleCard({ snippet }) {
  
    const { slug, featuredImage, title, tags, wordCount, detailedInformation, description } = snippet.fields

    return (
      <div className="lg:inline-block flex mb-4 mr-2 px-8 py-3 bg-gray-300 dark:bg-gray-600 rounded shadow">
            <Link href={'/snippet/' + slug} passHref>
                <a>
                    <p className="text-xl mb-2">{title}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
                    <div className="my-2">
                        {tags.map((tag, index) => (
                            <span className="px-2 py-1 mx-2 bg-gray-200 dark:bg-gray-700" key={index}>{ tag }</span>
                        ))}
                    </div>
                </a>
            </Link>
      </div>
    )
  }