import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/profile.jpg'
import pic05 from '../images/munichmap.png'
import pic06 from '../images/bestchoices.png'
import pic07 from '../images/sentimentanalysis.png'
import pic08 from '../images/binnedcertainty.png'

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

          <h3>Sentiment Analysis: Liverpool Football Club and Adriàn</h3>
          <p>Topics: Machine Learning, Naive Bayes, Web Scraping, Data Cleaning, Data Analysis, Graphical Visualisation</p>
          <span className="image main">
            <img src={pic07} alt="" />
          </span>
          <p>
            I'm a big football fan, having followed Liverpool Football Club since I was a young boy. I have also worked for an Operations Company doing Digital Advertising 
            at Champions League matches and I know the magic that goes on there. As such, I try to watch every Champions League match of Liverpool which I can.
            <br></br>
            <br></br>
            Unfortunately the latest tie in March 2020 was against Athletico Madrid, where our goalkeeper made a big mistake in extra-time, which ultimately cost us the game.
            At first, I too was angry at the goalie, Adriàn, but this quickly gave way.
            I was interested to see how other fans perceived the incident and how or if this changed over time.
            <br></br>
            <br></br>
            As such, I scraped twitter to collect information, which I could use to analyse sentiment towards Adriàn through the medium of tweets.
            <br></br>
            <br></br>
            As expected, there was a large amount of negative sentiment towards him after the mistake. 
            Interestingly, there was also a lot of negative sentiment even before the incident occurred.
          </p>
          <p> 
          Check out the full code and analysis by clicking the below button:
          <br></br><br></br>
          <ul className="iconsinline">
            <li>
              <a href="https://github.com/obains/sentiment-analysis-adrian/blob/master/sentiment-analysis/sentiment_analysis_adrian.ipynb" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
          </ul>
          </p>
          <span className="image main">
            <img src={pic08} alt="" />
          </span>
          <h3>Munich: where to stay?</h3>
          <p>Topics: Data Cleaning, Data Analysis, Cartological Visualisation</p>
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
          <br></br><br></br>
          <h3>This website</h3>
          <p>
            This website was created using Gatsby.JS.
          </p>
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
          <p>You can get in contact with me either through <a href="mailto:oliverbains&#64;gmx&#x2E;de?Subject=Website%20request"> email </a>
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
