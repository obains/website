import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-database"> 
      </span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Oliver Bains</h1>

      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}>
            About
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}>
            Contact
          </button>
        </li>
      </ul>
    </nav>

    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('covid')
            }}>
            COVID-19
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('rpi-greenhouse')
            }}>
            Greenhouse
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('sentiment-analysis')
            }}>
            Sentiment
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('munich')
            }}>
            Munich
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              props.onOpenArticle('other')
            }}>
            Other
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
