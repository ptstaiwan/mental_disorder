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
          <ProjectTitle siteConfig={siteConfig} />
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
      <div id="loading" className="flex aic jcc fade"/>
    );

    const HamburgerBar = () => (
      <a className="menu-toggle rounded">
        <i className="fas fa-bars" />
      </a>
      );
    const SideBar = () => (
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a  href="#000">酒駕罪有應得</a>
          </li>
          <li className="sidebar-nav-item">
            <a className="js-scroll-trigger" href="#01">前言</a>
          </li>
          <li className="sidebar-nav-item">
            <a className="js-scroll-trigger" href="#02">人物一</a>
          </li>
          <li className="sidebar-nav-item">
            <a className="js-scroll-trigger" href="#03">人物二</a>
          </li>
        </ul>
      </nav>
    );

    const BannerTitle = () => (
      <Block layout="threeColumn" background="light" className="BannerTitle" id="000">
      {[
          {
            title: '酒駕罪有應得？！',
          }
  ]}
  </Block>
  );

    const Banner = () => (
      <Block layout="Column" background="light" id="00">
      {[
          {
            content: '點擊觀看故事',
            image: `${baseUrl}img/respondent1.JPG`,
            imageLink: `${baseUrl}#02`
          },
          {
            content: '點擊觀看故事',
              image: `${baseUrl}img/respondent2.JPG`,
            imageLink: `${baseUrl}#03`
          }
          ]}

      </Block>
  );
    const Features = () => (
      <Block layout="Column" background="dark" id="01">
        {[
          {
            content: '你認為這是好事？還是警訊呢？酒駕在台灣一直都是備受關注的議題，108年3月和5月分別通過了《道路交通管理處罰條例》以及《刑法》修正案，讓酒駕的代價又更重了。常說重罰是為了嚇阻犯罪，那為什麼酒駕的問題「感覺上」還是那麼嚴重？',
            title: '108年3月 酒駕已經成為台灣的入監原因前三名了',
          },
          {
            content: '民國88年之前，酒駕只能依《道路交通管理處罰條例》處以罰鍰。 直到88年正式入罪化，法條頒布初期，法官認為酒駕案件只是因酒肇事， 不算是罪大惡極的行為，都是從輕判處罰金了事，使酒駕不減反增。 一直到100年在刑法中新增酒駕致死傷的刑責，以及102年明定酒測值上限後，才有效降低了死傷人數。',
              title: '酒駕入刑法後的影響',
          }
          ]}
      </Block>
  );

    const Test1image = () => (
      <Block layout="threeColumn" background="light" align="left" id="02">
      {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            image: `${baseUrl}img/respondent1.JPG`,
            imageAlign: 'right'
          },
  ]}
  </Block>
  );
    const Test1Pagetitle = () => (
      <Block layout="Column" background="light" align="left">
      {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
          },
      ]}
      </Block>
  );

    const Video1 = () => (
      <div id="video1" className ="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6c7T-q6PGDU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    );

    const Test1Page = () => (
      <Block layout="Column" background="light" align="left">
      {[
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
          },
    {
      content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
    },
    {
      content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
    }
  ]}
      </Block>
      );

    const Test2image = () => (
      <Block layout="threeColumn" background="light" id="03">
      {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            image: `${baseUrl}img/respondent2.JPG`
          },
  ]}
  </Block>
  );

    const Test2Pagetitle = () => (
      <Block layout="Column" background="light" align="left">
      {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
          },
  ]}
  </Block>
  );


    const Video2 = () => (
      <div id="video1" className ="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6c7T-q6PGDU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    );

    const Test2Page = () => (
      <Block layout="Column" background="light" align="left">
      {[
          {
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
          },
          {
              content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
          },
          {
              content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
          }
  ]}
  </Block>
  );


    return (
      <div className="landingPage">
        <Loading />
        <HamburgerBar />
        <SideBar />
        <div className="mainContainer">
          <BannerTitle />
          <Banner />
          <Features />
          <Test1image />
          <Video1 />
          <Test1Pagetitle />
          <Test1Page />
          <Test2image />
          <Video2 />
          <Test2Pagetitle />
          <Test2Page />
        </div>
      </div>
    );
  }
}

module.exports = Index;
