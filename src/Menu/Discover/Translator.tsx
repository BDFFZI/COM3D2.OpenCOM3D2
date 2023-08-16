import { Alert, Button, Card, List, Space } from "antd";
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
                        <ul>
                            <li>最早倒弄的汉化补丁，通过直接修改源代码的方式安装。</li>
                            <li>配置麻烦，翻译方式野蛮，且视频教程已被审核锁定。</li>
                        </ul>
                        优点：
                        <ul>
                            <li>百分百解决文本汉化问题，不存在兼容性问题。</li>
                            <li>支持选择性翻译，文本翻译方便实用。</li>
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
                            <li>基于非原版<a href="https://github.com/BDFFZI/XUnity.AutoTranslator" target="_blank" rel="noreferrer">XUnity.AutoTranslator</a>翻译</li>
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
                title: "V3.2版（最佳兼容版本 COM3D2 2.28）（推荐）",
                extra: <ButtonLink href="https://wwzc.lanzouj.com/i1U2R13t4ztc" >下载</ButtonLink>,
                content:
                    <Space direction="vertical">
                        <div>
                            原理：
                            <ul>
                                <li>一款非原版的YATranslator插件(<a href='https://github.com/BDFFZI/CM3D2.YATranslator.git' target="_blank" rel="noreferrer">BDFFZI.YATranslator</a>)</li>
                                <li>来自杂酱整合包的汉化文件(B站up：zaj2001)</li>
                            </ul>
                        </div>
                        <div>
                            优点：
                            <ul>
                                <li>修复了前代v3无法使用“摄影模式-场景选择”的问题。（实测修个毛）</li>
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
                    <Alert message="预计要等到明年年底才能正式开工，因为我需要先学习人工智能，并尝试训练相应模型，但类似的汉化模式，目前市面上已经有了。"></Alert>
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
        </div>
    }
}
export default MenuItem;