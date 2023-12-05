import { Typography, Alert, Button, Space, Divider, Descriptions, Tooltip, Popconfirm } from 'antd'
import React from "react";
import { Link } from 'react-router-dom';
import Plugin from './Plugin'
import Links from '../../Data/Links';
import { ButtonLink } from '../../Data/Components';

const MenuItem = {
  label: "1. 游戏本体与DLC",
  key: "/Introduction/Game",
  page: () => <div>
    <Typography.Title level={2}>这款游戏是什么？</Typography.Title>
    <Descriptions bordered column={1}>
      <Descriptions.Item label="名称">
        <div>全称：CUSTOM ORDER MAID 3D2</div>
        <div>中文名：3D定制女仆2</div>
        <div>简称：COM3D2（建议用简称称呼，因为不仅简单，而且中英通用）</div>
      </Descriptions.Item>
      <Descriptions.Item label="简介">
        这是一款由日本Kiss公司，利用Unity游戏引擎开发的卡通风格的模拟经营游戏，这是一个系列游戏，目前已有几代的版本更迭，且仍在开发中。
        <br />游戏中你将扮演一名女仆俱乐部的老板，安排你的女仆员工做各种各样的事情，为光复家族产业而努力。
      </Descriptions.Item>
      <Descriptions.Item label="发展历程">
        <div>CM3D：2011.1.28日发售</div>
        <div>CM3D2：2015.7.24日发售</div>
        <div>COM3D2：2018.2.23日发售（玩法增加）</div>
        <div>COM3D2.5：2021.10.29日发售（画质提升）</div>
        <div>信息来源（以最早出现的日期计算）：<a href={Links.get("KISS公司作品时间线")} target="_blank" rel="noreferrer">KISS公司作品时间线</a></div>
      </Descriptions.Item>
      <Descriptions.Item label="游戏大小">
        <div>原版游戏：15G左右</div>
        <div>全DLC版：150G左右</div>
        <div>Mod大小：由于游戏不提供对Mod开发的帮助，也没有相应规范，所以Mod文件缺优化，普遍偏大，市面上的Mod整合包几十上百G很正常。</div>
      </Descriptions.Item>
      <Descriptions.Item label="个人点评">
        <br />1. 游戏生命力强，发展潜力大，因为目前和未来的一段时间都会持续更新，且插件Mod都能向后兼容。
        <br />2. 相比隔壁恋活剧情更丰满玩法更多点，不容易腻。
        <br />3. 做Mod门槛很高，Mod质量不稳定，相比之下Mod数只有恋活的几十分之一甚至没有。
        <br />4. 其在国内的游戏环境很糟糕，倒狗横行，社区封闭，资源难找。
        <br />5. 似乎是Kiss公司目前的命根子，因为我观察发现他们似乎同时只能开发一款游戏。
      </Descriptions.Item>
    </Descriptions>

    <Typography.Title level={2}>如何获取最新的本体和DLC?</Typography.Title>
    <Typography.Paragraph>
      <ol>
        <li>
          <Typography.Paragraph>
            <Space direction='vertical'>
              通过左侧“发现-相关链接”栏目中“找游戏”板块中提供网站搜索COM3D2，寻找自己需要的游戏本体或DLC，或使用下面的推荐版本。
              <div>
                <Space>
                  <Popconfirm
                    title="下载地址"
                    showCancel={false}
                    description={
                      <Typography.Paragraph>
                        磁力链接：magnet:?xt=urn:btih:a5ddd0ffbe7571146ce828ae146d3b0fafdebbd7
                        <div></div>
                        来源网站：https://ggbases.dlgal.com/
                      </Typography.Paragraph>
                    }
                  >
                    <Button type="primary">COM3D2 2.28 全DLC整合版（国内主流）</Button>
                  </Popconfirm>
                  <Popconfirm
                    title="下载地址"
                    showCancel={false}
                    description={
                      <Typography.Paragraph>
                        磁力链接：magnet:?xt=urn:btih:7485b2a5ae42543f3a8d0b6e5c49f5ce80ef3511
                        <div></div>
                        来源网站：https://ggbases.dlgal.com/
                      </Typography.Paragraph>
                    }
                  >
                    <Button type="primary">COM3D2&CM3D2 2023终极版（国外主流）</Button>
                  </Popconfirm>
                  <Button disabled>其他请查看“发现-相关链接”栏目</Button>
                </Space>
              </div>
              <Alert type="warning" message="注意" description={
                <ul>
                  <li>目前推荐的汉化插件是针对游戏COM3D2 2.28版本的，其他版本会略有问题！</li>
                  <li>随时间推移，整合包中的DLC一定会有缺漏（可使用DLC检测工具检查），若有需要请自行通过“相关链接”栏目更新。</li>
                </ul>
              } />
              <Alert type="info" message="关于游戏下载的一些建议？" description={
                <div>
                  <ol>
                    <li>
                      之前我一直都推荐小白使用国内主流的版本，因为这个和国内的插件环境比较兼容，也方便你日后找到大部队后不需要重新下游戏。
                    </li>
                    <li>
                      但如果你<Typography.Text type="danger">有处理意外情况的能力</Typography.Text>，我更推荐的是老外主流的终极版。
                      <br></br>+ 这个是每年都会推新，包含CM3D2和COM3D2两款游戏（用于联动功能），真正的最全最新，是国外下载量最高的游戏本体。
                      <br></br>+ 由于几乎所有能公开获取的资源都来源于国外分享，选择和老外的路线一致，兼容性是最好的，也因此和后续“Mod分享”专栏中提到的优质Mod整合包完美兼容。
                      <br></br>+ 而且这个版本似乎能解决一个相当严重的已知漏洞，如果可行，那这个版本对部分人来说优先级相当大。
                      <br></br>- 但注意少许插件包括汉化和这个版本并不完全兼容，实际上国内用到翻译插件在国外已经淘汰了，下一章装插件时你就会发现CMI中自带的翻译插件和我们的汉化插件并不一样。
                    </li>
                  </ol>
                  <ul >
                    或者你也可以自己寻找一些上述推荐版本之外的资源，对此我也提出些建议：
                    <li>要尽可能下载全DLC版，单独装容易缺文件，而且很多Mod会用到里面的功能。</li>
                    <li>国内是COM3D2主流，国外是COM3D2.5，COM3D2的东西在COM3D2.5也能用，但反之不行。</li>
                    <li>COM3D2.5和COM3D2的区别主要是画质，2.5的模型更精细一点，皮肤纹理更丰富，比如能清晰的看到锁骨痕迹。</li>
                    <li>下载人数越多的资源下载越快，再加上国情原因，<Typography.Text delete>实际跟着老外下速度会更快点</Typography.Text>（具体还得看网络环境，比如电信上外网普遍慢）。</li>
                    <li>部分插件可能不兼容新版本，目前国内主流是COM3D2 2.28所以这个版本的兼容性最好。</li>
                  </ul>
                </div>
              } />
            </Space>
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            <Space direction='vertical'>
              获取到游戏的种子或磁链后，使用p2p下载软件进行下载（新建离线任务），比如：
              <ul>
                国内下载器<Typography.Text type="danger">（限速，有敏感文件问题）</Typography.Text>：
                <li><Typography.Text type="success">迅雷</Typography.Text>（会卡99%，但小白推荐）</li>
                <li>百度网盘（有大小限制问题，部分资源已封杀）</li>
                <li>阿里云盘（有人用过，结果下载不全）</li>
                国外下载器<Typography.Text type="danger">（不限速但要倒弄，受网络环境影响）</Typography.Text>：
                <li>
                  <Typography.Text type="success">qBittorrent</Typography.Text>
                  （开源干净不限速，站长用的这个，一晚上下好）
                </li>
                <li>BitComet（闭源有广告）</li>
              </ul>
            </Space>
            <Alert type="success" message="提示" description={
              <ul>
                <li>种子下载是可以跨软件续下的，如果一个下载器出了问题，不要删除文件。换成另一个下载器新建下载时，只要将保存路径设置的一样就可以继续下载。</li>
                <li>如果部分文件缺失或损坏，利用上述方法，还可以让种子下载器自动检测并修复错误的文件，如果下载器确实没报下载问题，那你可以考虑问题是否出在其他地方了。</li>
                <li> <Typography.Text type="danger">综上所述最佳的种子下载姿势其实是：先用迅雷下载到99%限速的时候，再换成qBittorrent下载剩余部分和敏感文件，这样下载最全最快且能打破商业垄断，完美~</Typography.Text></li>
              </ul>
            } />
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            下载完就可以享受啦！接着可以看一下
            <a href={Links.get("COM3D2产品一览")} target="_blank" rel="noreferrer">
              COM3D2重点产品一览
            </a>
            ，你可以在此初步了解这款游戏包含的内容。
          </Typography.Paragraph>
        </li>
      </ol >
    </Typography.Paragraph >

    <Typography.Title level={2}>安装单独的DLC？</Typography.Title>
    <Typography.Paragraph>
      如果你会配置当然可以选择下载纯净版游戏然后单独下载DLC进行安装，这能极大的减少游戏体积。
      <br />DLC单独安装也很简单，因为自带官方的安装程序，所以你只管运行安装就行。
      <br />如果你下载DLC后，得到的是一个光盘图标的文件，不要怕，点进去也是一样的。
    </Typography.Paragraph>

    <Divider></Divider>
    <Alert showIcon type="warning" message={
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        强烈建议之后赶紧把插件装上（不然没汉化也没法用Mod）。
        <Button><Link to={Plugin.key}>下一章</Link> </Button>
      </div>
    }></Alert>
  </div >
}

export default MenuItem;