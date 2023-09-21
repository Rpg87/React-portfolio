import './index.scss';
import Sidebar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import Music from '../Music';


const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                <span className="tags top-tags">&lt;body&gt;</span>
                <Music />

                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}
export default Layout;