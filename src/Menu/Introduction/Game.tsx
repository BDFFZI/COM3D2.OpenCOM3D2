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
        <br />3. 捏人系统似乎没恋活强，做Mod门槛很高，Mod质量不稳定，玩家数和Mod数都是恋活的1/10。
        <br />3. 其在国内的游戏环境很糟糕，倒狗横行，社区封闭，资源难找。
        <br />4. 似乎是Kiss公司目前的命根子，因为我观察发现他们似乎同时只能开发一款游戏。
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
                        来源网站：https://ggbases.dlgal.com/view.so?id=117875
                      </Typography.Paragraph>
                    }
                  >
                    <Button type="primary">COM3D2 2.28 全DLC整合版（强烈推荐）</Button>
                  </Popconfirm>
                  <Button disabled>随时间推移，整合包中的DLC一定会有缺漏，如果有强烈需求，那你可以自己去左侧相关链接的栏目中尝试更新资源</Button>
                </Space>
              </div>
              <Alert
                showIcon
                type="error"
                message="现在我只推荐你下载COM3D2 2.28，因为已知一些新版本存在插件兼容问题，除非你知道自己在做什么，不然请下载COM3D2 2.28！"
              />
              <Alert showIcon type="warning" message="目前推荐的汉化插件是针对游戏COM3D2 2.28版本的，其他版本会略有问题！" />
              <Alert type="success" message="提示" description={
                <ul >
                  <li>要尽可能下载全DLC版，单独装容易缺文件，而且很多Mod会用到里面的功能。</li>
                  <li>国内是COM3D2主流，国外是COM3D2.5，COM3D2的东西在COM3D2.5也能用，但反之不行。</li>
                  <li>COM3D2.5和COM3D2的区别主要是画质，2.5的模型更精细一点，皮肤纹理更丰富，比如能清晰的看到锁骨痕迹。</li>
                  <li>下载人数越多的资源下载越快，再加上国情原因，实际跟着老外下速度会更快点。</li>
                  <li>部分插件可能不兼容新版本，目前国内主流是COM3D2 2.28所以这个版本的兼容性最好。</li>
                </ul>
              } />
            </Space>
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            <Space direction='vertical'>
              获取到游戏的种子或磁链后，使用p2p下载软件进行下载（新建离线任务），比如：
              <ul>
                国内下载器（限速，有敏感文件问题）：
                <li>百度网盘（因大小受限没用过）</li>
                <li>迅雷（容易卡99%，小白推荐）</li>
                国外下载器（不限速但要倒弄，受网络环境影响）
                <li>
                  qBittorrent
                  <a href="https://www.bilibili.com/video/BV1CM411B7Fu" target="_blank" rel="noreferrer" >（开源软件，站长用的这个，一晚上下好）</a>
                </li>
                <li>BitComet（闭源有广告）</li>
              </ul>
            </Space>
          </Typography.Paragraph>
        </li>
        <li>
          <Typography.Paragraph>
            下载完就可以享受啦！(这是官方的
            <a href={Links.get("COM3D2产品一览")} target="_blank" rel="noreferrer">
              COM3D2产品一览
            </a>
            ，你可以在此查缺补漏。)
          </Typography.Paragraph>
        </li>
      </ol >
    </Typography.Paragraph >
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