import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export const Location = () => {
  return (
    <section id="location" className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Our Location</h2>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-200 h-96 mb-8 rounded-lg">   <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.7101315556877!2d-4.626955517611168!3d36.54746858246656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e238b7c175c3%3A0x6836a11433c7f2e!2sClinica%20Dental%20%22El%20Tejar%22!5e1!3m2!1ses-419!2sar!4v1733597951856!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe></div>
        <div className="text-center">
          <p className="flex items-center justify-center mb-2">
            <FaMapMarkerAlt className="mr-2" /> 123 Industrial Avenue, Business District
          </p>
          <p className="flex items-center justify-center mb-2">
            <FaPhone className="mr-2" /> +1 (555) 123-4567
          </p>
          <p className="flex items-center justify-center">
            <FaEnvelope className="mr-2" /> info@toolco.com
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
