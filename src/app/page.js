// // "use client"
// // import React, { useState } from 'react'

// // const page = () => {

// //   const [title, setTital] = useState(" ");
// //   const [desc, setDesc] = useState(" ");
// //   const [mainTask, setMainTask] = useState("[]")
  
// //   const submitHandler = (e)=>{
// //     e.preventDefault()
// //     setMainTask([...mainTask, {title,desc}]);
  
// //     setTital(" ");
// //     setDesc(" ") ;  
    
// //   }

// //   let renderTask = <h1>No task available</h1>
// //   if (mainTask.length > 0) {
// //     renderTask = mainTask.map((t, i) => (
// //       <div key={i}>
// //         <h5>{t.Title}</h5>
// //         <p>{t.Desc}</p>
// //       </div>
// //     ));
// //   }

// //   return (
// //     <>
    
// //     <h1 className='bg-black text-4xl text-cyan-400 text-center font-bold'>To Do List </h1>
// //     <form onSubmit={submitHandler}>
// //       <input type='text'
// //       className='text-2xl border-2 border-rounded border-cyan-500 m-9 px-4 py-2text-2xl'
// //       placeholder= "Enter title Hear"

// //          value={title}
// //           onChange={(e)=>{
// //         settital(e.target.value)
// //           }}
      
// //       ></input>
      
// //       <input 
// //       type='text'
// //       className='text-2xl border-2 border-rounded border-cyan-500 m-9 px-4 py-2text-2xl'
// //       placeholder=  "Enter Description Hear"

// //        value={desc}
// //       onChange={(e)=>{
// //       setdesc(e.target.value)
      
// //       }}
      
// //       ></input>
// //       <button className='bg-black text-red-400 rounded px-4 py-2'>Add Taks</button>
      
      
// //     </form>    
     
// //       <hr/>
// //       <div className='p-5 bg-slate-200'>
// //         <ul>{rendertask}</ul>

// //       </div>
    
    
// //     </>
// //   )
// // }

// // export default page


  "use client"
  import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [mainTask, setMainTask] = useState([]);



  
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && desc.trim() !== '') {
      setMainTask([...mainTask, { title, desc }]);
      setTitle('');
      setDesc('');
    } else {
      alert('Please enter both title and description');
    }
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   if (title.trim() !== '' && desc.trim() !== '') {
  //     setMainTask([...mainTask, { title, desc }]);
  //   }
  //   setTitle('');
  //   setDesc(''); 
  // };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   setMainTask([...mainTask, { title, desc }]);
  //   setTitle('');
  //   setDesc('');
  // };

  const removeTask = (index) => {
    const updatedTasks = [...mainTask];
    updatedTasks.splice(index, 1);
    setMainTask(updatedTasks);
  };

  let renderTask = <h1>No task available</h1>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <div key={i} className="task">
        <div>
          <h5>Task {i+1}: {t.title}</h5>
          <p>{t.desc}</p>
        </div>
        <button onClick={() => removeTask(i)} 
        className="remove-button">Remove</button>
      </div>
    ));
  }

  return (
    <>
      <h1 className='bg-black text-4xl text-cyan-400 text-center font-bold'>To Do List</h1>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          className='text-2xl border-2 border-rounded border-cyan-500 m-3 px-4 py-2'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          className='text-2xl border-2 border-rounded border-cyan-500 m-3 px-4 py-2'
          placeholder='Enter Description here'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className='bg-black text-red-400 rounded px-4 py-2'>Add Task</button>
      </form>
      <hr />
      <div className='p-5 bg-slate-200'>
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;

