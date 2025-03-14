import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className='rounded-2xl bg-black-100'
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[100px] flex justify-between items-center flex-wrap gap-5`}>
        <div>
          <p className='text-white font-bold text-[24px]'>Niharika Dubey</p>
          <p className='mt-1 text-secondary'>Infrastructure Engineer</p>
        </div>
        
        <div className='flex gap-5'>
          <a
            href="https://github.com/nihharikadubey"
            target="_blank"
            rel="noopener noreferrer"
            className='transition-colors text-secondary hover:text-white'
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nihharikadubey"
            target="_blank"
            rel="noopener noreferrer"
            className='transition-colors text-secondary hover:text-white'
          >
            LinkedIn
          </a>
          <a
            href="mailto:niharika859@gmail.com"
            className='transition-colors text-secondary hover:text-white'
          >
            Email
          </a>
        </div>
      </div>
      
      <div className='flex justify-center items-center py-5 w-full'>
        <p className='text-secondary text-[14px]'>
          © {new Date().getFullYear()} Niharika Dubey. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
