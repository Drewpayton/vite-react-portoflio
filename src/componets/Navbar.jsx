import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css'
import userimg from '../assets/userimg.png'
import githubimg from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'
import userIcon from '../assets/user.png'
import letterIcon from '../assets/letter.png'
import resumeIcon from '../assets/resume.png'
import programmingIcon from '../assets/web-programming.png'


export default function Navbar() {
  return (
    <div className="sidenav">
      <h3 class="text-white">Drew Payton</h3>
      <img id="sidebarPortrait" src={userimg} alt="standard img of default user" />
      <p>Hello, my name is Drew Payton and I am a software engineer. Welcome to my portfolio</p>
      <div className='socials'>
        <a href="https://github.com/Drewpayton" target="_blank" title="Drew's Github"><img src={githubimg} alt="Github Image icon" className='invert'/></a>
        <a href="https://www.linkedin.com/in/drewpayton2018/" target="_blank" className='text-white'><img src={linkedinIcon} alt="" className='invert'/></a>
      </div>
      <div className='sideNavInfo'>
        <a href="#" className='text-white'><img src={userIcon} alt="" className='invert'/>About Me</a>
        <a href="#" className='text-white'><img src={programmingIcon} alt="" className='invert'/>Portfolio</a>
        <a href="#" className='text-white'><img src={resumeIcon} alt="" className='invert'/>Resume</a>
        <a href="#" className='text-white'><img src={letterIcon} alt="" className='invert'/>Contact</a>
      </div>
    </div>
  );
}
