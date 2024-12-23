import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'

export const WhatsUpButton = () => {
  return (
    <Link
    href="https://wa.me/1234567890"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-[2%] right-[2%] bg-green-500 text-white p-[1%] rounded-full shadow-lg hover:bg-green-600 z-50"
  >
    <FaWhatsapp className='text-[3rem]' />
  </Link>
  )
}
