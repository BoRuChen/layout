import './index.css';
import {Link} from "react-router-dom";

export const No001 = () => {

    return(
        <div className="No001">
            <div className="container">
                <div className="banner-text">
                    <h1>
                        猴子都能懂的
                        <small>這個網頁介面怎麼切</small>
                    </h1>
                    <h2>圖文滿版區塊</h2>
                    <p>畫面實在常見 沒有理由不會切</p>
                    <p>畫面實在常見 沒有理由不會切</p>
                </div>
            </div>
            <Link className={'next-btn'} to={'/No002'} >下一個切版</Link>
        </div>
    )
}