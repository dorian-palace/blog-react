import './topbar.css';

export default function TopBar(){
    return (
        <div className='top'>
            <div className='topLeft'>
            <i className= "topIcon fa-solid fa-poo"></i>
            <i className= "topIcon fa-solid fa-poo"></i>
            <i className= "topIcon fa-solid fa-poo"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>CONTACT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImg' src='https://images.pexels.com/photos/112784/pexels-photo-112784.jpeg'></img>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}