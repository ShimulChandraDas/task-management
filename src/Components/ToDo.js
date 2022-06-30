
import React from 'react';

const ToDo = ({todo}) => {
    const {name,status}=todo;
    
//console.log(todo);





const editTodo=()=>{
    console.log('edit');
}

const deleteTodo=()=>{
console.log('delete');

}
    return (
        <div>
            <h1 className='text-center'>Hello Managment</h1>
            <div  className='card-body'>
                            <div>
                                <ul className='text-white'> {name}</ul>
                                <li className='text-white'> {status}</li>
                           
                            {/* {setTodos} */}
                            <button onClick={editTodo} className='btn btn-sm'>Edit</button> 

                            <button onClick={deleteTodo} className='btn btn-sm'>Delete</button>
                        </div>
                        </div>
            
        </div>
    );
};

export default ToDo;