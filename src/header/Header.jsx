import './header.css';

export default function Header() {
    return (
        <div className="header">
            <div className='headerTitles'>
                <span className='headerTitleSm'>React & node</span>
                <span className='headerTitleSLg'>Blog</span>
            </div>
            <img className='headerImg' src='https://images.pexels.com/photos/87611/sun-fireball-solar-flare-sunlight-87611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
        </div>
    )
}