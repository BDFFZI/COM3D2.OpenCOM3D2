import { Descriptions, Typography } from 'antd'
import { List } from 'antd/es/form/Form'

const MenuItem = {
    label: "联系站长",
    key: "/Communiction/Contact",
    page: () => {
        return <div>
            <Typography.Title>联系我们</Typography.Title>
            <Descriptions title="联系方式" bordered column={1}>
                <Descriptions.Item label='Bilibili（主要发布源，以及观看视频内容）'>BDFFZI</Descriptions.Item>
                <Descriptions.Item label='Github（所有项目均开源，欢迎技术反馈或贡献）'>https://github.com/BDFFZI</Descriptions.Item>
                <Descriptions.Item label={<div>
                    QQ群（建议或反馈网站问题）
                    <br />
                    （群主不是老玩家，没能力也没精力回答太多问题，基本上你得自己解决）
                    <br />
                </div>}>821799499</Descriptions.Item>
            </Descriptions>
        </div >
    }
}

export default MenuItem