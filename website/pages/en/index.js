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

    const Description = () => (
      <Block background="light">
        {[
          {
            content: '民國88年之前，酒駕只能依《道路交通管理處罰條例》處以罰鍰。 直到88年正式入罪化，法條頒布初期，法官認為酒駕案件只是因酒肇事， 不算是罪大惡極的行為，都是從輕判處罰金了事，使酒駕不減反增。 一直到100年在刑法中新增酒駕致死傷的刑責，以及102年明定酒測值上限後，才有效降低了死傷人數。',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: '酒駕入刑法後的影響',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="threeColumn" background="light">
        {[
          {
            content: '你認為這是好事？還是警訊呢？酒駕在台灣一直都是備受關注的議題，108年3月和5月分別通過了《道路交通管理處罰條例》以及《刑法》修正案，讓酒駕的代價又更重了。常說重罰是為了嚇阻犯罪，那為什麼酒駕的問題「感覺上」還是那麼嚴重？',
            image: `${baseUrl}img/hero-image-visual@2x.png`,
            imageAlign: 'left',
            title: '108年3月 酒駕已經成為台灣的入監原因前三名了',
          }
        ]}
      </Block>
    );

    const Test = () => (
      <Block layout="threeColumn" background="dark">
        {[
          {
            title: '李先生: 別再姑息任何一個酒駕的人。',
            content: '反酒駕聯盟自107年1月成立，持續針對酒駕修法進行倡議，創辦人李先生表示，因為酒駕的刑責太輕，才讓心懷僥倖的酒駕者滿街跑。',
            image: `${baseUrl}img/a@2x.png`,
            imageLink: `${baseUrl}docs/story1`,
          },
          {
            title: '林先生: 我支持酒駕未肇事無罪化。',
            content: '林先生指出一般肇事可以和解、不起訴，酒駕沒肇事卻要強制公訴，有失公允。他認為，造成這種「差別待遇」的原因，跟人民輿論、媒體報導有很大的關係。',
            image: `${baseUrl}img/b@2x.png`,
            imageLink: `${baseUrl}docs/story1`,
          },
          {
            title: '黃小姐: 我爸爸是40年酒駕慣犯。',
            content: '黃小姐的父親從國中開始做工，養成喝酒的習慣，如今病痛纏身卻已離不開酒。加上生活在交通不便的偏鄉，難免需要開車移動，結果就成為了天天酒駕的未爆彈。',
            image: `${baseUrl}img/c@2x.png`,
            imageLink: `${baseUrl}1ocs/story1`,
          }
        ]}
      </Block>
    );

    return (
      <div className="landingPage">
        <div className="mainContainer">
          <Features />
          <Test />
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
