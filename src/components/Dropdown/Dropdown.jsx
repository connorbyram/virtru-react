import './Dropdown.css'

export default function Dropdown() {
 return (
    <div className="container">
        <div className="dropdown-table">
            <div className="columns">
                <div className="column">
                    <h4>Industries</h4>
                    <a href="/">Aerospace & Defence</a>
                    <a href="/">Education</a>
                    <a href="/">Federal Government</a>
                    <a href="/">Finance</a>
                    <a href="/">Healthcare</a>
                </div>
                <div className="column">
                    <h4>Compliance</h4>
                    <a href="/">CJIS</a>
                    <a href="/">CMMC</a>
                    <a href="/">CUI</a>
                    <a href="/">FERPA</a>
                    <a href="/">Financial Services</a>
                    <a href="/">FTC Safegaurds Rule</a>
                    <a href="/">HIPPA</a>
                </div>
            </div>
            <div className="feature">
                <img src="https://www.virtru.com/hs-fs/hubfs/vvoc-logo-horiz.png?width=400&height=104&name=vvoc-logo-horiz.png" alt="logo" />
                <p>From universities to telecom companies, federal government agencies to the world's largest financial institutions — everyone has sensitive data to protect. Hear directly from IT leaders on what data-centric security means to them.</p>
                <div className="cta">
                    <img src="https://www.virtru.com/hs-fs/hubfs/23-VVoC-Equip-Webinar-Banner-400x200.jpg?width=400&height=200&name=23-VVoC-Equip-Webinar-Banner-400x200.jpg" alt="logo" />
                    <div>
                        <h5>Watch On Demand</h5>
                        <p>See how this healthcare startup built a security-focused culture.</p>
                        <a href="/">Watch Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 )
}