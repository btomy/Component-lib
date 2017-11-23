import React from 'react'

class SideNav extends React.Component {
    render() {
        return(
            <nav className="main-content__sidebar side-nav side-nav--levels-3 side-nav--no-child" data-track-zone="side-nav">
                    <h2 className="side-nav__heading"><a href="#!" aria-controls="section-nav-list" aria-expanded="false"><span className="screenreader">Show</span> In this section</a></h2>
                    <h2><a href="#">Family</a></h2>	     
            
                <ul className="side-nav__ul--level1">
            
                <li className="o-media">
            
                <a href="#">
                    <div className="o-media__media">
                    <i className="icon-guillemet-right side-nav__current__icon" aria-hidden="true"></i>
                    </div>
                    <div className="o-media__body">
                    Living together, marriage and civil partnership
                    </div>
                </a>
            
                <ul className="side-nav__ul--level2">
            
                <li className="o-media">
            
                <a className="side-nav__current">
                    <div className="o-media__media">
                    <i className="icon-guillemet-right side-nav__current__icon" aria-hidden="true"></i>
                    </div>
                    <div className="o-media__body">
                    Getting married
                    </div>
                </a>
            
                </li>
            
                <li className="o-media">
            
                <a href="#">
                    <div className="o-media__media">
                    <i className="icon-guillemet-right side-nav__current__icon" aria-hidden="true"></i>
                    </div>
                    <div className="o-media__body">
                    Living together and marriage: legal differences
                    </div>
                </a>
            
                </li>
            
                <li className="o-media">
            
                <a href="#">
                    <div className="o-media__media">
                    <i className="icon-guillemet-right side-nav__current__icon" aria-hidden="true"></i>
                    </div>
                    <div className="o-media__body">
                    Registering a civil partnership
                    </div>
                </a>
            
                </li>
            
                <li className="o-media">
            
                <a href="#">
                    <div className="o-media__media">
                    <i className="icon-guillemet-right side-nav__current__icon" aria-hidden="true"></i>
                    </div>
                    <div className="o-media__body">
                    Living together and civil partnership - legal differences
                    </div>
                </a>
            
                </li>
            
                </ul>
            
                </li>
            
                </ul>
    
             </nav>
        )
    }
}


export default SideNav;
