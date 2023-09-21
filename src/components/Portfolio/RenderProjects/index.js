import './index.scss';


const RenderProjects = ({ portfolio }) => {
    return (
        <div className="images-container">
            {portfolio.map((port, idx) => {
                return (
                    <div className="image-box" key={idx}>
                        <img src={port.cover} className="portfolio-image" alt="portfolio" />
                        <div className="content">
                            <p className="title">{port.title}</p>
                            <h4 className="description">{port.description}</h4>
                            <button className="btn" onClick={() => window.open(port.url)}>
                                Demo
                            </button>
                            <button className="btn two" onClick={() => window.open(port.code)}>
                                Code
                            </button>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default RenderProjects;