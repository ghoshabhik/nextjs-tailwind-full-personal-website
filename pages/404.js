import Link from 'next/link';


export default function NotFound() {
  return (
      <div className="flex flex-col justify-center items-center max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          oh, that page you are looking for is not there yet...
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Can you double check
          that URL? The spelling could be wrong...
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Return Home
          </a>
        </Link>
      </div>
  );
}