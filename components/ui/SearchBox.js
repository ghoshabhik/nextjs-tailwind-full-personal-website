import { MdSearch } from "react-icons/md"; 


const SearchBox = ({handleType, placeholder}) => {

    return (
        <div className="bg-white dark:bg-gray-700 shadow flex">
                <span className="w-auto flex justify-end items-center text-gray-500 p-2">
                    <MdSearch className="material-icons text-3xl"/>
                </span>
                <input className="w-full rounded p-2 focus:ring-0 bg-white dark:bg-gray-700" type="text" placeholder={'Search '+placeholder} onChange={e => handleType(e)}/>
                {/* <button className="bg-gray-600 hover:bg-gray-300 rounded text-white p-2 pl-4 pr-4">
                        <p className="font-semibold text-xs">Search</p>
                </button> */}
            </div>
    )
}

export default SearchBox
