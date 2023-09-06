import { Alert, Space, Typography } from "antd";


const MenuItem = {
    label: "Mod制作",
    key: "/Research/MakeMod",
    page: () => <Typography.Paragraph>
        <Alert type="warning" showIcon message="警告" description={
            <ul>
                <li>强烈建议配合后续推出的视频教程阅读文档，因为文档大多起笔记大纲的作用，可能会有意写的复杂化或简化。</li>
                <li>这个是教程不是WIKI，只会讲述教程中用到部分功能，更完整深入的资料请查询WIKI。</li>
            </ul>
        }></Alert>
        <Typography.Title level={2}>1. 序章</Typography.Title>
        <blockquote>前置要求，教程简介，必读！！！</blockquote>
        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17621153.html" target="_blank">【COM3D2Mod教程】序章：教程简介</Typography.Link>
        <Typography.Title level={2}>2. 入门</Typography.Title>
        <blockquote>搞定动漫角色最重要的特征点，让别人看了能直呼老婆！</blockquote>
        <Space direction="vertical">
            <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17647617.html" target="_blank">【COM3D2Mod教程】第一章：Mod底层原理</Typography.Link>
            <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17660468.html" target="_blank">【COM3D2Mod教程】第二章：Mod制作概要</Typography.Link>
            制作中......
        </Space>
        <Typography.Title level={2}>3. 进阶</Typography.Title>
        <blockquote>让老婆能穿上自己的原设衣装，让别人看了能直呼大佬！</blockquote>
        制作中......
    </Typography.Paragraph>

}
export default MenuItem;    