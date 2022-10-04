import './style.css'
import PortfolioItem from '../PortfolioItem'


const portfolio_details = [
    {
        time: '2022',
        title: 'panupong-dev.vercel.app',
        title_link: 'https://panupong-dev.vercel.app',
        source_link: 'https://github.com/PanupongDeve/panupong-resume',
        detail: 'The source of this website.'
    },
    {
        time: '2022',
        title: 'gitops-with-compose-deployer',
        title_link: 'https://pw-web-solution.vercel.app',
        source_link: 'https://pw-web-solution.vercel.app',
        detail: 'repository for deploy application and manage version applicaiton with git branch'
    },
    {
        time: '2022',
        title: 'gitops-with-compose-builder',
        title_link: 'https://github.com/PanupongDeve/gitops-with-compose-builder',
        source_link: 'https://github.com/PanupongDeve/gitops-with-compose-builder',
        detail: 'template bash script for push docker and genarate docker-compose file for deploy application with gitops process'
    },
    {
        time: '2022',
        title: 'PW Web Solution',
        title_link: 'https://github.com/PanupongDeve/gitops-with-compose-deployer',
        source_link: 'https://github.com/PanupongDeve/gitops-with-compose-deployer',
        detail: 'Nextjs building landing page'
    },
    {
        time: '2021',
        title: 'k8s-pod-research',
        title_link: 'https://github.com/PanupongDeve/k8s-pod-research',
        source_link: 'https://github.com/PanupongDeve/k8s-pod-research',
        detail: 'Learning and understading that how k8s work and how to setup in production'
    },
    {
        time: '2021',
        title: 'application-platform',
        title_link: 'https://github.com/PanupongDeve/application-platform',
        source_link: 'https://github.com/PanupongDeve/application-platform',
        detail: 'Project for my learning Devops, infrastructure, Micro-Service'
    },
    {
        time: '2021',
        title: 'condo-thai-scrapper',
        title_link: 'https://github.com/PanupongDeve/condo-thai-scrapper',
        source_link: 'https://github.com/PanupongDeve/condo-thai-scrapper',
        detail: 'Read Data for condominium and using facebook sdk to auto post'
    },
    {
        time: '2021',
        title: 'linux-monitor-utility',
        title_link: 'https://github.com/PanupongDeve/linux-monitor-utility',
        source_link: 'https://github.com/PanupongDeve/linux-monitor-utility',
        detail: 'Utility shell script help poeple monitor resource in linux server'
    },
    {
        time: '2020',
        title: 'linux-swap-memory-service',
        title_link: 'https://github.com/PanupongDeve/linux-swap-memory-service',
        source_link: 'https://github.com/PanupongDeve/linux-swap-memory-service',
        detail: 'Startup script swap linux memory'
    },
    {
        time: '2019',
        title: 'line-shop-store',
        title_link: 'https://github.com/PanupongDeve/line-shop-store',
        source_link: 'https://github.com/PanupongDeve/line-shop-store',
        detail: 'Clone https://github.com/moltin/react-demo-store.git and add feature firebase and Line LIFF'
    },
    {
        time: '2019',
        title: 'javascript-fontend-services',
        title_link: 'https://github.com/PanupongDeve/javascript-fontend-services',
        source_link: 'https://github.com/PanupongDeve/javascript-fontend-services',
        detail: 'Service ต่างๆที่ใช้ใน fronted web(es6) เช่น React Angular'
    },
    {
        time: '2019',
        title: 'react-kdr',
        title_link: 'https://github.com/PanupongDeve/react-kdr',
        source_link: 'https://github.com/PanupongDeve/react-kdr',
        detail: 'Use React and Firebase library to build E-commerce client'
    },
    {
        time: '2018',
        title: 'FerrayBooking-Backend',
        title_link: 'https://github.com/PanupongDeve/FerrayBooking-Backend',
        source_link: 'https://github.com/PanupongDeve/FerrayBooking-Backend',
        detail: 'API Nodejs + OOP and use design pattern for create API'
    },
    {
        time: '2018',
        title: 'info-smile',
        title_link: 'https://github.com/PanupongDeve/info-smile-prod',
        source_link: 'https://github.com/PanupongDeve/info-smile-prod',
        detail: 'website รวบรวม content เกี่ยวกับการดูแลสุขภาพจิต และระบบจองสำหรับปรึกษาผู้เชี่ยวชาญ'
    }
]


const PortfolioBody = () => {
    return (
        <div className='portfolio-body p-4'>
            <div className="row">
                {
                    portfolio_details.map((portfolio, index) => {
                        return (
                            <div key={`card-detail-${index}`} className="col-4 mb-4">
                                <PortfolioItem 
                                    time={portfolio.time}
                                    title={portfolio.title}
                                    title_link={portfolio.title_link}
                                    detail={portfolio.detail}
                                    source_link={portfolio.source_link}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PortfolioBody
