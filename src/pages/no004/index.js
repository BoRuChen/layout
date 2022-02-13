import './insex.css'
import {Link} from "react-router-dom";
export const No004 = () => {

    return <div className='no004'>
        <Item reverse={false} title={'標題'} context={'內容'} url={'https://picsum.photos/600/300?rando=10'}/>
        <Item reverse={true} title={'標題'} context={'內容'} url={'https://picsum.photos/600/300?rando=11'}/>
        <Item reverse={false} title={'標題'} context={'內容'} url={'https://picsum.photos/600/300?rando=12'}/>
        <Item reverse={true} title={'標題'} context={'內容'} url={'https://picsum.photos/600/300?rando=13'}/>
        <Item reverse={false} title={'標題'} context={'內容'} url={'https://picsum.photos/600/300?rando=14'}/>
        <Link className={'next-btn'} to={'/No005'} >下一個切版</Link>

    </div>
}

const Item = ({reverse,title,context,url}) => {


    return(
        <div className='item'>
            {
                reverse?
                    <>
                        <div className="pic">
                            <img src={url}/>
                        </div>
                        <div className="txt">
                            <h2>{title}</h2>
                            <p>{context}</p>
                        </div>
                    </>
                    :
                    <>
                        <div className="txt">
                            <h2>{title}</h2>
                            <p>{context}</p>
                        </div>
                        <div className="pic">
                            <img src={url}/>
                        </div>
                    </>
            }

        </div>
    )
}