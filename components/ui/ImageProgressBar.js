import { useEffect } from 'react';
import useStorage from '../../firebase/useStorage';
import { motion } from 'framer-motion';

const ImageProgressBar = ({ file, setFile, size }) => {
  const { progress, url } = useStorage(file, size);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar h-2 bg-purple-500 mt-5"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ImageProgressBar;