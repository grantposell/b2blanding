import React, { Component } from 'react';
import { Layout, Header, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import './App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header class="header-color" title={<Link class="link" to="/">Growologie</Link>} scroll>
          </Header>
          <Content style={{ backgroundColor: '#f4f4f4' }}>
          </Content>
          <Footer size="mini" style={{ backgroundColor: 'black' }}>
            <FooterSection type="left" style={{ color: 'white', }}>
              <FooterLinkList>
                <a href="#">Growologie © 2020</a>
                <a href="#">Careers</a>
                {/* <a href="#">Newsroom</a> */}
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