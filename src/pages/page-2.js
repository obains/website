import React from 'react'
import Iframe from 'react-iframe'
import Layout from '../components/layout'



const SecondPage = () => (
  <Layout>
    <article
          id="covid"
        >
          <h2 className="major">COVID-19</h2>
          <h3 className="major">what do the stats say?</h3>
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
          <img src="https://ichef.bbci.co.uk/news/624/cpsprodpb/F197/production/_111074816_death_ratio-nc.png" width="50%"></img>
          <br></br>
          <br></br>
          More frequent is confusion due to a lack of explanation. What’s the difference between the below visualisations for example? How does it effect our understanding of the rate of growth?
          <br></br>
          <br></br>
          <img src="https://specials-images.forbesimg.com/imageserve/5e7901eb10380d0006fbddb8/960x0.jpg?fit=scale" width="50%" height="50%"></img>
          <img src="https://specials-images.forbesimg.com/imageserve/5e79023a10380d0006fbddc7/960x0.jpg?fit=scale" width="50%" height="50%"></img>
          <br></br>
          <br></br>
          Briefly summarised - the infection rate takes an exponential curve, meaning that the more people who get it, the greater the rate they pass it on to others. So 1 person can infect 2, these 2 people can infect 4 total (2 each) and so on. 
          So why do we have graphs such as the second one that don’t show this? Well, another method is to show the logarithmic curve of infection rate. The “log” is the inverse of the exponential. If maths is not your thing then don’t worry - all you need to know is that infection rate graphs based on logarithms enable you to more easily visualise the rate of infection in a way that tells you if it is slowing or quickening. 
          </p>
          <p>
          When I started out this project, I wanted to dive into a more micro level and provide at least a breakdown of cases per <i>Bundesland</i> in Germany, at most per <i>Bezirk</i>. 
          But this proved to not be so easy. Why?
          To all conspiracy theorists out there - the data is published by the authorities, this is not a made up crisis by “big government”. However, in many areas, the data is released only per day. Take the numbers from my home city Berlin, for example (find them by clicking <a href="https://www.berlin.de/lageso/gesundheit/infektionsepidemiologie-infektionsschutz/corona/tabelle-bezirke/"> <b style={{ color: 'lightblue' }}>here</b></a>). 
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
          A shoutout to <a href="https://ourworldindata.org/"> <b style={{ color: 'lightblue' }}>OWID</b></a> who have published all their research and data, so that others may freely use it for projects such as these (without having to set up a web scrape from day one). 
          </p>
          <p>
          Enough talking - enjoy the graphics! If for any reason you need to reach out to me, feel free!
          <br></br>The dashboard consists of six sheets (use the pages at the top to navigate) and the graphics are interactive so feel free to click around on them to find out more information.
          <br></br>Should the aspect ratio not fit your screen, feel free to check the dashboard natively by clicking <a href="https://public.tableau.com/views/COVID-19whatdothestatssaynew/COVID-19?:display_count=y&:origin=viz_share_link"> <b style={{ color: 'lightblue' }}>here</b></a>.
          </p>
              <p>
                Visualisations were created with Tabelau, data cleaning undertaken using Python. Check out the code by clicking the below button.
                <br></br><br></br>
                <ul className="iconsinline">
                  <li>
                    <a href="https://github.com/obains/COVID-19/blob/master/COVID%20Testing.ipynb" className="icon fa-github">
                      <span className="label">Github</span>
                    </a>
                  </li>
                </ul>
              </p>

          <Iframe url="https://public.tableau.com/views/COVID-19_15872949219900/COVID-19?:display_count=y&publish=yes&:toolbar=n&:origin=viz_share_link"
                id="tableau"
                width="100%"
                height="800px"
                className="tableauclass"
                display="initial"
                allowFullScreen="true"
              />
      </article>
  </Layout>
)

export default SecondPage
