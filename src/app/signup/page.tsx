"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
interface User{email:string,password:string,username:string}

const Signup = () => {
  const router = useRouter();
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = async (e:FormEvent) => {
    e.preventDefault();
    try {
        setLoading(true)
      const data = await axios.post("/api/users/signup", user);
    
      router.push("/login")
    } catch (error) {
      console.log(error);
    }finally{
        setLoading(false)
    }
  };
  useEffect(()=>{
    if(user.email.length>0 && user.username.length>0&& user.password.length>0){
        setButtonDisabled(false);
    }
    else{
        setButtonDisabled(true)
    }
  },[user])
  return (
    <>
      <div className="flex flex-col items-center min-h-screen justify-center">
        <h1 className="text-[4rem] font-bold">Create Acount</h1>
        <form className="flex  w-fit flex-col gap-2" onSubmit={handleSubmit}>
          <label htmlFor="username" id="username">
            Username:{" "}
          </label>
          <input
            type="text"
            id="username"
            className="p-3  rounded-md outline-none text-white"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Enter username"
          />

          <label htmlFor="email" id="email">
            Email:{" "}
          </label>
          <input
            type="email"
            id="email"
            className="p-3 rounded-md text-white outline-none"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter email"
          />

          <label htmlFor="password" id="password">
            Password:{" "}
          </label>
          <input
            type="password"
            id="password"
            className="p-3 rounded-md outline-none text-white"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter password"
          />
          <button
            disabled={buttonDisabled||loading}
            type="submit"
            className="bg-green-500 hover:bg-green-600 transition-all duration-150 px-4 py-2 rounded-full text-xl font-bold *:"
          >
            {loading ? "Loading..." : "Sign up "}
          </button>
        </form>
      </div>
    </>
  );
};
export default Signup;
