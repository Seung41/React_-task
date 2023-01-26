import { Col } from 'antd';
import { useMediaQuery } from 'react-responsive'


export const MemberCard = ({ title, description, imgUrl }) => {

    const Mobile = ({ children }) => {
        // 입력하세요
    }
    const Default = ({ children }) => {
        // 입력하세요
    }
    
    return (
        <>
        {/* 알맞은 태그를 입력하세요 */}
            <Col size={20} sm={10} md={8}>
                <div className="member-imgbx">
                    <img src={imgUrl} />
                    <div className="member-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
            <Col size={20} sm={10} md={8} style={{ backgroundColor: '#fdcd51' }}>
                <div className="member-imgbx">
                    <img src={imgUrl} />
                    <div className="member-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
        {/* 알맞은 태그를 입력하세요 */}
        </>
        
    ) 
}