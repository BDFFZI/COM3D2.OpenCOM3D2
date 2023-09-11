import { Alert, Button, Card, Divider, List, Space, Typography } from "antd";
import { ButtonLink } from "../../Data/Components";


const MenuItem = {
    label: "Mod制作",
    key: "/Research/MakeMod",
    page: () => <Typography.Paragraph>
        <Space direction="vertical">

            <Alert type="info" showIcon message="这个是教程不是WIKI，只会讲述教程中用到部分功能，更完整深入的资料请查询WIKI。" ></Alert>
            <Card title="入门">
                <blockquote>搞定动漫角色最重要的特征点，让别人看了能直呼老婆！</blockquote>
                <Card title="文字教程" type="inner">
                    <Space direction="vertical">
                        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17621153.html" target="_blank">【COM3D2Mod制作教程】序章：教程简介（含前置要求，必读！！！）</Typography.Link>
                        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17647617.html" target="_blank">【COM3D2Mod制作教程】第一章：Mod底层原理</Typography.Link>
                        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17660468.html" target="_blank">【COM3D2Mod制作教程】第二章：Mod制作概要</Typography.Link>
                        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17689349.html" target="_blank">【COM3D2Mod制作教程】第三章：实战！制作身体部分（上）</Typography.Link>
                        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17689415.html" target="_blank">【COM3D2Mod制作教程】第四章：实战！制作身体部分（中）</Typography.Link>
                        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17690369.html" target="_blank">【COM3D2Mod制作教程】第五章：实战！制作身体部分（下）</Typography.Link>
                    </Space>
                </Card>
                <Card title="配套视频" type="inner">
                    <Space direction="vertical">
                        <ButtonLink href="https://www.bilibili.com/video/BV148411i7uy/">解读视频（序章~第三章内容）</ButtonLink>
                        <ButtonLink href="https://www.bilibili.com/video/BV148411i7uy/">实操视频（第四章内容）</ButtonLink>
                        <ButtonLink href="https://www.bilibili.com/video/BV148411i7uy/">实操视频（第五章内容）</ButtonLink>
                    </Space>
                </Card>
            </Card>
            <Divider dashed></Divider>
            <Card title="进阶">
                <blockquote>让老婆能穿上自己的原设衣装，让别人看了能直呼大佬！</blockquote>
                制作中......（预计2023年底发布）
            </Card>
        </Space >
    </Typography.Paragraph>
}
export default MenuItem;    