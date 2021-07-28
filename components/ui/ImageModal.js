import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ImageModal = ({ setSelectedImg, selectedImg }) => {
  console.log(setSelectedImg.height, setSelectedImg.width)
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-80" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={selectedImg.url} alt="enlarged pic" className="block lg:max-w-6/10 lg:max-h-8/10 my-20 mx-auto"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      {/* <motion.div 
      className="block lg:max-w-6/10 lg:max-h-8/10 my-20 mx-auto"
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}>
        <Image
        src={selectedImg.url}
        width={selectedImg.width}
        height={selectedImg.height}
        layout="responsive"
        
        className="rounded border border-gray-700 cursor-pointer"
        alt=""
        />
      </motion.div> */}
      
    </motion.div>
  )
}

export default ImageModal;