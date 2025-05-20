import { Task } from '../types'

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
    if (!task) return <div>No tasks provided</div>;
    
    return (
        <div style={{ border: '1px solid #ccc', padding: '8px', marginBottom: '8px', borderRadius: '4px' }}>
            <p>{task.title}</p>
        </div>
    )

}