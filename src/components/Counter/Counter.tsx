import { TasksProps } from "../../App"

interface CounterProps {
    tasks: Array<TasksProps>;
}

export const Counter = ({tasks} : CounterProps) => {

    console.log('tasks:',tasks)

    function handleCounter(total: number, current: TasksProps) {
        console.log(current.isSelected)
        if (current.isSelected === true) {
            return total + 1
        } else {
            return total
        }
    }

    const totalTasks = tasks.reduce(handleCounter,0)

    return (
        <>
            {totalTasks > 0 ? (
                `${totalTasks} de ${tasks.length}`
            ) : (
                0
            )
            }
        </>
    )
}
