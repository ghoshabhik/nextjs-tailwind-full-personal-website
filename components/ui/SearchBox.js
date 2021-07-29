import { MdSearch } from "react-icons/md"; 


const SearchBox = ({handleType, placeholder}) => {

    return (
        <div className="relative shadow-sm rounded">
                {/* <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                    <MdSearch className="material-icons text-3xl"/>
                </span> */}
                <input className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" type="text" placeholder={'Search '+placeholder} onChange={e => handleType(e)}/>
                <svg
                className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
                </svg>
                {/* <button className="bg-gray-600 hover:bg-gray-300 rounded text-white p-2 pl-4 pr-4">
                        <p className="font-semibold text-xs">Search</p>
                </button> */}
            </div>
    )
}

export default SearchBox
