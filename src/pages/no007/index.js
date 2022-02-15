import './index.scss';
import logo192 from '../../img/logo192.png';
import { AiOutlineSearch }  from "react-icons/ai";
import {useState} from "react";
export const No007 = () => {

    const [inputValue,setInputValue] = useState("");

    return(
        <div className="no007">
            <div className="main-header">
                <div className="container">
                    <a href={'#'} className={'logo'}>
                        <img alt={'logo'} src={logo192}/>
                    </a>
                    <nav className={'main-nav'}>
                        <a href={'#'}>項目一</a>
                        <a href={'#'}>項目二</a>
                        <a href={'#'}>項目三</a>
                        <a href={'#'}>項目四</a>
                    </nav>
                    <form className={'header-search'}>
                        <input type='search' value={inputValue} name={''} onChange={(e) => {setInputValue(e.target.value)}}/>
                        <button>
                            <AiOutlineSearch />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

