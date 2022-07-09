import { useEffect } from 'react'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

export default function TodoList() {
  
    const {page, error, limit, loading, todos} = useTypedSelector(state => state.todo)
    const {fetchTodos, setTodoPage} = useActions()
    const pages = [1,2,3,4,5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>загрузка...</h1>
    }
    
    if (error) {
        return <h1>{error}</h1>
    }
    
    function getTodos() : JSX.Element[] {
        const todosArr = todos.map(todo => {
            return <div key={todo.id}>{todo.id} - {todo.title}</div>
        })
        return todosArr
    }

    function getPages() : JSX.Element[] {
        const pagesArr = pages.map(p => (
            <div 
                style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
                onClick={() => setTodoPage(p)}
            >    
                {p}
            </div>
        ))
        return pagesArr
    }
      
    return (
        <div>
            {getTodos()}
            <div style={{display: 'flex'}}>{getPages()}</div>
        </div>
    )
}
