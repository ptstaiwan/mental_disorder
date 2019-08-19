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
            <a href="#BannerTitle">與精神疾病的真實距離</a>
          </li>
          {listItems}
        </ul>
      );
    }

    const numbers = [{id: 2, href: <a className="js-scroll-trigger" href="#Test1image">人物一</a>},
                     {id: 3, href: <a className="js-scroll-trigger" href="#Test2image">人物二</a>}];

    const SideBar = () => (
      <nav id="sidebar-wrapper">
        <NumberList numbers={numbers}/>
      </nav>
    );


    const BannerTitle = () => (
      <div id="BannerTitle">
        <div className="Feature">
          <h2><p>我有病嗎？<br/>與精神疾病的真實距離</p></h2>
          <p>什麼是精神疾病？所謂的精神症狀距離我們究竟有多遠？宗辰曾經是咖啡店員，玉如是護理師，他們都在二十多歲發病，同一般人的外表下，他們和精神症狀共處多年。點選人物，或往下閱讀，他們的故事。</p>
        </div>
        <img src= "http://localhost:3000/newslab-demo/img/c1c.png" alt="text" className="textImg c1c"/>
        <img src= "http://localhost:3000/newslab-demo/img/c1.png" alt="text" className=" character c1"/>
        <img src= "http://localhost:3000/newslab-demo/img/c2c.png" alt="text" className="textImg c2c"/>
        <img src= "http://localhost:3000/newslab-demo/img/c2.png" alt="text" className=" character c2"/>
        <img src= "http://localhost:3000/newslab-demo/img/c3c.png" alt="text" className="textImg c3c"/>
        <img src= "http://localhost:3000/newslab-demo/img/c3.png" alt="text" className=" character c3"/>
        <img src= "http://localhost:3000/newslab-demo/img/c4c.png" alt="text" className="textImg c4c"/>
        <img src= "http://localhost:3000/newslab-demo/img/c4.png" alt="text" className=" character c4"/>
        <img src= "http://localhost:3000/newslab-demo/img/c5c.png" alt="text" className="textImg c5c"/>
        <img src= "http://localhost:3000/newslab-demo/img/c5.png" alt="text" className=" character c5"/>
      </div>
    );

    const Test1image = () => (
      <Block id="Test1image" layout="twoColumn" background="light" align="left">
        {[
          {
            title: '玉如與「思覺失調症」共處6年',
            content: '6年前，玉如在診所上班，那時候她總覺得去看病的病人，其實都是去看她出糗、去嘲笑她，當她的腦海裡出現想傷害別人和傷害自己的想法時，玉如知道那是一種精神症狀，對精神疾病的了解，讓她意識到自己需要幫助，她知道這時候的頭腦不值得信任，那些並不是她真實的想法，在她心底並不想傷害任何人，從那時候起，玉如開始學習與這些症狀共處。',
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
            title: '人物一',
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
            title: '精神症狀的出現',
            content: '唸護校的玉如曾在實習期間，因為壓力過大，到精神科看診。實習的時候，她只要被學姊罵，都會不知所措的呆在原地，在超過身心負荷範圍之下，玉如的實習被迫中斷，不過新學期到來後，到了新的單位實習，精神症狀卻又好像消失了，玉如也就沒有再繼續求診。那時候，玉如20歲，爸爸在她12歲時生病去世，媽媽也在她18歲時，因意外過世，媽媽曾經是她最親近的人，雖然玉如也有兄弟姊妹，但玉如跟哥哥的關係一直都不太好，實習的時候跟哥哥和弟弟住在一起，卻常常和哥哥吵架，雖然和哥哥的感情比較不好，玉如心裡還是希望有一天能和哥哥修復關係，既不想和哥哥吵架，想遠離哥哥，卻又還是對擁有一段和諧的兄妹關係抱有期待，這樣矛盾的心理，框住了玉如，也是玉如心裡缺角的一塊。在出現妄想的精神症狀前，玉如曾經在醫院、診所、養老院擔任護士，但是每份工作都沒有持續多久，因為每當玉如面對情況嚴重的病人，都會想起以前爸爸器官衰竭，躺在病床上，而她卻沒辦法為爸爸做些甚麼，當時的記憶彷彿重現一般，難過與焦慮再度浮現，讓玉如承受著過大的心理壓力，覺得自己沒有能力處理緊急狀況，也就因此辭職。',
          },
          {
            title: '「記得自己發病的樣子」培養病識感',
            content: '6年前，玉如在診所上班，那是她第一次出現妄想症狀，也是她第一次住院，玉如曾經住院三次，第二次住院長達九個月，當時因為妄想症狀又再度出現，和醫生討論以後決定住院，對玉如來說，住院讓她感到安全，玉如說；「一個房間會有兩個室友陪我，很像以前念專科、念護校的時候，我覺得很有趣、很好\n' +
              '玩。」白天醫院的職能治療活動，有手作課、英文課等等，也讓玉如樂在其中。雖然玉如在住院這段日子大多都很快樂，但她也說，「比較重要的是出院以後的生活和面對壓力的調適方法。」出院後才是面對疾病、跟疾病共處的練習。在第二次出院以後，玉如很積極的查找資料，每天都在學習面對自己的精神症狀，幾年前，玉如在網路上找到《新北市康復之友協會》附設的新莊作坊，她發現那裡是一個專門提供受精神症狀所苦的人協助的機構，從那時候起，玉如成了工作坊學員的一份子，經常到工作坊上課、做心理衛教，而後來玉如的狀況漸漸穩定，主任也邀請玉如留在工作坊擔任護理師，帶著自己的經驗去幫助其他學員。玉如除了在工作坊擔任護士，也曾在其他地方打工，上一份工作玉如在pizza店上班，應徵的時候她告訴店長自己有思覺失調症，反應跟學習能力會比較慢，雖然店長說沒關係，但在工作時，店長沒有特別體諒玉如，玉如心裡一方面覺得店長把她當成一般人，沒有放低標準對她是件好事，但另一方面卻也覺得自己因為精神症狀，導致工作狀態不好的時候，沒有被接納與寬容，力不從心的感覺讓她失落難過，而這也讓她的壓力越來越大，精神症狀嚴重到出現妄想，在跟醫生討論過後，為了避免再次嚴重發病使腦部功能受影響，玉如最後只能辭職。',
          },
          {
            title: '陪伴是最好的支持',
            content: '玉如平常喜歡跟姊姊一家人、好朋友們在一起，「跟讓我有安全感的人互動，有互動、支持，就比較不會情緒低落。」玉如說。在沒有工作影響的時候，玉如會去姐姐家，和姐姐一起準備大家的晚餐，姐姐有兩個小孩，玉如都叫他們「花生兄妹」，跟姊姊一家人在一起，讓玉如的心有了歸屬感而不孤單。除了和姐姐一家人在一起，玉如有一個很好的朋友，是以前工作認識的學姐，心情不好的時候，也常常會和學姐一起去逛街、唱歌、看電影，有時候也會一起去教會，玉如自己也說，「其實跟一般人紓壓的方式很像。」。現在玉如為自己設立了短期目標，她希望可以持續的在工作坊工作，打破自己以前一份工作無法長久做下去的紀錄，同時她一直在努力與學習的，依然是面對自己的精神症狀。',
          }
        ]}
      </Block>
    );

    const Test2image = () => (
      <Block id="Test2image" layout="twoColumn" background="light">
        {[
          {
            title: '宗辰與「強迫症」共處15年',
            content: '在Easy Coffee工作的時候，宗辰口中唸唸有詞，總會小聲提醒自己接下來要做甚麼，他的動作很快，不完全是敏捷的那種迅速，感覺他很急，急著做好每一件事，原本我以為這是一種焦躁的精神症狀，慢慢觀察之後發現，宗辰在做每個動作的時候都很冷靜，想必這是他這十幾年的練習與經驗，不論是工作或是面對精神症狀，經過練習，還有時間的累積，總是會漸漸平緩、漸漸熟稔。',
            image: `${baseUrl}img/respondent2.JPG`,
          },
        ]}
      </Block>
    );

    const Test2Pagetitle = () => (
      <Block id="Test2Pagetitle" layout="Column" background="light" align="left">
        {[
          {
            title: '人物二',
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
            content: '宗辰15年前出現影響生活的精神症狀，那時候的他在美國念書，是親戚發現他的症狀，「有時候我會待在房間，或者是廁所，會很久這樣子，覺得頭腦不太好控制。」宗辰說，他發現自己越來越不能專心，總是會不自覺的想事情，這一想可能十分鐘就過去了，當他意識到自己因為想事情停頓很久，把自己的思緒拉回來以後，沒多久頭腦卻又會被另一件事佔據，同時他也會像是凍結一斑，停止當時正在做的事。「我可能比較，白就是白，黑就是黑阿，沒有甚麼灰色地帶。」宗辰自己分析著他的個性，高中一畢業，個性內向的他就去到美國，在人生地不熟的國家裡，只要和別人說話的時候，感受到對方的不耐煩，宗辰就會一直把它放在心上，「那時候我可能會一直記在心裡，不太懂得怎麼去解決這方面阿。」宗辰回想那時候的自己，比較在意別人，也比較敏感，把每一件事都放在心裡很久，讓當時的情緒一直沒辦法消化。一開始宗辰不知道這些就是精神症狀，但後來他發現自己很容易累、睡覺的時間變長、生活作息變得不一樣，這些症狀漸漸變得嚴重，影響到他本來的生活，住在宗辰附近的親戚也發現，宗辰的精神狀況和以前不一樣，建議他先回台灣休養，回台灣看診，聽醫生說了以後，宗辰才知道，原來像他這樣常常陷入沒有意義的思考，是強迫症的一種精神症狀。',
            title: '精神症狀的出現',
          },
          {
            content: '宗辰與爸媽的感情很好，雖然宗辰因為精神症狀的影響，被迫暫停學業，宗辰的爸媽沒有責怪，而是很認真地去了解這些精神症狀，試圖去理解宗辰的想法，「他們還是會去了解這個病阿，會去上網找資料，不會說一般刻板印象，要去收驚之類的。」宗辰說著爸媽對他的諒解，眼眶也跟著泛了淚。幾年前，宗辰的爸爸建議他去做心理諮商，「他就是覺得我太快啦，叫我放慢腳步。」宗辰說著諮商師給他的建議，「每天睡覺前阿，就是叫我要深呼吸。」深呼吸是為了讓自己可以放慢動作，諮商師建議，宗辰每天睡覺前可以做二十分鐘的深呼吸練習，先吸氣，吐氣的時候慢慢的吐，延長吐氣時間到三十秒，經過這個練習，宗辰也發現到稍微放慢速度，的確會感覺比較放鬆。在諮商的過程中，宗辰也發現了自己的性格是精神症狀出現的原因之一，「我不太喜歡深顏色嘛，因為畢竟你看新聞阿，一般跟黑有關的都不太好，比如說黑道阿、黑槍阿。」宗辰說，過去在美國他也常常會想起新聞播報的社會事件，因為宗辰有正義感的性格，讓他對這些事無法釋懷，但諮商師曾提醒宗辰，「很多東西不太可能分的那麼清楚，總是會有灰色地帶阿。」諮商師建議他，可以試著透過培養自己的興趣，避開自己不喜歡的東西。',
            title: '接觸心理諮商',
          },
          {
            content: '宗辰從美國回到台灣一年多以後，就在《台北市康復之友協會》附設的咖啡店─Easy Coffee工作，到最近轉職之前，他已經在Easy Coffee待了12年，雖然一開始宗辰並不喜歡和陌生人說話，但因為每天都會碰到不同的客人，對宗辰來說也是一種練習，漸漸習慣和陌生人說話以後，他也變得比較放鬆了，訪問宗辰的時候，除了說話語速比較快，似乎有些緊張之外，很難想像以前的他也有內向的一面。問起宗辰覺得自己和以前有什麼不一樣，他說，「比較有愛心吧，比較有同理心，就是比較會去幫助人家吧。」雖然沒有人希望自己有精神症狀，但宗辰還是接受了現在的自己，找到了新的生活方式，問他有沒有一些建議可以分享給正為精神症狀困擾的人，他說，「要有病識感吧，不要去抗拒啊！」對於精神症狀，去面對、不逃避，可能就是精神疾病唯一的解答。',
            title: '工作與生活慢慢調適',
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
