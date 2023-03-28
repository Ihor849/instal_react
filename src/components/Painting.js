import PropTypes from 'prop-types';
import defaultImage from './default.jpg';

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  qoantity: PropTypes.number.isRequired,
};

export default function Painting({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author = 'не известен',
  price,
  quantity,
}) {
  return (
    //   const { url,title,profileUrl,author = 'не известен',price,} = props деструкторизация
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена: {price} кредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчиваеться' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

// Стрелочная функция
// const Painting = ({ url, title, profileUrl, author, price }) => {
//   return (
//     <div>
//       <img src={url} alt={title} width="480" />
//       <h2>{title}</h2>
//       <p>
//         Автор: <a href={profileUrl}>{author}</a>
//       </p>
//       <p>Цена: {price} кредитов</p>
//       <p>Доступность: заканчиваеться или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// };

// export default Painting;
