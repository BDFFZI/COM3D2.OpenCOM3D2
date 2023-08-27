import { Space, Typography } from "antd";


const MenuItem = {
    label: "Mod制作",
    key: "/Research/MakeMod",
    page: () => <Typography.Paragraph>
        <Typography.Title level={2}>1. 序章</Typography.Title>
        <blockquote>前置要求，教程简介，必读！！！</blockquote>
        <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17621153.html" target="_blank">【COM3D2Mod教程】序章：教程简介</Typography.Link>
        <Typography.Title level={2}>2. 入门</Typography.Title>
        <blockquote>搞定动漫角色最重要的特征点，让别人看了能直呼老婆！</blockquote>
        <Space direction="vertical">
            <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17647617.html" target="_blank">【COM3D2Mod教程】第一章：Mod原理</Typography.Link>
            <Typography.Link href="https://www.cnblogs.com/BDFFZI/p/17660468.html" target="_blank">【COM3D2Mod教程】第二章：Mod制作</Typography.Link>
            制作中......
        </Space>
        <Typography.Title level={2}>3. 进阶</Typography.Title>
        <blockquote>让老婆能穿上自己的原设衣装，让别人看了能直呼大佬！</blockquote>
        制作中......
    </Typography.Paragraph>

}
export default MenuItem;    