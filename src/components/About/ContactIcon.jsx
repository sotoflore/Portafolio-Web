
const ContactIcon = ({children, text}) => {
  return (
    <p className="text-base text-start inline-flex items-center text-gray-400 mb-3">
        <span className='bg-white p-2 rounded'>{children}</span>
        <span className='ps-2 text-sm'>{text}</span>
    </p>
  )
}
export default ContactIcon;