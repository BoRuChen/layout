import './index.css'
import {Link} from "react-router-dom";

export const No005 = () => {

    return(
        <div className={'no005'}>
            <div className="container">
                <Item url={'https://picsum.photos/600/300?rando=14'} title={'標題'} context={'內容'}/>
                <Item url={'https://picsum.photos/600/300?rando=10'} title={'標題'} context={'內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容'}/>
                <Item url={'https://picsum.photos/600/300?rando=11'} title={'標題'} context={'內容'}/>
                <Link className={'next-btn'} to={'/No006'} >下一個切版</Link>
            </div>
        </div>
    )
}

const Item = ({url,title,context}) => {

    return(
        <div className={'item'}>
            <div className="pic">
                <img src={url}/>
            </div>
            <div className="txt">
                <h2>{title}</h2>
                <p>{context}</p>
                <a className={'btn'} href={'#'}>more</a>
            </div>
        </div>
    )
}