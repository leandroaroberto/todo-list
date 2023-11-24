import { TasksProps } from "../../App"

interface CounterProps {
    tasks: Array<TasksProps>;
}

export const Counter = ({tasks} : CounterProps) => {

    function handleCounter(total: number, current: TasksProps) {
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
