import { Layout, Typography, Space, Button, Card, Alert, List } from 'antd';
import { UpOutlined, DownOutlined, SmileOutlined } from '@ant-design/icons'
import Log from '../../Data/UpdateLog';
import { useState } from 'react';
import { GetMessageApi } from '../MenuSystem';
import { SiteName } from "../../Data/Strings";

function Page() {
    const [logIndex, setLogIndex] = useState(0)

    function SetLogIndex(index: number) {


        if (index >= Log.length - 2) {
            GetMessageApi().error("肝不动了＞﹏＜");
            index = Log.length - 3;
            if (index < 0)
                index = 0;
        }
        else if (index < 0) {
            GetMessageApi().error("肝不动了＞﹏＜");
            index = 0;
        }

        setLogIndex(index)
    }

    return <div>
        <Layout style={{
            backgroundImage: "linear-gradient(140deg,white, rgba(0, 0, 0,0.5) ),url(./images/welcome.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center left"
        }}>
            <Layout.Header style={{ display: "flex", alignItems: "center" }}>
                <Typography.Paragraph type="danger" style={{ margin: "0" }}>站长已半退坑，除了后续的Mod教程和V4汉化外，只会进行维护性更新。</Typography.Paragraph>
            </Layout.Header>

            <Layout.Content style={{ padding: 24, minHeight: '750px', display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <Typography.Title>欢迎来到{<span>{SiteName}</span>}</Typography.Title>
                    <Typography.Paragraph>
                        这是站长个人用于收集和分享COM3D2资源和教程的网站，也是为了解决直链更新的麻烦以及避免被恶意举报的办法。
                    </Typography.Paragraph>
                    <Space direction="vertical">
                        <div><Typography.Title level={2} style={{ display: "inline" }} keyboard>想要入门？</Typography.Title>
                            请查阅左侧<Typography.Text strong>入门分栏</Typography.Text>，下载并配置游戏的基本环境，以及答疑解惑。</div>
                        <div><Typography.Title level={2} style={{ display: "inline" }} keyboard>来找资源？</Typography.Title>
                            请查阅左侧<Typography.Text strong>发现分栏</Typography.Text>，深入了解和获取一些额外内容，丰富你的游戏体验。</div>
                        <div><Typography.Title level={2} style={{ display: "inline" }} keyboard>学搞开发？</Typography.Title>
                            请查阅左侧<Typography.Text strong>研究分栏</Typography.Text>，学习游戏组成原理，实现自己制作Mod。</div>
                        <Alert
                            showIcon
                            type="warning"
                            message={
                                <div>有任何问题请 <Typography.Link href="https://gitee.com/bdffzi/Page.OpenCOM3D2/issues">查看或发布Issue</Typography.Link>，发布在此的问题我必定回答但不保证能解决。（使用其他问答途径可能会被我忽略）</div>
                            }
                        ></Alert>
                        <Alert
                            showIcon
                            type="info"
                            message={
                                <div>如果你希望加入群聊，我在“沟通-联系站长”分栏中留了一个闲聊群，但人数不多，可能不是你想找的大部队。</div>
                            }
                        ></Alert>
                    </Space>

                    {/* <iframe
                        src="//player.bilibili.com/player.html?aid=375588815&bvid=BV1so4y1m7U5&cid=339262048&page=1&high_quality=1&danmaku=0"
                        width="100%" height="500" scrolling="no"
                    // sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                    >

                    </iframe> */}
                </div>
                <Card bordered={false} style={{ width: "700px", background: "rgba(0,0,0,0.2)" }}
                    title="更新日志"
                    extra={
                        <Space>
                            <Button icon={<UpOutlined />} onClick={() => SetLogIndex(logIndex - 1)}></Button>
                            <Button icon={<DownOutlined />} onClick={() => SetLogIndex(logIndex + 1)}></Button>
                        </Space>
                    }
                    children={
                        Log.slice(logIndex, logIndex + 3).map(item =>
                            <div>
                                <Typography.Text keyboard>{item.time}</Typography.Text>
                                {item.content}
                            </div>
                        )
                    }
                />
            </Layout.Content>
        </Layout>
        <br />
    </div >
}

const Menu = {
    label: "欢迎",
    icon: <SmileOutlined />,
    key: '/',
    page: Page
}
export default Menu;