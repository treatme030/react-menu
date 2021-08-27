import React, { useState } from 'react';
import Categories from './Categories';
import items from './data';
import Menu from './Menu';

//'all' 추가, 중복 제외한 카테고리
const allCategories = ['all',...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    const newItems = items.filter(item => item.category === category)
    setMenuItems(newItems)
  }
  return (
    <main>
      <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} categories={categories}/>
          <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;
