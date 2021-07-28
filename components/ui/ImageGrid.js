import useFirestore from '../../firebase/useFirestore';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  // console.log(docs)

  return (
    <div className="img-grid mx-5 my-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {docs && docs.map(doc => (
        <motion.div className="img-wrap overflow-hidden h-72 relative opacity-80" key={doc.id} 
          layout
          whileHover={{ opacity: 1 }}s
          onClick={() => setSelectedImg(doc)}
        >
          {/* <motion.img src={doc.url} alt="uploaded pic" className="rounded border border-gray-700 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          /> */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}>
          <Image 
            src={doc.url}
            width={800}
            height={400}
            className="rounded border border-gray-700 cursor-pointer"
            alt=""
            /></motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;