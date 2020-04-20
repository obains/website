import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic03 from '../images/profile.jpg'
import pic06 from '../images/bestchoices.png'
import pic07 from '../images/sentimentanalysis.png'
import pic08 from '../images/binnedcertainty.png'
import pic09 from '../images/munichmap.png'


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
          id="covid"
          className={`${this.props.article === 'covid' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">COVID-19: what do the stats say?</h2>
          <p>
          Nearly everyone is sitting at home these days. Most people I know have a dashboard full of COVID-19 stats bookmarked in their browser - they want to follow the latest developments and inform themselves about the danger of the virus. Of course, they also want to know when things will “get back to normal”.
          </p>
          <p>
          I set out to make my own dashboard with some goals in mind:
          <li>How can I avoid misleading statistics in order to inform others of what the current situation is?</li>
          <li>What information can I present to inform those in Germany about the situation?</li>
          <li>How can I present this in a beautiful way?</li>
          </p>
          <p>
          Too often graphics are shared about the current crisis with little to no information to help us understand what is actually going on with the data. This can lead at best to confused viewers and at worst to a spread of misinformation. 
          "Misleading" visualisations from an analytical stand point don’t crop up too much currently, but there are of course exceptions. What does the below graphic tell us? It seems that hundreds of thousands of old people in the UK are dying due to an extremely high case mortality ratio (<a href="https://www.bbc.com/news/world-51712437">here</a>).
          However, the scale has been set so that a 15% mortality rate is the maximum, over-inflating the visualisation scale and perhaps misinforming those skipped over the scale.  
          <br></br>
          <br></br>
          <img src="https://ichef.bbci.co.uk/news/624/cpsprodpb/F197/production/_111074816_death_ratio-nc.png" width="400px"></img>
          <br></br>
          <br></br>
          More frequent is confusion due to a lack of explanation. What’s the difference between the below visualisations for example? How does it effect our understanding of the rate of growth?
          <br></br>
          <br></br>
          <img src="https://specials-images.forbesimg.com/imageserve/5e7901eb10380d0006fbddb8/960x0.jpg?fit=scale" width="360" height="300"></img>
          <img src="https://specials-images.forbesimg.com/imageserve/5e79023a10380d0006fbddc7/960x0.jpg?fit=scale" width="360" height="300"></img>
          <br></br>
          <br></br>
          Briefly summarised - the infection rate takes an exponential curve, meaning that the more people who get it, the greater the rate they pass it on to others. So 1 person can infect 2, these 2 people can infect 4 total (2 each) and so on. 
          So why do we have graphs such as the second one that don’t show this? Well, another method is to show the logarithmic curve of infection rate. The “log” is the inverse of the exponential. If maths is not your thing then don’t worry - all you need to know is that infection rate graphs based on logarithms enable you to more easily visualise the rate of infection in a way that tells you if it is slowing or quickening. 
          </p>
          <p>
          When I started out this project, I wanted to dive into a more micro level and provide at least a breakdown of cases per <i>Bundesland</i> in Germany, at most per <i>Bezirk</i>. 
          But this proved to not be so easy. Why?
          To all conspiracy theorists out there - the data is published by the authorities, this is not a made up crisis by “big government”. However, in many areas, the data is released only per day. Take the numbers from my home city Berlin, for example (find them by clicking <a href="https://www.berlin.de/lageso/gesundheit/infektionsepidemiologie-infektionsschutz/corona/tabelle-bezirke/"> here</a>). 
          We receive data on a level of granularity of the Bezirk, informing us about the reported infections, rate of change in the number of reported infections, and how many people have been deemed to have “recovered completely” from the virus. 
          Yet the problem is, the Berlin government releases these numbers once a day, overwriting the figures from the previous day. 
          A simple web scraper could grab this data automatically; that is not the issue. 
          However, what happens for those who start the project too late? If you missed even a couple of days in setting up this automatic data scrape (I’m very guilty of this), then it’s too late. 
          You can of course receive figures from all future days, but it won’t show the whole picture and I want to try avoid misinformation or a skewed picture here. 
          </p>
          <p>
          This is a problem. 
          </p>
          <p>
          In the end, I decided to omit this data from my visualisation, instead favouring an accurate representation without missing data. Historical data on the crisis should be open for those who want to view it, for those who want to build dashboards from it, and of course for those who want to help test modelling of the crisis so that we can understand more about what the future holds for us. 
          A shoutout to <a href="https://ourworldindata.org/"> OWID</a> who have published all their research and data, so that others may freely use it for projects such as these (without having to set up a web scrape from day one). 
          </p>
          <p>
          Enough talking - enjoy the graphics! If for any reason you need to reach out to me, feel free!
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
          <span className="image main">
            <img src={pic08} alt="" />
          </span>
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
          <h3>Munich: where to stay?</h3>
          <p>Topics: Data Cleaning, Data Analysis, Cartological Visualisation</p>
            <span className="image main">
              <img src={pic09} alt="" />
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
