const Navbar=({setCategory})=>{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" onClick={()=>setCategory('technology')}>Technology</a>
      </div>
      <div className="navbar-nav">
        <a className="nav-link" onClick={()=>setCategory('business')}>Business</a>
      </div>
      <div className="navbar-nav">
        <a className="nav-link" onClick={()=>setCategory('science')}>Science</a>
      </div>
      <div className="navbar-nav">
        <a className="nav-link" onClick={()=>setCategory('health')}>Health</a>
      </div>
      <div className="navbar-nav">
        <a className="nav-link" onClick={()=>setCategory('entertainment')}>Entertaiment</a>
      </div>
      <div className="navbar-nav">
        <a className="nav-link" onClick={()=>setCategory('sports')}>Sports</a>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Navbar
