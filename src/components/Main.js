import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/profile.jpg'
import pic04 from '../images/Density.png'
import pic05 from '../images/munichmap.png'
import pic06 from '../images/bestchoices.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Oliver Bains</h2>
          <span className="image rightnopad">
            <img src={pic03} />
          </span>
          <h2 className="minor">About</h2>
            <p>
            Highly skilled in data analysis, I keep a focus on continuous self-education with a particular interest in automation, data-analysis, and sustainability.
            <br></br>
            <br></br>
            I use Python and R to solve problems at work, to provide and track metrics, and to create custom intergrations between systems in order to better link data.
            <br></br>
            <br></br>
            At home, I continue my journey to learn by using data driven approaches to solve (sometimes silly) questions or issues.
            </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Projects</h2>
          <h3>Munich: where to stay?</h3>
          <span className="image main">
            <img src={pic05} alt="" />
          </span>
          <p>
            I'm going to watch Germany play at UEFA EURO 2020, but have never been to Munich before. 
            My criteria for a couple of nights stay were that the place should be reasonably priced,
            a full appartment and not a single room, whilst also being close to the public transport line needed to get to the stadium.
            Rather than manually search through all of Airbnb and suffer through the mountain of data, I used Python to do my own data-driven analysis.
          </p>
          <p>
            Click <a href="https://obains.github.io/bookableairbnbs.html">here</a> and <a href="https://obains.github.io/bestchoices">here</a> to view my interactive maps (hover, scroll, and zoom for more information). 
          Check out the code by clicking the below button:
          <br></br><br></br>
          <ul className="iconsinline">
            <li>
              <a href="https://github.com/obains/airbnb" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
          </ul>
          </p>
          <span className="image main">
            <img src={pic06} alt="" />
          </span>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>You can get in contact with me either through <a href="mailto:oliverbains&#64;gmx&period;de?Subject=Website%20request"> email </a>
          or through the below icons.
          </p>
          <ul className="icons">
            <li>
              <a href="https://www.linkedin.com/in/oliver-bains/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/obains"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
