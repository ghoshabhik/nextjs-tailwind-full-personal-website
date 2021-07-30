import Image from 'next/image';
import { parseISO, format } from 'date-fns';

import ViewCount from '../ui/ViewCount';
import LikeButton from '../../components/ui/LikeButton'

const editUrl = (slug) =>
  `https://github.com/ghoshabhik/nextjs-tailwind-full-personal-website/edit/main/data/blog/${slug}.mdx`;
// const discussUrl = (slug) =>
//   `https://mobile.twitter.com/search?q=${encodeURIComponent(
//     `https://leerob.io/blog/${slug}`
//   )}`;

export default function BlogLayout({ children, frontMatter }) {
  return (

      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 xl:w-2/5 lg:w-4/5 px-2 lg:px-0">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-10">
          <div className="flex items-center">
            <Image
              alt="Abhik Ghosh"
              height={24}
              width={24}
              src="/images/site/profile1.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Abhik Ghosh / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCount slug={frontMatter.slug}/>
          </p>
        </div>
        <div className="prose lg:prose-xl dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="mt-8">
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {/* <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `} */}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
        <div className="w-full flex justify-center my-10"><div className="w-1/2 border-b-4 dark:border-gray-600 border-gray-200"></div></div>
        
        <div className="w-full"><LikeButton slug={frontMatter.slug} contentType={'blog'}/></div>
        
      </article>
  );
}