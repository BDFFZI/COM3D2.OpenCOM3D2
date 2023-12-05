import { LikeTwoTone } from '@ant-design/icons';
import { Alert, Button, Descriptions, Divider, Modal, Space, Typography } from 'antd'
import React, { useState } from 'react';
import Links from '../../Data/Links';

function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return <div>
        <Typography.Title level={2}>Mod是什么？</Typography.Title>
        <Typography.Paragraph>
            先说一下在COM3D2中mod是游戏自带的一项功能，所以并不是广义上的说的mod。
            <br />在这里，mod是特指一堆游戏资源（基本都是角色装扮），它们将会被游戏自动加载到女仆的编辑菜单里，从而为你提供更多的装扮选择。
            <br />另外，一些开发者会提前准备一套装扮和合适人体数据，并在配置好后将其存为一个预设文件(.preset)，我们可以将其直接看作COM3D2的人物卡。
            <br />所以mod一般由两种文件组成：preset文件和非preset文件。
        </Typography.Paragraph>
        <Typography.Title level={2}>如何安装Mod？</Typography.Title>
        <Typography>
            <Space direction='vertical'>
                <div>
                    mod中只有两种文件，分别放到<strong>游戏根目录</strong>的两个文件夹内即可完成安装。
                </div>
                <Descriptions column={1} bordered>
                    <Descriptions.Item label="preset文件">
                        放在<strong>Preset</strong>文件夹，<Typography.Text type="warning">注意带xml后缀的preset文件也算，这是一些插件需要用的</Typography.Text >。
                    </Descriptions.Item>
                    <Descriptions.Item label="非preset文件">
                        直接塞<strong>Mod</strong>文件夹，如果这文件夹没有，没有就自己创建一个。
                    </Descriptions.Item>
                </Descriptions>
                <div>
                    安装完成后进去女仆编辑界面，便可在对应的装扮分栏中找到你的Mod装扮。
                </div>
                <Alert message="注意装完后需要重启游戏，或者你可以用一些插件在游戏内刷新。"></Alert>
            </Space>
        </Typography>
        <Typography.Title level={2}>官方Mod？(性格包)</Typography.Title>
        <Typography.Paragraph>
            官方也定期会出些Mod，这些以DLC的形式被装到游戏中。
            <br />
            其中最为重要的一种是“<a href={Links.get("COM3D2性格包一览")} target="_blank" rel="noreferrer">性格包</a>”，
            <Typography.Text type="success">这可是实打实的增加新角色（新语音，新事件等）而不是简单的换皮！</Typography.Text>
            <blockquote >如何安装和使用？</blockquote>
            如果你是全DLC版，那功能一般已经装好了，在你雇佣新女仆时，你可以看到简介面部里是可以设置女主类型的，就是那个选项。
            <br />此外这些DLC还会增加一套符合人设的装扮，及其套装文件（Preset文件），但你下的游戏本体可能没有这些预设，所以我额外准备了<a href={Links.get("COM3D2性格包Preset文件")} target="_blank" rel="noreferrer">一份</a>，安装方式和普通Mod一样。
        </Typography.Paragraph>
        <Divider></Divider>
        <Alert showIcon type="success" message={
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                    恭喜你，你已经完成了所有入门教程现在可以尽情的愉快玩耍了。
                </div>
                <Button onClick={() => setIsModalOpen(true)}>下一章</Button>
                <Modal title={<LikeTwoTone twoToneColor="red" />} open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={<div></div>}>
                    你已成功抵达教程之底，或许COM3D2的女仆都将为你撼动( •̀ ω •́ )✧
                    <ul>
                        <li>如果你还有些其他问题，可以尝试查看余下的“常见问题”栏目解决。</li>
                        <li>如果你想知道信息源头，请查看“发现-相关链接”分栏，几乎所有内容都来源于这些链接。</li>
                    </ul>
                </Modal>
            </div>
        }></Alert>
    </div >
}

const MenuItem = {
    label: "3. Mod与性格包",
    key: "/Introduction/Module",
    page: Page
}

export default MenuItem;
