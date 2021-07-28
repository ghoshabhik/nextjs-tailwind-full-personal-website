import Link from 'next/link'

export default function Home() {
  return (
    <div className="lg:w-3/6 mx-auto mb-8">
        <div className="mb-5">
          <p className="text-4xl font-normal mb-3">Hello, I am Abhik 👋</p>
          <p className="text-lg text-gray-600 dark:text-gray-400">A Data Solution Architect, my day job revolves around cloud data migration, real-time data processing and data platform modernization. I love clean code and functional style programming. 
          Enjoy long run, photography & Seattle coffee. </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mt-5">
          <Link href='/about' passHref>
              <a className="highlighted-link">
              Please read my bio here →
              </a>
          </Link>
          </p>
        </div>
        
      </div>
  )
}
