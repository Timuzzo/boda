"use client"

const Map = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789012!2d-75.5491873!3d6.1269428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683025af66275%3A0x8a86f02b69e6d0aa!2sF%C3%A1bula%20Bodas%20%26%20Eventos!5e0!3m2!1sen!2sco!4v1234567890!5m2!1sen!2sco"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Wedding Venue Location"
      ></iframe>
    </div>
  )
}

export default Map 