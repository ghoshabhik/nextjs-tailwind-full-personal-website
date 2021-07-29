import UploadForm from '../components/ui/UploadForm';
import ImageGrid from '../components/ui/ImageGrid';
import ImageModal from '../components/ui/ImageModal';

import { useUser } from '../firebase/useUser'

import {useState, useEffect} from 'react';

export default function Photography() {

  const [selectedImg, setSelectedImg] = useState(null);
  const [loggedInUserClaims, setLoggedInUserClaims] = useState(null);
  const { user } = useUser()

  useEffect(() => { 
    if(user){
      setLoggedInUserClaims(user?.adminClaims)
    }
  }, [user])

  
  return (
    <div >
      <main className="">
      <div className="m-5 text-center">
          <p className="text-4xl font-bold mb-3">My Photography Page</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">This is probably my favourite hobbies. Here are some of my photographs</p>
        </div>
        {user && loggedInUserClaims == 'Site Admin' && <UploadForm />}
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
        <ImageModal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
       </main>
    </div>
  )
}
