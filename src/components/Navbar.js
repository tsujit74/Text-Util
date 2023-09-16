export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid" >
                <a className="navbar-brand" href="/" >TextUitils</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="navbar-brand" type="button" aria-current="page" href="/">Home</a>
                        </li>
                    </ul> */}
                    <div className="form-check form-switch" onClick={props.toogleMode} style={{ float: 'right',color:'black',fontWeight:'900',backgroundColor:'rgb(226, 225, 230)' }} >
                        <input className="form-check-input " onClick={props.toogleMode} type="checkbox" id="flexSwitchCheckDefault" style={{ cursor: 'pointer', }} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
                </div>
            {/* </div> */}
        </nav>
    )
}
