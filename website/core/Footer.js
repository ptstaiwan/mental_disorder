/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
        {this.props.config.footerIcon && (
            <img
          src={this.props.config.baseUrl + this.props.config.footerIcon2}
          alt={this.props.config.title}
          width="72"
          height="70"
          />
        )}
          <div>
          <h5>財團法人公共電視文化事業基金會</h5>
            <div id = "company">
              <div>114台北市內湖區康寧路三段75巷50號</div>
              <div>客服專線: 02-26332000</div>
            </div>
          </div>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="59"
                height="80"
              />
            )}
          <div>
            <h5>製作群</h5>
            <div id = "team">
              <div>
                <div>監製</div>
                <div>製作人</div>
                <div>企劃</div>
                <div>文字</div>
                <div>影音</div>
                <div>設計</div>
                <div>工程</div>
                <div>社群</div>
              </div>
              <div>
                <div>蘇啟禎</div>
                <div>卓冠齊</div>
                <div>楊千醇</div>
                <div>楊千醇、李宜芳</div>
                <div>許家嘉、曾芯敏、鄭紹妤</div>
                <div>曾芯敏</div>
                <div>汪琦恩</div>
                <div>Nagao Kunaw</div>
              </div>
            </div>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
