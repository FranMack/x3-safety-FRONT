import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsUpButton = () => {
  return (
    <Link
    title='WhatsApp'
    href="https://wa.me/5493417459785"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-[2%] right-[2%] bg-green-500 text-white p-[4%] md:p-[1%] rounded-full shadow-lg hover:bg-green-600 z-50 hover:scale-110 transition-transform duration-500"
  >
    <FaWhatsapp className='text-[3rem]' />
  </Link>
  )
}
