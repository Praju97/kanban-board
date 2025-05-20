import TaskCard from "./TaskCard"
import { Column as ColumnType } from '../types'
import { useState } from "react";

interface ColumnProps {
    column: ColumnType;
    addTask: (columnId: string, title: string) => void;
}

export default function Column({ column, addTask }: ColumnProps) {
    const [newTaskTitle, setNewTaskTitle] = useState('');

    const handleAdd = () => {
        if (newTaskTitle.trim() === '') return;
        addTask(column.id, newTaskTitle.trim())
        console.log('Adding tasks to column:', column.id, newTaskTitle);
        setNewTaskTitle('')
    }


    return (
        <div>
            <div style={{ width: '300px', margin: '0 12px', backgroundColor: '#f4f5f7', padding: '12px', borderRadius: '8px' }}>
                <h3>{column.title}</h3>
                <div style={{ marginBottom: '12px' }}>
                    <input
                        type="text"
                        value={newTaskTitle}
                        onChange={(e) => setNewTaskTitle(e.target.value)}
                        placeholder="New tasks..."
                        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                    />
                    <button onClick={handleAdd} style={{ marginTop: '8px', width: '100%' }}>
                        Add Task
                    </button>
                </div>
                {column.tasks.length === 0 && <div>No tasks yet</div>}
                {
                    column.tasks.map((task) => (
                        <TaskCard key={task.id} task={task} />
                    ))
                }
            </div>
        </div>
    )
}