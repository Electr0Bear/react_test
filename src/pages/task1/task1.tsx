import Header from '../../components/header/header'

export default function Task1() {
  return(
    <div className='page'>
      <Header />
      <main className='page__main'>
        <div className="container">
          <div className="intro">
            <h1 className='intro__title title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>
            <ul className="intro__res-list list">
              <li className='intro__res-item'>
                <div className="res-card">
                  <p className='res-card__text'>360p</p>
                </div>
              </li>
              <li className='intro__res-item'>
                <div className="res-card">
                  <p className='res-card__text'>720p</p>
                </div>
              </li>
              <li className='intro__res-item'>
                <div className="res-card">
                  <p className='res-card__text'>HD</p>                  
                </div>
              </li>
              <li className='intro__res-item'>
                <div className="res-card">
                  <p className='res-card__text'>FHD</p>
                </div>
              </li>
              <li className='intro__res-item'>
                <div className="res-card">
                  <p className='res-card__text'>4k</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="page__section">
            <ol className='list list--numbered'>
              <li className='list__item'>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </li>
              <li className='list__item'>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li className='list__item'>
                <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </div>
  )
}
