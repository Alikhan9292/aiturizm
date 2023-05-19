import React from 'react';
import Navbar from '../components/Navbar';
import './BeautifulPlaces.css';

const BeautifulPlaces = () => {
  return (
    <div>
      <Navbar />
      <h1>Топ-5 красивых мест в Казахстане</h1>
      <div className="place-container">
        <div className="place">
          <h2>1. Боровое</h2>
          <img src="https://vsegda-pomnim.com/uploads/posts/2022-04/1648766024_37-vsegda-pomnim-com-p-ozero-borovoe-kazakhstan-foto-38.jpg" alt="Borovoe" />
          <p>Боровое - потрясающее чудо природы, расположенное в северном Казахстане. Известный своими кристально чистыми озерами и пышными лесами, этот национальный парк является популярным местом для пеших прогулок, купания и кемпинга.</p>
        </div>
        <div className="place">
          <h2>2. Чарынский каньон</h2>
          <img src="https://poehali.kz/upload/iblock/70a/70aa418a4b84f303ca814e176308b004.JPEG" alt="Charyn Canyon" />
          <p>Чарынский каньон - геологическое чудо, расположенное на юго-востоке Казахстана. Этот потрясающий каньон, высеченный рекой Чарын за миллионы лет, отличается высокими скальными образованиями, извилистыми тропами и захватывающими дух видами.</p>
        </div>
        <div className="place">
          <h2>3. Кольсайские озера</h2>
          <img src="http://admin.kazakhstan.travel/files/public/201901/23/fb2484c27b234f0fbd971c30d30304f1/almaty-kolsay2.jpg" alt="Kolsai Lakes" />
          <p>Кольсайские озера - это серия из трех альпийских озер, расположенных в живописных горах Тянь-Шаня. Окруженные пышными лесами и заснеженными вершинами, эти кристально чистые озера являются излюбленным местом для пеших прогулок и кемпинга..</p>
        </div>
        <div className="place">
          <h2>4. Бозжира</h2>
          <img src="https://kompastour.com/useruploads/excurs/excurs_5574fdba59.jpg" alt="Bozzhira" />
          <p>Бозжира - уникальное чудо природы, расположенное в западной части Казахстана. Этот потусторонний ландшафт характеризуется рядом возвышающихся скальных образований и глубоких каньонов и является популярным местом для пеших прогулок и фотографирования.</p>
        </div>
        <div className="place">
          <h2>5. Алтайские горы</h2>
          <img src="https://gotonature.ru/uploads/posts/2019-11/1574066719_gornyj-altaj-2.jpg" alt="Altai Mountains" />
          <p>Алтайские горы - это захватывающая дух цепь вершин и долин, расположенных в Восточном Казахстане. Этот регион, где обитает множество диких животных и природных чудес, является обязательным местом для посещения любителями природы и искателями приключений.</p>
        </div>
      </div>
    </div>
  );
};

export default BeautifulPlaces;
