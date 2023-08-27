import { Alert, Descriptions, Typography } from "antd";
import Links, { LinkKey } from "../../Data/Links";

function Link({ name, description }: { name: LinkKey, description?: string }) {
    return <li>
        <a href={Links.get(name)} target="_blank" rel="noreferrer" >{name}</a>
        {description !== undefined ? "（" + description + "）" : ""}
    </li>
}

const MenuItem = {
    label: <Typography.Text type="success">相关链接</Typography.Text>,
    key: '/Discover/LinksUI',
    page: () => <Typography.Paragraph>
        <Descriptions bordered labelStyle={{ width: "200px" }} column={1}>
            <Descriptions.Item label="官方">
                <ul>
                    <Link name="KISS公司作品时间线" />
                    <Link name="COM3D2产品一览" />
                    <Link name="COM3D2性格包一览" />
                    <Link name="COM3D2商店（全DLC一览）" />
                    <Link name="COM3D2动态" />
                    <Link name="COM3D2版本更新说明和下载" />
                </ul>
            </Descriptions.Item>
            <Descriptions.Item label="攻略">
                <ul>
                    <Link name="COM3D2SeesaaWiki"></Link>
                    <Link name="COM3D2SeesaaWiki_Mod制作"></Link>
                    <Link name="COM3D2Wiki"></Link>
                    <Link name="COM3D2萌娘百科"></Link>
                </ul>
            </Descriptions.Item>
            <Descriptions.Item label="社区">
                <ul>
                    <Link name="COM3D2社区_Discord" description="强烈推荐，同时这也是CMI推荐的论坛"></Link>
                    <Link name="COM3D2社区_百度贴吧" description="COM3D2吧被封了，但CM3D2吧还在"></Link>
                    <Link name="COM3D2社区_Reddit"></Link>
                </ul>
                <Alert type="success" showIcon message="社区的功能往往是复合的，所以这里面也可以找到插件Mod攻略等资源的分享！"></Alert>
            </Descriptions.Item>
            <Descriptions.Item label="找游戏和DLC">
                <ul>
                    <Link name="GGBases" />
                    <Link name="Sukebei" />
                    <Link name="R18Manga" />
                    <Link name="AnimeSharing" />
                    <Link name="COM3D2.5纯本体下载" />
                </ul>
            </Descriptions.Item>
            <Descriptions.Item label="找插件和工具">
                <ul>
                    <Link name="COM3D2插件整合包" />
                    <Link name="COM3D2工具插件收集" />
                </ul>
            </Descriptions.Item>
            <Descriptions.Item label={<div>
                找散装Mod
            </div>}>
                <ul>
                    <Link name="COM3D2Mod搜索_Mukuu" />
                    <Link name="COM3D2Mod分享_Motimoti3d" />
                    <Link name="COM3D2Mod分享_3DM" />
                </ul>
                <Alert type="success" showIcon message="过程中大部分链接会带你指向作者的云盘，借此可以获取大量Mod，同时这也是网络上Mod的收集源头，成百G的Mod基本都是通过这种方式爬下来的，所以一定要带着爬虫思维去找资源！"></Alert>
            </Descriptions.Item>
        </Descriptions>
    </Typography.Paragraph>
}
export default MenuItem;