import { Alert, Button, Card, List, Space, Typography } from 'antd'

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
                href: "https://wwzc.lanzouj.com/b04k6tasd",
                text: "已验证Mod",
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
                href: "https://wwzc.lanzouj.com/b04k6tawh",
                text: "未验证Mod",
                content: <div>
                    大量暂时无法验证可用性的Mod，和市面常见的整合包性质相同。
                    <br />
                    目前本站大部分未验证mod都来源于目前一个不愿透露姓名的QQ群。
                </div>
            },
        ]

        return <div>
            <Typography.Title level={2}>从哪能找到Mod？</Typography.Title>
            <Typography.Paragraph>
                <ol>
                    <li>直接查看左侧同组的“相关链接”栏目，源头链接都已经放在里面了。</li>
                    <li>部分论坛支持搜索功能，我最早就是在那找到Mod的，大部分链接会将你导向推特。</li>
                    <li>另外你也可以尝试加入一些QQ群，因为我发现手里揣着Mod整合包的人还蛮多的，而且都是上百G的数量，如果你不想自己去源头收集，可以找他们。</li>
                    <li>特定角色的Mod确实很难找，但不代表不存在，你想要的Mod基本都有，但他们基本都是内部且商业性质的，你需要人脉和资金才行，这游戏的水比你想象的要深的多。</li>
                </ol>
            </Typography.Paragraph>

            <Typography.Title level={2}>本站的Mod分享</Typography.Title>
            <Space direction="vertical">
                <Alert
                    message="关于本站的Mod的收集策略："
                    description={
                        <div>
                            如今看来大部分人都是不缺Mod，而且搜集大量Mod也不是很难（原因见上方“从哪能找到Mod？”），所以走量不是本站的目标。
                            <br />目前网上流传的大部分Mod都是直接爬虫爬取的，缺乏整理和有效性验证，另外对于一些特定角色的Mod也会很难找。
                            <br />所以我后面的目标以收集套装为主，尽可能集齐系列作品，制作一些需求大但无公开版的Mod，当然主要还是自用，看个人癖好了。
                            <br />另外，如果你也有些散装Mod愿意分享，欢迎联系我投稿╰(￣ω￣ｏ)
                        </div>
                    }
                />
                <Alert type="success" message="站长目前的收集癖好：无（因为正在赶制Mod制作教程）"></Alert>
                <Typography.Paragraph>

                    考虑工作量资金等因素，目前资源都直接放在了蓝奏云上存储和展示，当然我也在自己电脑上留了备份。
                    <br />
                    仓库入口已放在下方，Mod会不定时更新，更新信息会放在首页展示。
                </Typography.Paragraph>
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

            <Typography.Title level={2}>版权问题（Copyright problem）</Typography.Title>
            <Typography.Paragraph>
                Mod来源于网络收集和网络投稿，由于数据量过大或原始文件异常等原因，无法挨个审核标记内容，所以部分Mod可能会出现版权问题。
                <br />接着由于网络，文件大小，捆绑等各种因素，导致最终选择了再上传的方式以便资源分享。
                <br />如果你是原作者，而以上内容对您的权益造成了损害，请联系我，我将尽快下架。
                <br />Mod from the network collection and network contributions, due to the amount of data is too large or abnormal original files and other reasons, can not be reviewed one by one marked content, so some Mod may have copyright problems.
                <br /> Then due to the network, file size, bundling and other factors, resulting in the final choice of upload for resource sharing.
                <br /> If you are the original author and the above content has caused damage to your rights and interests, please contact me and I will remove it as soon as possible.
            </Typography.Paragraph>
        </div >
    }
}

export default MenuItem;