import { useState } from "react";
import { ListaTareas } from "./ListaTareas";

const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");
  const [listaTareas, setlistaTareas] = useState<string[]>([]);
  const handleAddTask = () => {
    if (nuevaTarea.trim() == "") return;
    setlistaTareas((tareasAnteriores) => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };
  const handleBorrarTarea = (index: number) => {
    setlistaTareas((tareas) => tareas.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className="flex">
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button className="" onClick={handleAddTask}>Agregar Tarea</button>
      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea} />
    </div>
  );
};

export default TodoApp;
