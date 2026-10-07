import React, { useState } from 'react';
import { BarLoader } from 'react-spinners';
import api from '../../../../../services/axios';


function CreateSection({ onClose }) {

  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [fetchingCourses, setFetchingSections] = useState(true);
  
  async function handleSubmit(e) {
    
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    try{

      const response = await api.post('api/teacher/sections/', data);
      
      onClose();

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);
    
    }

  }



  return (

    <div className='w-full h-full bg-[#050A12] px-4 flex flex-col items-start justify-start'>
    
      <div className='w-full h-1/10 flex items-center justify-end'>
    
        <button onClick={onClose} type="button" className='px-6 py-3 bg-red-600/60 rounded-md cursor-pointer'>Close</button>
    
      </div>

      <div className='w-full h-9/10 flex items-center justify-center'>

        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-center'>

          <div className='flex flex-col items-start justify-start'>
            <label htmlFor="coursecode">Course Code</label>
            <input type="text" name="course_code" id='coursecode' className='px-3 py-3 bg-cyan-400/10 w-100 rounded-sm mt-2 outline-none border-2 border-transparent focus:border-cyan-400/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] autofill:[-webkit-text-fill-color:cyan-400/10]' placeholder='CS-XXX' required />
          </div>
          
          
          <div className='flex flex-col items-start justify-start mt-5'>
            <label htmlFor="coursename">Course Name</label>
            <input type="text" name="course_name" id='coursename' className='px-3 py-3 bg-cyan-400/10 w-100 rounded-sm mt-2 outline-none border-2 border-transparent focus:border-cyan-400/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)] autofill:[-webkit-text-fill-color:cyan-400/10]' placeholder='e.g. Programming Fundamentals' required />
          </div>
          
          
          <div className='flex flex-col items-start justify-start mt-5'>
            <label htmlFor="name">Section Name</label>
            <input type="text" name="name" id='name' className='px-3 py-3 bg-cyan-400/10 w-100 rounded-sm mt-2 outline-none border-2 border-transparent focus:border-cyan-400/20 focus:shadow-[0_0_20px_rgba(34,211,238,0.15)]' placeholder='e.g. BS XXX' required />
          </div>

          <button disabled={loading} type='submit' className='flex items-center justify-center mt-10 w-100 h-15 bg-cyan-400/40 rounded-sm cursor-pointer hover:tracking-wide transition-all duration-300 antialiased outline-none border-2 border-transparent hover:border-cyan-400/60 hover:bg-cyan-400/10 focus:bg-cyan-400/10 focus:border-cyan-400/60'>
          {
            loading ? (<BarLoader color='white' />) : "Create"
          }
          </button>

        </form>

      </div>

    </div>
  );
}

export default CreateSection;