import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import Main from "./components/main";
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white', }} to="/">Growologie</Link>} scroll>
            {/* <Navigation>
              <Link ripple to="/process">Process</Link>
              <Link ripple to="/projects">Projects</Link>
              <Link ripple to="/resume">Resume</Link>
              <Link ripple to="/contact">Contact</Link>
            </Navigation> */}
          </Header>
          <Content>
            <div className="page-content" />
            {/* <Main></Main> */}
          </Content>
          <Footer size="mini">
            {/* <FooterSection type="middle">
              <FooterDropDownSection title="Features">
                <FooterLinkList>
                  <a href="#">About</a>
                  <a href="#">Terms</a>
                  <a href="#">Partners</a>
                  <a href="#">Updates</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="Details">
                <FooterLinkList>
                  <a href="#">Specs</a>
                  <a href="#">Tools</a>
                  <a href="#">Resources</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="Technology">
                <FooterLinkList>
                  <a href="#">How it works</a>
                  <a href="#">Patterns</a>
                  <a href="#">Usage</a>
                  <a href="#">Products</a>
                  <a href="#">Contracts</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="FAQ">
                <FooterLinkList>
                  <a href="#">Questions</a>
                  <a href="#">Answers</a>
                  <a href="#">Contact Us</a>
                </FooterLinkList>
              </FooterDropDownSection>
            </FooterSection> */}
            <FooterSection type="left" logo="Growologie, LLC © 2020" style={{ color: 'white',}}>
              <FooterLinkList>
                <FontAwesomeIcon icon={['fab', 'google']} />
                <a href="#">About</a>
                <a href="#">Career</a>
                <a href="#">Newsroom</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;