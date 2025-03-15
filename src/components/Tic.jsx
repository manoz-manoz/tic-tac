import React, { useState } from 'react'
import Cross from '../assets/cross.png'
import Circle from '../assets/circle.png'
let data=["","","","","","","","",""]

function Tic() {
    const [count,setcount]=useState(0);
    const [whowon,setwho]=useState("");
    const [iswon,setwon]=useState(false);

    function restart(){
        window.location.reload()
       
    }

    function toggle(e,num){
        if(count%2==0){
            e.target.innerHTML = `<img src=${Cross} alt="X" className="h-[30px] w-[30px]" />`;
            data[num]="X";
            console.log(data[num])
            let ele=document.querySelector(".box"+num)
           ele.classList.add("pointer-events-none");
           setcount(count+1)

        }
        else{
            e.target.innerHTML = `<img src=${Circle} alt="O" "className="h-[30px] w-[30px]"/>`;
           
            data[num]="O";
            console.log(data[num]);
            let ele=document.querySelector(".box"+num)
           ele.classList.add("pointer-events-none");
            setcount(count+1)
            

        }

        //rows
        if (((data[0] == data[1]) && (data[1] == data[2]) && (data[2] == 'X')) ||
        ((data[3] == data[4]) && (data[4] == data[5]) && (data[3] == 'X')) ||
        ((data[6] == data[7]) && (data[7] == data[8]) && (data[6] == 'X')) ||


        ((data[0] == data[3]) && (data[3] == data[6]) && (data[6] == 'X')) ||
        ((data[1] == data[4]) && (data[4] == data[7]) && (data[7] == 'X')) ||
        ((data[2] == data[5]) && (data[5] == data[8]) && (data[8] == 'X')) ||



        ((data[0] == data[4]) && (data[4] == data[8]) && (data[8] == 'X')) ||
        ((data[2] == data[4]) && (data[4] == data[6]) && (data[6] == 'X'))





    ) 
        {
           
            setwon(true)
            setwho("x")
            console.log("X wins")
            
        }
        

            
            
             //column
             else if (((data[0] == data[1]) && (data[1] == data[2]) && (data[2] == 'O')) ||
             ((data[3] == data[4]) && (data[4] == data[5]) && (data[3] == 'O')) ||
             ((data[6] == data[7]) && (data[7] == data[8]) && (data[6] == 'O')) ||


             ((data[0] == data[3]) && (data[3] == data[6]) && (data[6] == 'O')) ||
             ((data[1] == data[4]) && (data[4] == data[7]) && (data[7] == 'O')) ||
             ((data[2] == data[5]) && (data[5] == data[8]) && (data[8] == 'O')) ||



             ((data[0] == data[4]) && (data[4] == data[8]) && (data[8] == 'O')) ||
             ((data[2] == data[4]) && (data[4] == data[6]) && (data[6] == 'O'))





         ) 
          {
                    setwon(true)
                    setwho("O")
                    console.log("O wins")
                
            }





    
            
            else {

                if (data[0] && data[1] && data[2] &&
                    data[3] && data[4] && data[5] &&
                    data[6] && data[7] && data[8]
                ) 
                {
                    setwho("Draw")
                    console.log("draw")
                }
       

              
            }
    }

    return (
        <div className='w-[100%] h-[100vh] bg-blue-400 flex justify-center items-center'>
            <div className='container flex flex-col h-[100vh] gap-4 justify-center items-center w-[300px]'>
                <div className="title">
                    <h1 className='text-3xl font-semibold '>Tic-Tac</h1>
                </div>
               
                <div className={(iswon || whowon=="Draw" )? "hidden" : "board grid grid-cols-3  gap-0"}>
                    <div className='box box0  flex justify-center items-center max-w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => {toggle(e, 0)}}></div>
                    <div className='box box1  flex justify-center items-center w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => toggle(e, 1)}></div>
                    <div className='box box2  flex justify-center items-center w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => toggle(e, 2)}></div>
                    <div className='box box3  flex justify-center items-center w-[100px] h-[100px] bg-white border-2 border-black'  onClick={(e) => toggle(e, 3)}></div>
                    <div className='box box4  flex justify-center items-center w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => toggle(e, 4)}></div>
                    <div className='box box5  flex justify-center items-center w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => toggle(e, 5)}></div> 
                    <div className='box box6 flex justify-center items-center  w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => toggle(e, 6)}></div>
                    <div className='box box7 flex justify-center items-center  w-[100px] h-[100px] bg-white  border-2 border-black'  onClick={(e) => toggle(e, 7)}></div>
                    <div className='box box8 flex justify-center items-center  w-[100px] h-[100px] bg-white  border-2  border-black'  onClick={(e) => toggle(e, 8)}></div>
                   


                </div>
                <div id="won ">
                    <h1 className={iswon ?"text-2xl font-semibold m-[50px]":"hidden"}>{whowon} Wins 🎉</h1>
                </div>

                <div id="won ">
                    <h1 className={!(whowon=="Draw") ?"hidden":"text-2xl font-semibold m-[50px]"}>{whowon} 😎</h1>
                </div>


                <div className="restart">
                    <button  onClick={restart}
                     className=' bg-red-400  px-[40px] py-[10px]  rounded-full'> Restart</button>
                </div>
            </div>

        </div>
    )
}

export default Tic
