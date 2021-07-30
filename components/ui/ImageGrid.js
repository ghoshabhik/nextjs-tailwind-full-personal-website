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
          {/* <Image 
            src={doc.url500}
            width={800}
            height={400}
            className="rounded border border-gray-700 cursor-pointer"
            alt=""
            /> */}
            <div style={{
                position: 'relative',
                height: 0,
                paddingTop: `${( 500 / 800 ) * 100}%`,
                backgroundImage: `url(${doc.url500})`,
                backgroundPosition: 'center center',
                backgroundSize: `100%`
              }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0
              }}>
                <Image
                  src={doc.url}
                  alt="Galaxy"
                  width={800}
                  height={500}
                  unoptimized={true}
                  className="rounded border border-gray-700 cursor-pointer"
                />
              </div>
            </div>
            </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;