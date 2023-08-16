import { Typography } from "antd";


const MenuItem = {
    label: "Mod制作",
    key: "/Research/MakeMod",
    page: () => <Typography.Paragraph>
        <Typography.Title level={2}>1. 序章</Typography.Title>
        <blockquote>前置要求，教程简介，必读！！！</blockquote>
        <Typography.Link ></Typography.Link>
        <Typography.Title level={2}>2. 入门（制作中）</Typography.Title>
        <blockquote>搞定动漫角色最重要的特征点，让别人看了能直呼老婆！</blockquote>
        <Typography.Title level={2}>3. 进阶（制作中）</Typography.Title>
        <blockquote>让老婆能穿上自己的原设衣装，让别人看了能直呼大佬！</blockquote>
    </Typography.Paragraph>

}
export default MenuItem;    