import { Row, Col, Tabs, Card } from 'antd';
import { MemberCard } from './MemberCard';
import partFE1 from '../assets/img/partFE1.png';
import partFE2 from '../assets/img/partFE2.png';
import partFE3 from '../assets/img/partFE3.png';
import partBE1 from '../assets/img/partBE1.png';
import partDM1 from '../assets/img/partDM1.png';
import partDM2 from '../assets/img/partDM2.png';
import partDM3 from '../assets/img/partDM3.png';
import partDM4 from '../assets/img/partDM4.png';
import partDM5 from '../assets/img/partDM5.png';
import partDM6 from '../assets/img/partDM6.png';
import partQA1 from '../assets/img/partQA1.png';
import teamLeaderImg from "../assets/img/teamLeader.png";

export const Member = () => {
    const manage = [
        {
            title: "Kim Hyeongtak",
            description: "Part Leader & Domain Manager",
            imgUrl: partDM1,
        },
        {
            title: "Ahn Daehoon",
            description: "Domain Manager & Developer",
            imgUrl: partDM2,
        },
        {
            title: "Lee Sooyoung",
            description: "Domain Manager & Developer",
            imgUrl: partDM3,
        },
        {
            title: "Kim moonyoung",
            description: "Domain Manager & Developer",
            imgUrl: partDM4,
        },
        {
            title: "Min Seonhong",
            description: "Domain Manager & Developer",
            imgUrl: partDM5,
        },
        {
            title: "Kim yunji",
            description: "Domain Manager & Developer",
            imgUrl: partDM6,
        }
    ];

    const fronEnd = [
        {
            title: "Son Soohyun",
            description: "Part Leader & Publisher & Developer",
            imgUrl: partFE1,
        },
        {
            title: "Lee Seungyeon",
            description: "Domain Manager & Developer",
            imgUrl: partFE2,
        },
        {
            title: "Kim Daewan",
            description: "Domain Manager & Developer",
            imgUrl: partFE3,
        }
    ];

    const backEnd = [
        {
            title: "Jang Gyeongmin",
            description: "Part Leader & Developer",
            imgUrl: partBE1,
        }
    ];

    const QA = [
        {
            title: "Lee Daewon",
            description: "Part Leader & Quality Assurance",
            imgUrl: partQA1,
        }
    ];

    const { TabPane } = Tabs;
    return (
        <section className='member' id='member'>
            <h2>Member</h2>
            <p>ERP 개발팀은 현재 총 인원 12명으로 구성되어 있으며, 각 4개의 파트로 구분되어 있습니다.</p>
            <Row justify="center">
                <Col xs={20} md={8} >
                    <img src={teamLeaderImg} alt="Contact Us" />
                </Col>
                <Col xs={20} md={8}>
                    <h3>Team Leader</h3>
                    <h4>Kim Yutaek</h4>
                    <br />
                    <p className="txtLeft">언제나 밝은 미소로 직원들을 맞이하여 주시며, 팀원들을 이끌어주시고 소통에 힘써주시는 팀장님의 사랑 속에서 늘 가족적인 분위기로 웃음이 끊일 날이 없습니다.</p>
                </Col>
            </Row>
            <br /><br />
            <Row justify='center'>
                <Col size={20} sm={20} md={16}>
                    <Tabs
                    defaultActiveKey="1"
                    defaultPanes="4"
                    centered
                    tabIndex={4}
                    >
                        <TabPane tab='manage' key={1}>
                            <Row gutter={[8,8]} justify="center">
                            {
                                manage.map((member, index) => {
                                    return (
                                        <MemberCard 
                                            key={index}
                                            {...member}
                                        />
                                    )
                                })
                            }
                            </Row>
                        </TabPane>
                        <TabPane tab='fronEnd' key={2}>
                            <Row gutter={[8,8]} justify="center">
                                {
                                    fronEnd.map((member, index) => {
                                        return (
                                            <MemberCard 
                                                key={index}
                                                {...member}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane tab='backEnd' key={3}>
                            <Row gutter={[8,8]} justify="center">
                                {
                                    backEnd.map((member, index) => {
                                        return (
                                            <MemberCard 
                                                key={index}
                                                {...member}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane tab='QA' key={4}>
                            <Row gutter={[8,8]} justify="center">
                                {
                                    QA.map((member, index) => {
                                        return (
                                            <MemberCard 
                                                key={index}
                                                {...member}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                    </Tabs>
                </Col>
            </Row>
        </section>
    )
}