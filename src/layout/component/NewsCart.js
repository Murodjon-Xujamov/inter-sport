import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineDateRange } from 'react-icons/md';
import '../../assets/scss/_news_box.scss';

const News = (props) => {
  return (
    <div className='news-box' style={{marginTop: `${props.mt}px`}}>
        <div className='news__image'>
            <img src='http://lokomotiv.uz/wp-content/uploads/2022/02/photo_2022-02-24_12-45-43-750x406.jpg' alt="not found" />
        </div>
        <div className='news__action'>
            {props.span ?
              <span>БЕЗ РУБРИКИ</span>
              :
              null
            }
            <div className='news__link'><Link to=''>🚂 «Локомотиву» 20 лет! Поздравляем наших болельщиков с юбилеем клуба!</Link></div>
            <div className='date'><MdOutlineDateRange size={14} fill='gray' /> 15.02.2022</div>
        </div>
    </div>
  )
}

export default News;
