import React, { useEffect, useState } from 'react';
import ToDo from './ToDo';

const Home = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/`)
        .then(res=>res.json())
        .then(result=>{
            console.log(result[0]);
            setTodos(result)

        })
    }, [])

    const submitTodoHandler = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value !== '') {
                setTodos((todos) => [...todos, e.target.value])
            }
        }
    };

   
    

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
                <div className='card max-w-lg bg-orange-300 shadow-xl image-full'>
                    {
                        todos.map((todo,index)=>
                        <ToDo
                        todo={todo}
                        key={index}>
                        </ToDo>)
                    }
                   
                </div>
            </div>
        </div>
    );
};

export default Home;