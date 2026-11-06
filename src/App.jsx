import { useState } from 'react';

function App() {  
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Edzés 💪', completed: false },
    { id: 2, title: 'Programozás 💻', completed: false },
    { id: 3, title: 'Olvasás 📖', completed: false }
  ]);

  function toggleTask(id) {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  }

  return (
    <main>
      <h1>QUEST ⚔️</h1>
      <p>Üdvözöllek a saját fejlődési naplódban!</p>

      <h2>Mai küldetéseim</h2>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}

            <button onClick={() => toggleTask(task.id)}>
              {task.completed ? '✅ Kész!' : 'Teljesítés'}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;