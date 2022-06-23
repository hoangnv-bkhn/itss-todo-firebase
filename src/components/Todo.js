import React, { useState } from 'react';

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
// import useStorage from '../hooks/storage';
import useFbStorage from '../hooks/fbStorage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() {
  const [items, addItem, updateItem, clearItems] = useFbStorage();
  
  const [filter, setFilter] = React.useState('ALL');

  const displayItems = items.filter(item => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
  });
  
  const handleCheck = checked => {
    // const newItems = items.map(item => {
    //   console.log(123)
    //   if (item.id === checked.id) {
    //     item.done = !item.done;
    //   }
    //   return item;
    // });
    updateItem(checked);
  };
  
  // const handleAdd = text => {
  //   updateItem([...items, { key: getKey(), text, done: false }]);
  // };
  
  const handleFilterChange = value => setFilter(value);

  return (
    <article class="panel is-danger">
      <div className="panel-heading">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-calendar-check"></i>
          </span>
          <span> ITSS Todoアプリ</span>
        </span>
      </div>
      <Input onAdd={addItem} />
      <Filter
        onChange={handleFilterChange}
        value={filter}
      />
      {displayItems.map(item => (
        <TodoItem 
          key={item.id}
          item={item}
          onCheck={handleCheck}
        />
      ))}
      <div className="panel-block">
        {displayItems.length} items
      </div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </article>
  );
}

export default Todo;