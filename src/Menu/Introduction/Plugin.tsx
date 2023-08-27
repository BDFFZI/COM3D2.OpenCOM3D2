import { Typography, Alert, Space, Card, Button, Divider } from 'antd'
import { Link } from 'react-router-dom';
import Module from './Module'
import Links from '../../Data/Links';
import { ButtonLink } from '../../Data/Components';

const MenuItem = {
    label: "2. 插件与汉化",
    key: "/Introduction/Plugin",
    page: () => <div>
        <Typography.Title level={2}>插件是什么？</Typography.Title>
        <Typography.Paragraph>
            这是对原游戏功能的扩展，能极大提升游戏体验（比如翻译，作弊，解码，不闪退等），可以说是基本必装的东西。
        </Typography.Paragraph>
        <Typography.Title level={2}>如何获取插件并安装？</Typography.Title>
        <Typography.Paragraph>
            <Space direction='vertical'>
                <div>
                    直接用COM-Modular-Installer(后续简称CMI)。
                    这是老外做的一个插件整合包应用程序，插件全且兼容性好。
                    <br />
                    安装时选择一个适合的预设（我想大部分玩家只要选只管冲就行了），并遵照以下的几项注意点，然后一路确定即可。
                </div>
                <Card title="CMI 下载地址">
                    <Space>
                        <ButtonLink href={Links.get("COM3D2插件整合包_下载")}>官方地址</ButtonLink>
                        <ButtonLink href="https://mod.3dmgame.com/mod/186198">3DM下载（略旧）</ButtonLink>
                        <Button disabled>实在下不了也可以进群自取</Button>
                    </Space>
                </Card>
                <Alert showIcon message="确保你的游戏路径没有中文，部分插件不支持中文路径。" type="error" />
                <Alert showIcon type='warning' message="安装时记得把翻译插件去掉，因为那是英文的，而且你也没法用谷歌翻译。(但对老外来说CMI自带英化)"></Alert>
                <Alert type="success" message="提示" description={
                    <ul>
                        <li>记得勾选一个叫NPRShader的插件，这个插件需要手动勾选，而有些Mod需要这个。</li>
                        <li>CMI自带作弊插件和一款修改器，该修改器需要手动勾选，具体参见文档。</li>
                        <li>装完后游戏目录会出现一个<strong>CMI Documentation</strong>文件夹，文档在这里面，有中文版，记得读。</li>
                        <li>CMI是支持重复安装的，会自动清理游戏目录，如有喜欢的插件没勾选，可以直接重新安装。</li>
                        <li>如何卸载CMI？重新安装并取消所有插件勾选即可。</li>
                        <li>少部分Mod没有被CMI收入，比如还有一个高跟鞋插件，也有些Mod会用到这些，具体文档内有说明。</li>
                    </ul>
                } />
            </Space>
        </Typography.Paragraph>
        <Typography.Title level={2}>额外的汉化补丁在哪？</Typography.Title>
        <Typography.Paragraph>
            <Space direction='vertical'>
                由于是老外的东西，所以CMI自带的翻译并不支持中文，但别怕，我准备好了，点击左侧的“发现-汉化插件”栏目即可获取汉化插件。
                <Alert showIcon type="warning" message="推荐安装v3版本，因为目前只有这个是默认和CMI兼容的！"></Alert>
            </Space>
        </Typography.Paragraph>
        <Divider></Divider>
        <Alert showIcon type="success" message={
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                接下来你可以尝试装Mod看看，这样就可以把老婆带进游戏啦！
                <Button><Link to={Module.key}>下一章</Link> </Button>
            </div>
        }></Alert>
    </div >
}

export default MenuItem;