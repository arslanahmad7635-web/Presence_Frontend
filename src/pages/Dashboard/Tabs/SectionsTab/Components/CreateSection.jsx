import React from 'react';

function CreateSection({ onClose }) {
  return (

    <div className='w-full h-full bg-[#050A12] px-4 flex flex-col items-start justify-start'>
    
      <div className='w-full h-1/10 flex items-center justify-end'>
    
        <button onClick={onClose} type="button" className='px-6 py-3 bg-red-600/60 rounded-md cursor-pointer'>Close</button>
    
      </div>
    
    </div>
  );
}

export default CreateSection;