import React, { useState } from 'react'
import { MdCheck, MdDelete } from "react-icons/md";

import { stringify } from 'postcss';

const todokey = "reactkey";

export const Todo = () => {

    const [inputvalue, setInputvalue] = useState({})

    const [task, setTask] = useState(() => {
        const taskdata = localStorage.getItem(todokey);
        if (!taskdata) return [];

        return JSON.parse(taskdata);
    });

    const [datetime, setDateime] = useState("")


    localStorage.setItem(todokey, JSON.stringify(task));

    const handleinputvalue = (value) => {
        setInputvalue({ id: value, content: value, checked: false });
    };
    const handleFormSumbit = (event) => {
        event.preventDefault();
        const { id, content, checked } = inputvalue;

        if (!content) return;

        const iftolistavail = task.find((element) => element.content === content);
        if (iftolistavail) return;
        setTask((prev) => [...prev, { id, content, checked }])

        setInputvalue({ id: "", content: "", checked: "" });

    };

    setInterval(() => {
        const now = new Date();
        const localdate = now.toLocaleDateString();
        const loacltime = now.toLocaleTimeString();

        setDateime(`${localdate} - ${loacltime}`)
    }, 1000)


    const handleDeleteTodo = (value) => {
        const upadetedatask = task.filter((curelm) => curelm !== value)
        setTask(upadetedatask);
    }

    const handlecheckbtn = (todoelmet) => {
        const updedatedtask = task.map((curtask) => {
            if (curtask.content === todoelmet) {
                return { ...curtask, checked: !curtask.checked }
            }
            else {
                return curtask;
            }
        });
        setTask(updedatedtask);
    };


    const handleclearbtn = () => {
        setTask([]);
    };
    return (

        <div className='w-screen h-screen select-none bg-cover bg-center'>
            <header className='grid justify-items-center'>
                <h1 className=' my-5 text-6xl' >Todo List</h1>
                <h2 className=' my-5 font-bold  text-3xl'>{datetime}</h2>
            </header>
            <section className='grid justify-items-center'>
                <form
                    className='flex flex-row'
                    onSubmit={handleFormSumbit} >
                    <div>
                        <input type="text"
                            onChange={(event) => handleinputvalue(event.target.value)}
                            value={inputvalue.content}
                            autoComplete='off'
                            className=' h-12 p-3 w-96 rounded-l-full bg-white border-none' />

                    </div>
                    <div>
                        <button
                            type='sumbit'
                            className='h-12 w-24 hover:bg-yellow-300 hover:border-none border-none bg-blue-500 border-l-0 border-y-2 border-r-2 rounded-r-full'
                        >Add task</button>
                    </div>
                </form>
                <section className='mt-6'>
                    <ul>
                        {task.map((curelm) => (
                            <li key={curelm.id} className='p-2 border-b flex h-14 bg-white rounded-full w-96  border-gray-300 m-2 relative'>

                                <span
                                    className={`pt-2 pl-1 capitalize overflow-hidden w-32 ${curelm.checked ? "line-through" : "no-underline"} `}>
                                    {curelm.content}
                                </span>

                                <section className='flex flex-row absolute right-3'>
                                    <button className='bg-green-300 hover:bg-green-500 rounded-full  mx-3 w-11 h-11 p-2 text-3xl'
                                        onClick={() => handlecheckbtn(curelm.content)}><MdCheck className='font-bold ' /></button>
                                    <button className='bg-red-500 hover:bg-red-700 rounded-full text-white  w-11 h-11 p-2 text-3xl  ' onClick={() => handleDeleteTodo(curelm)}
                                    ><MdDelete /></button></section>
                            </li>


                        ))}
                    </ul>
                </section>
                <section>
                    <button onClick={handleclearbtn} className='bg-red-500 px-5 mb-10 mt-5 py-2 rounded-xl text-xl hover:bg-red-700 hover:text-white'>Clear all</button>
                </section>
            </section>
        </div>

    )
}
