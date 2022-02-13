import './index.css'
import {Link} from "react-router-dom";
export const No002 = () => {
    return(
        <div className={'no002'}>
            <Item url={'https://picsum.photos/500/400?rando=10'}/>
            <Item url={'https://picsum.photos/500/400?rando=1'}/>
            <Item url={'https://picsum.photos/500/400?rando=12'}/>
            <Item url={'https://picsum.photos/500/400?rando=13'}/>
            <Link className={'next-btn'} to={'/No003'} >下一個切版</Link>
        </div>
    )
}

const Item = ({url}) => {
    return(<div className='item'>
        <img src={url}/>
        <div className="tet">
            <h3>猴子都可以懂的切版</h3>
            <p>
                這一種圖文都是很簡單的
            </p>
        </div>
    </div>)
}