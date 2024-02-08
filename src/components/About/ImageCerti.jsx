
const ImageCerti = ({ImageCertificado, href}) => {
  return (
    <a href={href} className='bg-white' rel="noopener noreferrer" target="_blank">
        <img src={ImageCertificado} className='w-auto' alt="imagen de certificación" />
    </a>
  )
}

export default ImageCerti