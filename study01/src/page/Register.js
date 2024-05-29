import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [username, setusername] = useState();
    const [userid, setuserid] = useState();
    const [userpassword, setuserpassword] = useState();
    const navigate = useNavigate();

    const handleChange_name = (e)=>{
        e.preventDefault();
        setusername(e.target.value);
    }

    const handleChange_id = (e)=>{
        e.preventDefault();
        setuserid(e.target.value);
    }

    const handleChange_password = (e)=>{
        e.preventDefault();
        setuserpassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:8080/api/register",{
            name:username,
            id:userid,
            password:userpassword
        });
        console.log(response.data);
        navigate("../login");
    }
  return (
    <div>
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit}>
      <label>
          이름
          <input type="text" required={true} value={username} onChange={handleChange_name}/>
        </label>
        <label>
          아이디
          <input type="text" required={true} value={userid} onChange={handleChange_id}/>
        </label>
        <label>
          비밀번호
          <input type="text" required={true} value={userpassword} onChange={handleChange_password} />
        </label>

        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default Register;
