import './index.css'
import {Link} from "react-router-dom";

export const No003 = () => {

    return(
        <div className='no003'>
            <Card url={'https://picsum.photos/300/300?rando=10'}/>
            <Card url={'https://picsum.photos/300/300?rando=11'}/>
            <Card url={'https://picsum.photos/300/300?rando=12'}/>
            <Link className={'next-btn'} to={'/No004'} >下一個切版</Link>
        </div>
    )
}

const Card = ({url}) => {

    return(
        <div className='item'>
            <img src={url}/>
            <div className="txt">
                <h2>CSS可樂</h2>
                <p>
                    一個優秀的
                </p>
            </div>
        </div>
    )
}