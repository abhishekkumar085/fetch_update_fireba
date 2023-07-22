
'use client'
import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, deleteDoc, getDocs,doc, addDoc, updateDoc } from 'firebase/firestore';

function Page() {
  const[user_1,setUser_1]=useState("")
  const[user_2,setUser_2]=useState("")
  const[user_3,setUser_3]=useState("")
  const[user_4,setUser_4]=useState("")
  const[id,setId]=useState("")
  const[show,setShow]=useState(false)
 
 
  const [info, setInfo] = useState([]);
   
  const value=collection(db,"users")
  // Fetch the required data using the get() method
  useEffect(()=>{
    const getData=async()=>{
      const dataval=await getDocs(value)
      setInfo(dataval.docs.map(doc=>({...doc.data(),id:doc.id})))
    } 
    getData()
  },[value])

  const handleDelete=async(id)=>{
    const deleteVal=doc(db,"users",id)
    const x=await deleteDoc(deleteVal)
    console.log(x)
  }
  const handleEdit=async(id,user1,user2,user3,user4)=>{
    setUser_1(user1)
    setUser_2(user2)
    setUser_3(user3)
    setUser_4(user4)
    setId(id)
    setShow(true)


  }
 
 const handleCreate=async()=>{
  const use=await addDoc(value,{user1:user_1,user2:user_2,user3:user_3,user4:user_4})
 
 
 }
 const handleUpdate=async()=>{
  const updatData=doc(db,"users",id)
  await updateDoc(updatData,{user1:user_1,user2:user_2,user3:user_3,user4:user_4})
  
 }

  return (
    <div>
      <center>
        <h2>Users</h2>
      </center>
   



      <table  className="table-auto">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">User 1</th>
            <th className="w-1/2 px-4 py-2">User 2</th>
            <th className="w-1/2 px-4 py-2">User 3</th>
            <th className="w-1/2 px-4 py-2">User 4</th>
          </tr>
        </thead>
        <tbody>
          {info.map((users, index) => (
            <><tr key={index}>
              <td className="border px-4 py-2">{users.user_1}</td>
              <td className="border px-4 py-2">{users.user_2}</td>
              <td className="border px-4 py-2">{users.user_3}</td>
              <td className="border px-4 py-2">{users.user_4}</td>

            </tr>
            {/* <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(users.id)}>Delete</button> */}
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(users.id,users.user1,users.user2,users.user3,users.user4)}>Edit</button>
            </>
        
          ))}
          
        </tbody>
      </table> 

      <div className="w-full max-w-xs m-auto">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>e.preventDefault()}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      user_1
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={user_1} onChange={(e)=>setUser_1(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
      user_2
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="lname" value={user_2} onChange={(e)=>setUser_2(e.target.value)}/>
    
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
      user_3
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="lname" value={user_3} onChange={(e)=>setUser_3(e.target.value)}/>
    
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lname">
     user_4
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="lname" value={user_4} onChange={(e)=>setUser_4(e.target.value)}/>
    
    </div>
    <div className="flex items-center justify-between">
      { !show?
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleCreate}>
                Create
              </button>
              :
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleUpdate}>
                update
                </button>
      }
    
    </div>
  </form>
</div>


    </div>


  );
}



export default Page;

