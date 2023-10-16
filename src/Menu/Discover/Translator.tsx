import { Alert, Button, Card, Divider, List, Space } from "antd";
import React from "react";
import { ButtonLink } from "../../Data/Components";

const MenuItem = {
    label: "汉化插件",
    key: '/Discover/Translator',
    page: () => {
        const texts1 = [
            {
                title: "V1版",
                extra: <Button disabled>已弃用</Button>,
                content:
                    <div>
                        原理：
                        <ul>
                            <li>最早倒弄的汉化补丁，基于实时机翻。</li>
                            <li>通过直接修改NGUI或部分游戏源码实现翻译接入。</li>
                            <li>利用GUI做用户交互实现选择翻译、回退、重翻等操作。</li>
                        </ul>
                        优点：
                        <ul>
                            <li>百分百解决文本汉化问题，不存在兼容性问题。</li>
                            <li>支持选择性翻译，文本翻译方便实用。</li>
                        </ul>
                        缺点：
                        <ul>
                            <li>配置麻烦，翻译方式粗暴，且视频教程已被审核锁定。</li>
                        </ul>
                    </div>

            },
            {
                title: "V2版",
                extra: <ButtonLink href="https://wwzc.lanzouj.com/idml10uwhute" >下载</ButtonLink>,
                content:
                    <div>
                        原理：
                        <ul>
                            <li>基于二创后的XUnity.AutoTranslator插件(<a href='https://github.com/BDFFZI/XUnity.AutoTranslator/releases/tag/v1.0.0' target="_blank" rel="noreferrer">BDFFZI.XUnity.AutoTranslator</a>)</li>
                        </ul>
                        优点：
                        <ul>
                            <li>V1升级版，安装简单，符合插件规范。</li>
                            <li>自带账号，实时机翻，速度较快。</li>
                        </ul>
                        缺点：
                        <ul>
                            <li>几乎没有图片汉化。</li>
                            <li>有一定延迟，机翻质量差。</li>
                            <li>需要翻译账号，公用账号月底不够用。</li>
                        </ul>
                        <br />
                        <ButtonLink type="link" href="https://wwzc.lanzouj.com/idml10uwhute" block>视频教程</ButtonLink>
                    </div>
            },
            {
                title: "V3.3版（最佳兼容版本 COM3D2 2.28）（推荐）",
                extra: <ButtonLink href="https://wwzc.lanzouj.com/ikghe1bz5isj" >下载</ButtonLink>,
                content:
                    <Space direction="vertical">
                        <div>
                            原理：
                            <ul>
                                <li>基于二创后的CM3D2.YATranslator插件(<a href='https://github.com/BDFFZI/CM3D2.YATranslator.git' target="_blank" rel="noreferrer">BDFFZI.CM3D2.YATranslator</a>)</li>
                                <li>来自杂酱整合包的汉化文件(B站up：zaj2001)</li>
                            </ul>
                        </div>
                        <div>
                            优点：
                            <ul>
                                <li>包含v2翻译，支持补翻缺漏的文本。（默认关闭v2，防止重复翻译）</li>
                                <li>本地翻译，无延迟，无额度限制。</li>
                                <li>含图片汉化，汉化全，部分内容人工翻译。</li>
                            </ul>
                        </div>
                        <div>
                            缺点：
                            <ul>
                                <li>限制特定游戏版本。</li>
                                <li>大部分内容仍为机翻。</li>
                            </ul>
                        </div>
                        <div>
                            使用方式：
                            <br />装完CMI后直接将这补丁解压到游戏根目录即可。
                            <br />关于v2部分请参见v2栏目的视频教程。
                        </div>
                        <Alert showIcon type="warning" message="V3版随着版本更新，汉化文件不一定兼容！" description={
                            <ul>
                                <li>文本汉化（对话翻译）不全？<br />此时可以借用v2汉化补丁的实时翻译功能，进行在线机翻。</li>
                                <li>图片翻译（界面翻译）异常？<br />可以尝试删除Sybaris\UnityInjector\Config\Assets文件夹或其中出错的图片，以取消图片翻译功能。</li>
                            </ul>
                        }
                        ></Alert>
                    </Space >
            },
            {
                title: "V4版",
                extra: <Button disabled>开发中</Button>,
                content: <div>
                    原理：
                    <ul>
                        <li>基于新式翻译插件<a href="https://github.com/ghorsington/COM3D2.i18nEx" target="_blank" rel="noreferrer">COM3D2.i18nEx</a>进行本地翻译。</li>
                        <li>机翻改为使用新式AI进行翻译，而非传统机翻。</li>
                    </ul>
                    优点：
                    <ul>
                        <li>借助官方翻译功能，使用文本而非图片翻译界面，版本兼容性强。</li>
                        <li>堪比人工的机翻质量。</li>
                    </ul>
                    <br />
                    <Alert message="预计要等到2024年下半年才能发布，事务比较繁忙，且希望能自己学着搞一套能本地部署的高质量AI翻译。不过类似的汉化模式，目前市面上已经有了。"></Alert>
                </div>
            }
        ]


        return <div>
            <Alert showIcon
                type="error"
                description="使用汉化插件时请务必确保安装CMI时去掉了所有自带的翻译插件，否则会引起冲突！"
            />
            <List
                dataSource={texts1}
                renderItem={(item, index) =>
                    <List.Item key={index}>
                        <Card
                            title={item.title}
                            extra={item.extra}
                            style={{ width: 600 }}
                        >
                            {item.content}
                        </Card>
                    </List.Item>
                }
            >
            </List>
            <Divider children="备用补丁"></Divider>
            <Card
                title="V3版（旧版，无需CMI）"
                extra={<ButtonLink href="https://wwzc.lanzouj.com/ic9Pp12sicjg" >下载</ButtonLink>}
                style={{ width: 600 }}
            >
                这是为那些无法使用BepInEx加载器（CMI）的人预留的一个旧版补丁包，基于Sybaris插件加载器，自带汉化和解码插件，其他插件需要自行去Github搜索安装。
                <ButtonLink type="link" href="https://www.bilibili.com/video/BV1Jm4y1Y7cr" block>视频教程</ButtonLink>
                <br></br>关于Sybaris加载器，我是从这个翻译插件的<a href="https://github.com/ghorsington/CM3D2.YATranslator/wiki/Installation" target="_blank" rel="noreferrer">安装手册</a>里下载到的。
            </Card>

        </div>
    }
}
export default MenuItem;