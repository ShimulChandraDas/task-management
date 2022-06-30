import React, { useState } from 'react';

const Home = ({ inputText, setInputText, todos, setTodos, setStatus }) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random() * 5000 },
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value);
    };
    return (
        <div>
            <div class=" h-64 " >
                <div class="hero-overlay flex items-center justify-center bg-opacity-60">

                    <input type="text"
                        placeholder="Add To-Do"
                        class="input input-bordered input-lg "
                    ></input>
                </div>

                {/* <div className="form">
                    <form>
                        <input
                            onChange={inputTextHandler}
                            type="text"
                            className="todo-input"
                            value={inputText}
                            placeholder={"New Todo....."}
                        />
                        <button
                            type="submit"
                            className="todo-submit"
                            onClick={submitTodoHandler}
                        ></button>
                    </form>
                    <div className="filters">
                        <div name="todos" onChange={statusHandler}>
                            <input
                                type="radio"
                                id="radio-all"
                                value="all"
                                name="status"
                                defaultChecked
                            />{" "}
                            <label for="radio-all">All</label>
                            <input
                                type="radio"
                                id="radio-active"
                                value="active"
                                name="status"
                            />{" "}
                            <label for="radio-active">Active</label>
                            <input
                                type="radio"
                                id="radio-completed"
                                value="completed"
                                name="status"
                            />{" "}
                            <label for="radio-completed">Completed</label>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Home;