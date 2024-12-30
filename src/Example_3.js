import { useState } from "react";

function Example3() {
    const[ Search , setSearch] = useState('')
    const[Off , setOff] = useState('')
    const [ submit , setSupmit] = useState(false)

    const onSearch  = (data) =>{
        setSearch(data.target.value)
    }

    const onOff=(ngayoff) =>{
        setOff(ngayoff.target.value)
    }

    const nhan = () =>{
        setSupmit( submit ? false : true )
    } 

    return (
        <form>
            <input type="text"  value={Search} placeholder="search" onChange={onSearch}/> 
            <input type="text"  value={Off} placeholder="off"  onChange={onOff}/> 
            <button type="button" onClick={nhan} > submit</button>
            {
                submit ?
                <>
                    <div> {Search}</div>
                    <div> {Off}</div>
                </> :
                null
            }
        </form>
    );
}

export default Example3;