import React from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function Footer() {
  const [isVisible, setIsVisible] = React.useState(false);
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    { isVisible && <button 
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className='fixed z-1000 bottom-6 right-6 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors'>
      <KeyboardDoubleArrowUpIcon />
    </button>}
    </>
  )
}
