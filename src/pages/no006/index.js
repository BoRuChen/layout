import './index.scss';
import {Link} from "react-router-dom";



export const No006 = () => {
    const lists = ['項目一','項目二','項目三'];
    return(
        <div className="no006">
            <div className='container'>
                <FooterItem title={'關於課程'} lists={lists}/>
                <FooterItem title={'課程列表'} lists={lists}/>
                <FooterItem title={'服務項目'} lists={lists}/>
                <div className="footer-item footer-subs">
                    <h2>訂閱電子報</h2>
                    <form>
                        <input type={'text'} name={''}/>
                        <input type={'submit'} value={'訂閱'}/>
                    </form>
                </div>
            </div>
            <div className="copyright">
                Copyright &copy; 2022 內容內容內容內容內容內容
            </div>
            <Link className={'next-btn'} to={'/No007'} >下一個切版</Link>
        </div>
    )
}


const FooterItem = ({title,lists}) => {
  return(
      <div className="footer-item">
          <h2>{title}</h2>
          <nav>
              {lists.map((list) => {
                  return(
                      <a href='#' key={list}>{list}</a>
                  )
              })}
          </nav>
      </div>
  )
}