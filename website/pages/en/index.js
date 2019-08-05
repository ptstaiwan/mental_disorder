/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig}/>
        </div>
      </SplashContainer>
    );
  }

}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Loading = () => (
      <div id="loading" className="fade"/>
    );

    const HamburgerBar = () => (
      <a className="menu-toggle rounded">
        <i className="fas fa-bars"/>
      </a>
    );

    function NumberList(props) {
      const numbers = props.numbers;

      function ListItem(props) {
        // Correct! There is no need to specify the key here:
        return <li className="sidebar-nav-item">{props.value}</li>;
      }

      const listItems = numbers.map((number) =>
        <ListItem key={number.id}
                  value={number.href}/>
      );
      return (
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#000">酒駕罪有應得</a>
          </li>
          {listItems}
        </ul>
      );
    }

    const numbers = [{id: 1, href: <a className="js-scroll-trigger" href="#01">前言</a>}, {
      id: 2,
      href: <a className="js-scroll-trigger" href="#02">人物一</a>
    }, {id: 3, href: <a className="js-scroll-trigger" href="#03">人物二</a>}];

    const SideBar = () => (
      <nav id="sidebar-wrapper">
        <NumberList numbers={numbers}/>
      </nav>
    );


    const BannerTitle = () => (
      <div id="BannerTitle">

        <img src= "http://localhost:3000/newslab-demo/img/c1c.png" alt="text" className="textImg c1"/>
        <img src= "http://localhost:3000/newslab-demo/img/c2c.png" alt="text" className="textImg c2"/>
        <img src= "http://localhost:3000/newslab-demo/img/c3c.png" alt="text" className="textImg c3"/>
        <img src= "http://localhost:3000/newslab-demo/img/c4c.png" alt="text" className="textImg c4"/>
        <img src= "http://localhost:3000/newslab-demo/img/c5c.png" alt="text" className="textImg c5"/>
      </div>
    );

    const Test1image = () => (
      <Block id="Test1image" layout="threeColumn" background="light" align="left" id="02">
        {[
          {
            title: '李先生: 。',
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            image: `${baseUrl}img/respondent1.JPG`,
            imageAlign: 'right'
          },
        ]}
      </Block>
    );
    const Test1Pagetitle = () => (
      <Block id="Test1Pagetitle" layout="Column" background="light" align="left">
        {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
          },
        ]}
      </Block>
    );

    const Video1 = () => (
      <div id="Video1" className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6c7T-q6PGDU" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    );

    const Test1Page = () => (
      <Block id="Test1Page" layout="Column" background="light" align="left">
        {[
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            title: '',
          },
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            title: '',
          },
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            title: '',
          }
        ]}
      </Block>
    );

    const Test2image = () => (
      <Block id="Test2image" layout="threeColumn" background="light" id="03">
        {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            image: `${baseUrl}img/respondent2.JPG`,
          },
        ]}
      </Block>
    );

    const Test2Pagetitle = () => (
      <Block id="Test2Pagetitle" layout="Column" background="light" align="left">
        {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
          },
        ]}
      </Block>
    );


    const Video2 = () => (
      <div id="Video2" className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6c7T-q6PGDU" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    );

    const Test2Page = () => (
      <Block id="Test2Page" layout="Column" background="light" align="left">
        {[
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            title: '',
          },
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            title: '',
          },
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            title: '',
          }
        ]}
      </Block>
    );


    return (
      <div className="landingPage">
        <Loading/>
        <HamburgerBar/>
        <SideBar/>
        <div className="mainContainer">
          <BannerTitle/>
          <Test1image/>
          <Video1/>
          <Test1Pagetitle/>
          <Test1Page/>
          <Test2image/>
          <Video2/>
          <Test2Pagetitle/>
          <Test2Page/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
