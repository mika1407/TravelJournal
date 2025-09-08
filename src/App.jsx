import Header from './componets/Header'
import Entry from './componets/Entry'
import data from './data'; 

function App() {
  const entries = data.map(item => {
    // Välitä jokainen 'item' (matkakohde) Entry-komponentille propsina
    // Muista myös 'key' prop, kun renderöit listaa Reactissa
    return (
      <Entry
        key={item.id} // Tärkeä, kun renderöit listaa!
        item={item}   // Välitä koko item-objekti 'item'-nimisenä propsina
      />
    );
  });

  return (
    <>
      <Header />
      {/* Renderöi kaikki luodut Entry-komponentit */}
      {entries}
    </>
  );
}

export default App;
