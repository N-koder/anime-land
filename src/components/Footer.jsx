import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa6"

const socialhandlelinks = [
  {href : 'https://discord.com' , icon : <FaDiscord/>},
  {href : 'https://twitter.com' , icon : <FaTwitter/>},
  {href : 'https://github.com' , icon : <FaGithub/>},
  {href : 'https://twitch.com' , icon : <FaTwitch/>}
]

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-4 text-violet-300">

      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4'>

        <p className='text-center  text-sm md:text-left font-light'>
          &copy; Neon2024. All right reserved
        </p>

        <div className='flex justify-center md:justify-start gap-4'>
          {socialhandlelinks.map((link, index) => (
            <a key = {index} href = {link.href} target='_blank' rel='noopener noreferrer' className="text-violet-300 transistion-colors hover:text-white duration-500 ease-in-out ">{link.icon}</a>
          ))}
        </div>

        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
      </div>

    </footer>
  )
}

export default Footer