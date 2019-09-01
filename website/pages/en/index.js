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
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Loading = () => (
      <div id="loading" className="fade"/>
    );

    const HamburgerBar = () => (
      <div className="menu-toggle rounded">
        <a className="hamburgerBar">
          <i className="fas fa-bars"/>
        </a>
        <i className="logoBar"/>
      </div>
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
            <a href="#BannerTitle">與精神疾病的真實距離</a>
          </li>
          {listItems}
        </ul>
      );
    }

    const numbers = [{id: 2, href: <a className="js-scroll-trigger" href="#Test1image">玉如｜與思覺失調症共處6年</a>},
      {id: 3, href: <a className="js-scroll-trigger" href="#Test2image">宗辰｜與強迫症共處15年</a>},
      {id: 4, href: <a className="js-scroll-trigger" href="#conclusion">結語｜跨越成見 拉近距離</a>}
    ];

    const SideBar = () => (
      <nav id="sidebar-wrapper">
        <NumberList numbers={numbers}/>
        <div className="share">
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fnewmedia.pts.org.tw%2Fmental_disorder%2F&amp;src=sdkpreparse" target="_blank">
            <img src="img/share_nav_fb.svg" alt="fb_share"/>
          </a>
          <a href="https://social-plugins.line.me/lineit/share?url=https%3A%2F%2Fnewmedia.pts.org.tw%2Fmental_disorder" target="_blank">
            <img src="img/share_nav_line.svg" alt="line_share"/>
          </a>
        </div>
      </nav>
    );


    const BannerTitle = () => (
      <div id="BannerTitle">
        <div className="Feature">
          <h2><p>我有病嗎？</p></h2>
          <h1><p>與精神疾病的真實距離</p></h1>
          <p>什麼是精神疾病？所謂的精神症狀距離我們究竟有多遠？宗辰曾經是咖啡店員，玉如是護理師，他們都在二十多歲發病，同一般人的外表下，他們其實已與精神症狀共處多年。</p>
        </div>
        <a href="https://newslab.pts.org.tw/">
          <img src="img/logo_m.svg" alt="logo" className="logo"/>
        </a>
        <img src="img/web_final_left.png" alt="character2" className=" character c2"/>
        <img src="img/web_final_right.png" alt="character1" className=" character c1"/>
        <div id="comment">
          <img src = "img/hand_click.svg" alt="pointer"/>
          <p>點選人物或往下閱讀</p>
        </div>
      </div>
    );

    const People1image = () => (
      <Block id="Test1image" layout="twoColumn" background="light" align="left">
        {[
          {
            title: '玉如&nbsp;&nbsp;&nbsp;&nbsp;與思覺失調症共處6年',
            content: '6年前，玉如在診所上班，那時候她總覺得去看病的病人，其實都是去看她出糗、去嘲笑她，當她的腦海裡出現想傷害別人和傷害自己的想法時，玉如知道那是一種精神症狀。對精神疾病的了解，讓她意識到自己需要幫助，她知道這時候的頭腦不值得信任，那些並不是她真實的想法，在她心底並不想傷害任何人，從那時候起，玉如開始學習與這些症狀共處。',
            image: `${baseUrl}img/people1.jpg`,
            imageAlign: 'right'
          },
        ]}
      </Block>
    );
    const Video1 = () => (
      <div id="Video1" className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/kKPzz7IRMSk" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    );

    const People1Page_1 = () => (
      <Block id="Test1Page-1" background="light" layout="Column" align="left">
        {[
          {
            title: '發病前的徵兆&nbsp;&nbsp;精神症狀有跡可循',
            content: '玉如20歲時，在護校唸書，實習期間因為壓力過大，到精神科看診。實習的時候，她只要被學姊罵，都會不知所措的呆在原地，在超過身心負荷範圍之下，玉如的實習被迫中斷，不過新學期到來後，到了新的單位實習，這些情形卻又好像消失了，玉如也就沒有再繼續求診。'
          },
          {
            title: '',
            content: '玉如的爸爸在她12歲生病去世，媽媽也在她18歲時，因意外過世，媽媽曾經是她最親近的人，雖然玉如也有兄弟姐妹，但玉如跟哥哥的關係一直都不太好，實習的時候跟哥哥和弟弟住在一起，卻常常和哥哥吵架。',
          },
          {
            title: '',
            content: '儘管如此，玉如心裡還是希望有一天能和哥哥修復關係，家庭帶給玉如的創傷，也是玉如後來發病的原因之一。',
          },
          {
            title: '',
            content: '在出現妄想的精神症狀前，玉如曾經在醫院、診所、養老院擔任護士，但是每份工作都持續不久。',
          },
          {
            title: '',
            content: '每當玉如面對情況嚴重的病人，都會想起以前爸爸器官衰竭，躺在病床上，而她卻沒辦法為爸爸做些什麼，當時的記憶彷彿重現一般，難過與焦慮再度浮現，讓玉如承受著過大的心理壓力，覺得自己沒有能力處理緊急狀況，也就因此辭職。',
          },
          {
            title: '「妄想」出現後&nbsp;&nbsp;住院治療的日子',
          },
          {
            title: '',
            image: `${baseUrl}img/img_1_2.jpg`,
            content:'玉如現在依然與精神症狀共處著。',
          },
          {
            title: '',
            content: '6年前，玉如在診所上班，那是她第一次出現妄想症狀，也是她第一次住院。'
          },
          {
            title: '',
            content: '玉如曾經住院三次，第二次住院長達九個月，對玉如來說，住院讓她感到安全，玉如說：「一個房間會有兩個室友陪我，很像以前念專科、念護校的時候，我覺得很有趣、很好玩。」白天醫院的職能治療活動，有手作課、英文課等等，也讓玉如樂在其中。'
          },
          {
            title: '',
            content: '雖然玉如在住院這段日子大多都很快樂，但她也說：「比較重要的是出院以後的生活和面對壓力的調適方法。」出院後才是面對疾病、跟疾病共處的練習。'
          },
          {
            title: '',
            content: '在第二次出院以後，玉如很積極的查找資料，每天都在學習面對自己的精神症狀。'
          },
          {
            title: '',
            content: '幾年前，玉如在網路上找到《新北市康復之友協會》附設的新莊工作坊，工作坊專為狀況穩定之精神障礙者服務，玉如後來成了工作坊學員的一份子，經常到工作坊上課、做心理衛教。'
          },
          {
            title: '',
            content: '玉如的精神症狀漸漸穩定後，主任邀請玉如留在工作坊擔任護理師，帶著自己的經驗去幫助其他學員。'
          },
          {
            title: '',
            content: '玉如也曾在其他地方打工，她的上一份工作是在pizza店上班，應徵的時候，玉如告訴店長自己有思覺失調症，反應跟學習能力會比較慢，雖然店長說沒關係，但在工作時，店長沒有特別體諒她，玉如心裡一方面覺得，店長沒有放低標準對她是件好事，但另一方面，卻也因為精神症狀沒有被接納與寬容，讓她感到失落難過。'
          },
          {
            title: '',
            content: '玉如的壓力越來越大，精神症狀嚴重到出現妄想，在跟醫生討論過後，為了避免再次嚴重發病使腦部功能受影響，玉如最後只能辭職。'
          },
        ]}
      </Block>
    );

    const Scroll1 = () => (
      <div id="scroll1Page">
        <img src="img/parallax_1.jpg" alt="scroll1" id="scroll1"/>
        <p>玉如平常喜歡跟姊姊一家人、好朋友們在一起，比較不會情緒低落。</p>
      </div>
    );

    const People1Page_2 = () => (
      <Block id="Test1Page-2" background="light" layout="Column" align="left">
        {[
          {
            title: '家人與好友的陪伴&nbsp;&nbsp;是玉如最大的支持',
            content: '「跟讓我有安全感的人互動，有互動、支持，就比較不會情緒低落。」玉如說。在沒有工作影響的時候，玉如會去姐姐家，和姐姐一起準備大家的晚餐，姐姐有兩個小孩，玉如都叫他們「花生兄妹」，跟姐姐一家人在一起，讓玉如的心有了歸屬感而不孤單。'
          },
          {
            title: '',
            content: '玉如有一個很好的朋友，是以前工作認識的學姐，心情不好的時候，也常常會和學姐一起去逛街、唱歌、看電影，有時候也會一起去教會，玉如說：「其實跟一般人紓壓的方式很像。」'
          },
          {
            title: '',
            content: '現在玉如為自己設立了短期目標，她希望可以持續的在工作坊工作，打破以前一份工作無法持久的紀錄，同時她一直在努力與學習的，依然是和自己的精神症狀共處。'
          }
        ]}
      </Block>
    );

    const People2image = () => (
      <Block id="Test2image" layout="twoColumn" background="light">
        {[
          {
            title: '宗辰&nbsp;&nbsp;&nbsp;&nbsp;與強迫症共處15年',
            content: '在Easy Coffee工作的時候，宗辰口中唸唸有詞，總會小聲提醒自己接下來要做什麼，他的動作很快，不完全是敏捷的那種迅速，感覺他很急，急著做好每一件事，那看似是一種焦躁的精神症狀，慢慢觀察之後發現，其實宗辰做每個動作的時候，既冷靜、且確實，想必是他這十幾年的練習與經驗。不論是工作或是面對精神症狀，經過練習，還有時間的累積，總是會漸漸平緩、漸漸熟稔。',
            image: `${baseUrl}img/people2.jpg`,
          },
        ]}
      </Block>
    );

    const Video2 = () => (
      <div id="Video2" className="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C1GELr55p1U" frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
      </div>
    );
    const People2Page_1 = () => (
      <Block id="Test2Page-1" className="Test2Page" layout="Column" background="light" align="left">
        {[
          {
            title: '留學美國發病&nbsp;&nbsp;陷入困境',
          },
          {
            title: '',
            content: '15年前，宗辰在美國念書，是親戚發現了他的精神症狀。'
          },
          {
            title: '',
            content: '「有時候我會待在房間，或者是廁所，會很久這樣子，覺得頭腦不太好控制。」'
          },
          {
            title: '',
            content: '宗辰發現自己越來越不能專心，總是會不自覺的想事情，這一想可能十分鐘就過去了，當他回過神來，並試著把思緒拉回來時，沒多久頭腦卻又會被另一件事佔據，同時他也像是凍結一般，停止當時正在做的事。'
          },
          {
            title: '',
            content: '「我可能比較，白就是白，黑就是黑，沒有甚麼灰色地帶。」宗辰自己分析著他的個性。'
          },
          {
            title: '',
            content: '高中畢業就去到美國，個性內向的他，在人生地不熟的國家裡，只要和別人說話的時候，感受到對方的不耐煩，宗辰就會一直把它放在心上。'
          },
          {
            title: '',
            content: '「那時候我可能會一直記在心裡，不太懂得怎麼去解決這方面。」宗辰回想那時候的自己，比較在意別人，也比較敏感，讓當時的情緒一直沒辦法消化。'
          },
          {
            title: '',
            content: '一開始，宗辰不知道這些就是精神症狀，但後來這些症狀漸漸變得嚴重，影響到他本來的生活。親戚發現，宗辰變得很容易累、睡覺的時間變長，便建議他先回台灣休養。'
          },
          {
            title: '',
            content: '宗辰聽醫生說了以後才知道，原來像他這樣常常陷入沒有意義的思考，是強迫症的一種精神症狀。'
          },
          {
            title: '父親建議&nbsp;&nbsp;接觸諮商',
          },
          {
            title: '',
            image: `${baseUrl}img/img_2_2.jpg`,
            content:'宗辰和家人的關係很緊密，就算現在沒有住在一起，也經常與家人通電話。',
          },
          {
            title: '',
            content: '宗辰從發病以來，爸媽就一直陪伴著他，直到現在，雖然與家人住在不同縣市，每個禮拜他還是會打給爸媽，和他們聊天。'
          },
          {
            title: '',
            content: '宗辰剛發病時，雖然受精神症狀的影響，被迫暫停學業，但宗辰的爸媽沒有責怪，而是很認真地去了解這些精神症狀，試圖去理解宗辰的想法。'
          },
          {
            title: '',
            content: '「他們還是會去了解這個病，會去上網找資料，不會說一般刻板印象，要去收驚之類的。」宗辰說著爸媽對他的諒解，眼眶也跟著泛了淚。'
          },
        {
          title: '',
          content: '幾年前，宗辰的爸爸建議他去做心理諮商。'
        },
        {
          title: '',
          content: '諮商師建議宗辰放慢腳步，「每天睡覺前，（諮商師）叫我要深呼吸。」每天睡覺前做二十分鐘的呼吸練習，先吸氣，吐氣的時候慢慢的吐，延長吐氣時間到三十秒。經過這個練習，宗辰發現稍微放慢速度，的確會感覺比較放鬆。'
        },
        {
          title: '',
          content: '在諮商的過程中，宗辰也發現，自己的性格是精神症狀出現的原因之一。'
        },
        {
          title: '',
          content: '在美國的時候，宗辰常常會想起新聞播報的社會事件，因著正義感讓他對這些事無法釋懷，但宗辰說，諮商師曾提醒他：「很多東西不太可能分的那麼清楚，總是會有灰色地帶。」諮商師建議宗辰，培養自己的興趣，透過把注意力放在自己喜歡的東西上，去避開討厭的人事物。'
        },
        ]}
      </Block>
    );

    const Scroll2 = () => (
      <div id="scroll2Page">
        <img src = "img/parallax_2.jpg" alt="scroll2" id="scroll2"/>
        <p>宗辰在Easy Coffee工作了12年，操作起咖啡機既熟練、又迅速。</p>
      </div>
    );

    const People2Page_2 = () => (
      <Block id="Test2Page-2" layout="Column" background="light" align="left">
        {[
          {
            title: '工作是調整心態的練習',
            content: '宗辰從美國回到台灣一年多以後，就在《台北市康復之友協會》附設的咖─啡店Easy Coffee工作，到最近轉職之前，他已經在Easy Coffee待了12年，雖然一開始宗辰並不喜歡和陌生人說話，但因為每天都會碰到不同的客人，對宗辰來說也是一種練習，漸漸習慣和陌生人說話以後，他也變得比較放鬆了，訪問宗辰的時候，除了說話語速比較快，似乎有些緊張之外，很難想像以前的他也有內向的一面。 '
          },
          {
            title: '',
            content: '宗辰在《台北市康復之友協會》附設的咖啡店─Easy Coffee，工作了12年，雖然一開始，宗辰並不喜歡和陌生人說話，但因為每天都會碰到不同的客人，對宗辰來說也是一種練習，漸漸習慣與陌生人交談後，他也變得比較放鬆了。'
          },
          {
            title: '',
            content: '訪問宗辰的時候，除了說話語速比較快，似乎有些緊張之外，很難想像以前的他也有內向的一面。問起宗辰覺得自己和以前有什麼不一樣，他說：「比較有愛心吧，比較有同理心，就是比較會去幫助人家吧。」'
          },
          {
            title: '',
            content: '雖然沒有人希望自己有精神症狀，但宗辰還是接受了現在的自己，找到了新的生活方式。問他，有沒有一些建議可以分享給正為精神症狀困擾的人，他說：「要有病識感，不要去抗拒！」'
          },
          {
            title: '',
            content: '去面對、不逃避，或許就是精神疾病唯一的解答。'
          }
        ]}
      </Block>
    );

    const Conclusion = () => (
      <Block id="conclusion" layout="Column" background="light" align="left">
        {[
          {
            title: '跨越成見&nbsp;&nbsp;&nbsp;&nbsp;拉近距離',
            content: '雖然精神疾病不是傳染病，但它或許就像感冒一樣平常，每個人都有可能會經歷，而精神病友就像是得了「重感冒」的人，他們需要花比較大的力氣，透過一些幫助讓自己康復。我們身邊都可能有朋友生病了，需要我們的關心與幫助，或許我們自己也可能會有需要幫忙的時候，面對精神症狀不需害怕，也不用去抗拒它，只要勇敢尋求幫助，好好面對都能夠找到出口。'
          }
        ]}
      </Block>
    );

    const Link = () => (
      <Block id="link" layout="twoColumn" background="light" align="left">
        {[
          {
            title: '延伸閱讀'
          }
        ]}
      </Block>
    );

    const Linkimg = () => (
      <Block id="link_image" layout="fourColumn" background="light" align="left">
        {[
          {
            title: '',
            image: `${baseUrl}img/related1.jpg`,
            content: '工作倦怠就是生病？',
            imageLink:`http://talk.news.pts.org.tw/show/15467`
          },
          {
            title: '',
            image: `${baseUrl}img/related2.jpg`,
            content: '精神疾病社區照護困境',
            imageLink:`https://pnn.pts.org.tw/type/detail/2209`
          },
          {
            title: '',
            image: `${baseUrl}img/related3.jpg`,
            content: '新北市為精障者去汙名化',
            imageLink:`https://news.pts.org.tw/article/429352`
          },
          {
            title: '',
            image: `${baseUrl}img/related4.jpg`,
            content: '選前焦慮選後憂鬱',
            imageLink:`https://www.youtube.com/watch?v=UWF5DHLutT4`
          },
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
          <People1image/>
          <Video1/>
          <People1Page_1/>
          <Scroll1/>
          <People1Page_2/>
          <People2image/>
          <Video2/>
          <People2Page_1/>
          <Scroll2/>
          <People2Page_2/>
          <Conclusion/>
          <Link/>
          <Linkimg/>
        </div>
      </div>
    );
  }
}

module.exports = Index;
