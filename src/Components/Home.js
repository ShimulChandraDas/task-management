import React, { useEffect, useState } from 'react';

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/`)
        .then(res=>res.json())
        .then(result=>{
            console.log('udated',result);
            //setTodos(result)
            
        })
    }, [])

    const submitTodoHandler = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value !== '') {
                setTodos((todos) => [...todos, e.target.value])
            }
        }
    };

    const editTodo=()=>{
        console.log('edit');
    }

    const deleteTodo=()=>{
    console.log('delete');

    }
    

    return (
        <div>
            <div className=" h-64 " >
                <div className="hero-overlay flex items-center justify-center bg-opacity-60">

                    <input
                        onKeyDown={submitTodoHandler}
                        type="text"
                        placeholder="Add To-Do"
                        className="input input-bordered input-lg "
                    />
                </div>
                <div>
                    {
                        todos.map((todo, index) => 
                        <div key={index} className='card max-w-lg bg-base-100 shadow-xl image-full'>
                        <div  className='card-body'>
                            <div>
                            {todo} 

                            <button onClick={editTodo} className='btn btn-sm'>Edit</button> 


                            <button onClick={deleteTodo} className='btn btn-sm'>Delete</button>
                        </div>
                        </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;