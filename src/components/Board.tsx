import Column from "./Column";
import { Column as ColumnType } from '../types'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const initialData: ColumnType[] = [
    {
        id: 'column-1',
        title: 'To Do',
        tasks: [],
    },
    {
        id: 'column-2',
        title: 'In Progress',
        tasks: [],
    },
    {
        id: 'column-3',
        title: 'Done',
        tasks: [],
    }
] 

export default function Board() {
    const [columns, setColumns] = useState<ColumnType[]>(initialData);

    const addTask = (columnId: string, title: string) => {
        console.log('Before:', columns);
        
        setColumns(prevColumns => {
            const updated = prevColumns.map(col => 
                col.id === columnId 
                ? {
                    ...col, 
                    tasks: [...col.tasks, {id: uuidv4(), title}],
                } : col );
                console.log("AFter board state update:", updated);
                return updated;
            })
        
        console.log('Adding to column:', columnId);
        console.log('After:', columns);
    }

    return (
        <div style={{ display: 'flex', padding: '24px', gap: '16px' }}>
            <h2>Board</h2>
            {
                columns.map(column => (
                    <Column key={column.id} column={column} addTask={addTask} />   
                ))
            }
        </div>
    )
}