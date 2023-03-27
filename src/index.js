// import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

// const data1 = paintings[1];
// const data2 = paintings[2];

// const painting = paintings[0];
// function Painting({ url, title, profileUrl, author, price }) {
//   // const { url, title, profileUrl, author, price } = props; деструкторизация
//   // console.log(props);
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
// }

// const painting1 = (
//   <div>
//     <img src={data1.url} alt={data1.title} width="480" />
//     <h2>{data1.title}</h2>
//     <p>
//       Автор: <a href={data1.author.url}>{data1.author.tag}</a>
//     </p>
//     <p>Цена: {data1.price} кредитов</p>
//     <p>Доступность: заканчиваеться или есть в наличии</p>
//   </div>
// );
// const painting2 = (
//   <div>
//     <img src={data2.url} alt={data2.title} width="480" />
//     <h2>{data2.title}</h2>
//     <p>
//       Автор: <a href={data2.author.url}>{data2.author.tag}</a>
//     </p>
//     <p>Цена: {data2.price} кредитов</p>
//     <p>Доступность: заканчиваеться или есть в наличии</p>
//   </div>
// );
// const els = (
//   <div>
//     {painting1}
//     {painting2}
//   </div>
// );
// ReactDOM.render(<Painting a="5" b="10" />, document.querySelector('#root'));
const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <Painting
//       url={painting.url}
//       title={painting.title}
//       authorName={painting.author.tag}
//       profileUrl={painting.author.url}
//       price={painting.price}
//     />
//   </StrictMode>,
// );
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
// const elem1 = <span>Привет</span>;
// const elem2 = <span>мир</span>;

// const jsxElements = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
// console.log(jsxElements);
// // ReactDOM.render(element, document.querySelector('#root'));
// ReactDOM.render(jsxElements, document.querySelector('#root'));
