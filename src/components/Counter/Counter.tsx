export const Counter = ({tasks} : any) => {

    function handleCounter(total, current) {
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
