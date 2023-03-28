// import Painting from './components/Painting';
import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './paintings.json';

// export default function App() {
//   return (
//     <div>
//       {paintings.map(painting => (
//         <Painting
//           key={painting.id}
//           imageUrl={painting.url}
//           title={painting.title}
//           author={painting.author.tag}
//           profileUrl={painting.author.url}
//           price={painting.price}
//           quantity={painting.quantity}
//         />
//       ))}
//     </div>
//   );
// }

export default function App() {
  return (
    <div>
      {/* <PaintingList items={paintings} /> */}
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>

      <Section title="Лучшее">
        <PaintingList items={paintings} />
      </Section>
    </div>
  );
}
