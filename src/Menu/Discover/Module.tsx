import { Alert, Button, Card, List, Space, Typography } from 'antd'
import Links from '../../Data/Links';

{/* <Typography.Paragraph>
如果你想完全白嫖，实际上以上几种方式都不靠谱，首先COM3D2的Mod制作门槛较高，大部分创作者都不愿意分享自己的Mod，因为做Mod对他们来说是一份用于赚钱的工作而非业余爱好，而且国内也游戏环境相当封闭。
<br />当然我也发现很多其他人有着我没有的Mod，但我目前也不知道从哪来的
<br />你想要的Mod大多数都是收费的，内部的，所以你很难从公开场合找到Mod。如果你和我一样是圈外人且爱倒弄，我建议直接尝试自己制作，因为这绝对是最靠谱自由度最高的解决办法，而之后我也将发布相关教程。
<br />COM3D2的Mod制作需要一定的技术要求（Blender，Ps），但不是很高，因为现在网络上有大量的开源模型可供移植，而且如果你只做头发面部，最快一两个小时就能搞定一个Mod，而二次元角色辨识度最高的就是这些，衣服可以不做，因为本身就可以替换。
</Typography.Paragraph> */}


{/* <Typography.Title level={2}>未来规划</Typography.Title>
<Typography.Paragraph>
    后续会进一步完善，增加预览，投稿等功能，我希望能把找mod变成上淘宝花钱一样简单。
    <br />
    嘛，这游戏也没几个免费做mod的，也没人分享。缺人缺资源，八成是要成自用网站了，只有一个人的图书馆（笑）。
</Typography.Paragraph> */}

const MenuItem = {
    label: "Mod分享",
    key: '/Discover/Module',
    page: () => {
        const texts1 = [
            {
                href: "https://mod.3dmgame.com/u/8101706/Home",
                text: "个人Mod收集分享",
                content: <div>
                    <ul>
                        <li>有预览图</li>
                        <li>有来源说明</li>
                        <li>确认可用，无文件缺漏</li>
                    </ul>
                    <br />
                    <Alert message="相关Mod因经过二次整理，和源文件会略有区别。"></Alert>
                </div>
            },
            {
                href: "https://cryptpad.fr/pad/#/2/pad/view/Y-r2fKD-7iiuTjH+vQ2c1SqoWrHU443yGRiDNHDObMw/",
                text: "外网的Mod整合包",
                content: <div>
                    该Mod整合包经原作者人工审核，质量高，无重复缺漏文件，但使用前一定要阅读使用手册。
                    <ul>
                        <li>
                            前置要求：
                            <br />
                            这个整合包必须配合年度终极版游戏使用（不是我推荐的2.28版本），这个版本DLC最全每年更新且支持CM3D2和COM3D2联动，这是外网的主流版本，你可以在“相关链接”的种子网站中搜索到。
                            <br />
                            如果不使用这个版本也可以，但会导致部分Mod缺失文件。
                        </li>
                        <li>
                            下载链接：
                            <br />
                            我这里提供一个磁链以解决部分人无法上外网的情况（或者GGBase种子网站是可以国内直连的），但若想获取最新版本的Mod整合包，请一定要用文档里的链接。
                            <br />
                            <Typography.Link href='magnet:?xt=urn:btih:5dc52af16520f6032b25972b10ef96f782654cd4' target="_blank">
                                magnet:?xt=urn:btih:5dc52af16520f6032b25972b10ef96f782654cd4
                            </Typography.Link>
                        </li>
                    </ul>
                    <br />
                </div>
            },
        ]

        return <Typography.Paragraph>
            <Typography.Title level={2}>从哪能找到Mod？</Typography.Title>
            <ol>
                <li>直接查看左侧同组的“相关链接”栏目，源头链接都已经放在里面了。</li>
                <li>部分论坛支持搜索功能，我最早就是在那找到Mod的，大部分链接会将你导向推特。</li>
                <li>另外你也可以尝试加入一些QQ群，因为我发现手里揣着Mod整合包的人还蛮多的，而且都是上百G的数量，如果你不想自己去源头收集，可以找他们。</li>
                <li>特定角色的Mod确实很难找，但不代表不存在，你想要的Mod基本都有，但他们基本都是内部且商业性质的，你需要人脉和资金才行，这游戏的水比你想象的要深的多。</li>
            </ol>
            <Typography.Title level={2}>本站的Mod分享</Typography.Title>
            <Space direction="vertical">
                <Alert
                    message="关于本站的Mod的收集策略："
                    description={
                        <div>
                            如今看来大部分人都是不缺Mod，而且搜集大量Mod也不是很难（原因见上方“从哪能找到Mod？”），所以走量不是本站的目标。
                            <br />目前网上流传的大部分Mod都是直接爬虫爬取的，缺乏整理和有效性验证，另外对于一些特定角色的Mod也会很难找。
                            <br />所以我后面的目标以收集套装为主，尽可能集齐系列作品，制作一些需求大但无公开版的Mod，当然主要还是自用，看个人癖好了。
                        </div>
                    }
                />
                <Alert type="success" showIcon message={<div>
                    已经转移到<Typography.Link href={Links.get("COM3D2Mod分享_3DM")} target="_blank">3DMMod站</Typography.Link>投稿，那里有完善的投稿机制，没必要放在单独的云盘了，也建议各位能去多多投稿，建设环境了。
                </div>}
                ></Alert>
            </Space>
            <List
                dataSource={texts1}
                renderItem={(item, index) =>
                    <List.Item key={index}>
                        <Card
                            title={item.text}
                            extra={
                                <Button style={{ color: "white" }} type="primary" href={item.href} target="_blank" rel="noreferrer">
                                    进入
                                </Button>
                            }
                            style={{ width: 600 }}
                        >
                            {item.content}
                        </Card>
                    </List.Item>
                }
            >
            </List>
        </Typography.Paragraph>
    }
}

export default MenuItem;