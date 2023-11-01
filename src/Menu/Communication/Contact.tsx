import { Descriptions, Typography } from 'antd'
import { List } from 'antd/es/form/Form'

const MenuItem = {
    label: "联系站长",
    key: "/Communiction/Contact",
    page: () => {
        return <div>
            <Typography.Title>联系站长</Typography.Title>
            <Descriptions title="联系方式" bordered column={1}>
                <Descriptions.Item label='Bilibili（主要发布源，以及观看视频内容）'>https://space.bilibili.com/35949109</Descriptions.Item>
                <Descriptions.Item label='Github（所有项目均开源，欢迎技术反馈或贡献）'>https://github.com/BDFFZI</Descriptions.Item>
                <Descriptions.Item label='QQ群（充当社区功能，闲聊讨论的地方）'>821799499</Descriptions.Item>
            </Descriptions>
        </div >
    }
}

export default MenuItem