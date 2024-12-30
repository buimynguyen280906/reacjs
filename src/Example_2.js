import { useState } from "react";


function Example2() {
    const [name, setName] = useState('')
    const [tuoi , setTuoi] = useState('')
    const [isShow , setShow] = useState(true)

    const handleChangeName = (data) => {
        setName(data.target.value)
    }

    const changeTuoi = (sotuoi) =>{
        console.log(sotuoi)
        setTuoi(sotuoi.target.value)
    }
    
    const hienthi = () =>{
        setShow( isShow ? false : true ) 
    }
    

    return (
        <form>
            <input type="text" value={name}  placeholder="name" onChange={handleChangeName}  /> 
            <input type="text" value={tuoi}  placeholder="tuoi" onChange={changeTuoi}/> 
            <button type="button" onClick={hienthi}> submit</button>
            { 
                isShow ?
                <>
                    <div>{name}</div>
                    <div>{tuoi}</div>
                </>: 
                null
            }
            
            
        </form>
    );
}

export default Example2;