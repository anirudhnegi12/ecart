import React from 'react';

function Navbar(){

  return (
    <div class="p-4 bg-white">
     <div className="flex justify-between max-w-6xl items-center mx-auto">
      <img className="w-40 h-30" src="https://s3-ap-southeast-1.amazonaws.com/p2swebsite/images/smeKhabar/news/amazon_1618225124036_113.jpg" />
       <div class="flex justify-center">
         <div class="hidden md:block py-2">
   <div class="md:max-w-6xl md:bg-gray-none md:mx-auto flex  flex-col md:items-center md:flex-row md:justify-end gap-4">
    <a class="text-2xl"href="./">HOME</a>
        <a class="text-2xl" href="./">SIGNUP</a>
        <a class="text-2xl"href="./">SIGNIN</a>
        <a class="text-2xl"href="./">LOGIN</a>
        <button class="text-2xl px -4 
 py-4 bg-gray-500 text -white rounded -md">LOGOUT</button>
      </div>
 </div>  
         </div>
       </div>
    </div>
    
   );
  
}
export default Navbar; 
