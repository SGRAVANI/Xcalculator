import React, { useState } from 'react'
import styles from "./style.module.css"
import { useEffect } from 'react'
export default function Calci() {
let [inp,setInp]=useState("");
let [result,setResult]=useState("")
function handleClick(e)
{
    console.log(e.target.id)
    let str=e.target.id.split("_")
    if(str[1]=="add")
    {
     setInp((prev)=>{
        return prev.concat("+")
     })   
    }
    else  if(str[1]=="sub")
    {
     setInp((prev)=>{
        return prev.concat("-")
     })   
    }
    else  if(str[1]=="mul")
    {
     setInp((prev)=>{
        return prev.concat("*")
     })   
    }
    else  if(str[1]=="div")
    {
     setInp((prev)=>{
        return prev.concat("/")
     })   
    }
    else  if(str[1]=="cancel")
    {
     setInp("")   
     setResult("")
    }
    else  if(str[1]=="equal")
    {
        if(inp.length===0)
        {
        setResult("Error")
        } 
        else {
     let result=eval(inp);
     setResult(result)
        }
    }
    else{
        setInp((prev)=>{
            return prev.concat(str[1])
         }) 
    }
}

  return (
    <div className={styles.container}>
        <h1 className={styles.row1}> React Calculator</h1>
        <div className={styles.row2}><input type="text" value={inp}/></div>
       <div className={styles.outputrow}>{result}</div>
       <div className={styles.btnContainer} onClick={handleClick}>
      <button type='button' id="b_7"className={styles.btn}>7</button>
      <button type='button' id="b_8" className={styles.btn}>8</button>
      <button type='button' id="b_9" className={styles.btn}>9</button>
      <button type='button' id="b_add"className={styles.btn}>+</button>
      <button type='button' id="b_4"className={styles.btn}>4</button>
      <button type='button' id="b_5"className={styles.btn}>5</button>
      <button type='button' id="b_6"className={styles.btn}>6</button>
      <button type='button' id="b_sub" className={styles.btn}>-</button>
      <button type='button' id="b_1"className={styles.btn}>1</button>
      <button type='button' id="b_2" className={styles.btn}>2</button>
      <button type='button' id="b_3"className={styles.btn}>3</button>
      <button type='button' id="b_mul"className={styles.btn}>*</button>
      <button type='button' id="b_cancel" className={styles.btn}>C</button>
      <button type='button' id="b_0"className={styles.btn}>0</button>
      <button type='button' id="b_equal"className={styles.btn}>=</button>
      <button type='button' id="b_div"className={styles.btn}>/</button>
      </div>      
    </div>
  )
}
