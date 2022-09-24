import React, { useState } from 'react'
import './example2.css'

export default function Example1() {
  const [gridTemplateC, setGridTemplateC] = useState('templCol1fr_5');
  const [gridTemplateR, setGridTemplateR] = useState('templRow5_1fr');
  const [gridColStart, setGridColStart] = useState(1);
  const [gridColEnd, setGridColEnd] = useState(2);
  const [gridRowStart, setGridRowStart] = useState(1);
  const [gridRowEnd, setGridRowEnd] = useState(2);

  const setGridStyle = (e)=>{
    setGridTemplateC(e.target.id);
  }
  const setGridStyleR = (e)=>{
    setGridTemplateR(e.target.id);
  }

  return (
    <>
        <div className='example1 w-full h-[100vh] p-[1px]'>
          {/* <div className='w-full font-semibold underline my-2 pl-2'>Example1 - Grid Column:</div> */}
            <div className='relative w-full flex  items-center justify-center h-[660px] w-[100%]'>
              <div className='ex-two grid resize overflow-auto min-h-[300px] h-[650px] max-h-[650px] min-w-[340px] w-1/2 max-w-[70%] p-[12px] bg-[#eee]'
                    style={{
                            gridTemplateColumns:`${gridTemplateC==="templCol3_1fr"?'repeat(3,1fr)':gridTemplateC==="templCol100px_4"?'repeat(4,100px)':gridTemplateC==="templCol1fr_5"?'repeat(5,1fr)':''}`,
                            gridTemplateRows:`${gridTemplateR==="templRow4_1fr"?'repeat(4,1fr)':gridTemplateR==="templRow5_120px"?'repeat(5,120px)':gridTemplateR==="templRow5_1fr"?'repeat(5,1fr)':''}`
                          }}>
              {/* <div className='ex-one' style={{gridTemplateColumns}}> */}
                <div className='h1Container absolute left-[2rem] top-[2rem] z-[5]'>
                  <h1 className='text-black italic font-semibold text-[22px]'>Example2 - Placement:</h1>
                </div>
                <div className='box-placement' style={{
                  gridColumnStart:gridColStart,
                  gridColumnEnd:gridColEnd,

                  gridRowStart:gridRowStart,
                  gridRowEnd:gridRowEnd
                }}>
                </div>
              </div>
              <h2 className='absolute bottom-[0px] text-[22px] text-center font-semibold italic'>This container is resizable</h2>
            </div>

            <div className='ml-[3rem] text-left my-3 w-[220px] text-[22px] border-b-[1px]'>Apply properties:</div>
            <div className='ml-[3rem] flex gap-[17rem]'>
            {/* table1 */}
            <table>
              <tr className='text-left'><th className='underline'>property</th>                                         <th className='underline'>Value</th></tr>
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>display:</td>
              <td disabled={false}>
                  <button className="py-2 px-1">
                    <span className="cursor-not-allowed px-1 bg-grey-500 text-black font-semibold  border rounded" title="Sorry you can't change it">
                      grid
                    </span>
                  </button>
                </td> 
              </tr>

              {/*column*/}
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-template-columns:</td>
                <td disabled={false}>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setGridStyle(e)}} id="templCol3_1fr" className={`${gridTemplateC==='templCol3_1fr' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(3,1fr)
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setGridStyle(e)}} id="templCol100px_4" className={`${gridTemplateC==='templCol100px_4' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(4,100px)
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setGridStyle(e)}} id="templCol1fr_5" className={`${gridTemplateC==='templCol1fr_5' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(5,1fr)
                    </span>
                  </button>
                </td> 
              </tr>
              
              {/* rows */}
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-template-rows:</td>
               <td disabled={false}>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setGridStyleR(e)}} id="templRow4_1fr" className={`${gridTemplateR==='templRow4_1fr' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(4,1fr)
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setGridStyleR(e)}} id="templRow5_120px" className={`${gridTemplateR==='templRow5_120px' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(5,120px)
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setGridStyleR(e)}} id="templRow5_1fr" className={`${gridTemplateR==='templRow5_1fr' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(5,1fr)
                    </span>
                  </button>
                </td> 
              </tr>
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>gap:</td>
              <td disabled={false}>
                  <button className="cursor-not-allowed py-2 px-1">
                    <span className='px-1 bg-grey-500 text-black font-semibold  border rounded' title="Sorry you can't change it">
                      5px
                    </span>
                  </button>
                </td> 
              </tr>
              </table>

              {/* table2 */}
              {/* ---------------- */}
              <table>
                <tr className='text-left'><th className='underline'>property</th>                                         <th className='underline'>Value</th></tr>
                <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>background-color:</td>
                <td disabled={false}>
                  <button className="py-2 px-1">
                    <span className="cursor-not-allowed px-1 bg-grey-500 text-black font-semibold  border rounded" title="Sorry you can't change it">
                      red
                    </span>
                  </button>
                </td> 
                </tr>

                {/*column - start*/}
                <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-column-start:</td>
                  <td disabled={false} className="flex">
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColStart(e.target.value)}} value={1} className={`${gridColStart==1 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      1
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColStart(e.target.value)}} value={2} className={`${gridColStart==2 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      2
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColStart(e.target.value)}} value={3} className={`${gridColStart==3 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      3
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColStart(e.target.value)}} value={4} className={`${gridColStart==4 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      4
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColStart(e.target.value)}} value={5} className={`${gridColStart==5 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      5
                    </button>
                  </div>
                  </td> 
                </tr>

                {/* column - end */}
                <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-column-end</td>
                <td disabled={false} className="flex">
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColEnd(e.target.value)}} value={2} className={`${gridColEnd==2 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    2
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColEnd(e.target.value)}} value={3} className={`${gridColEnd==3 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    3
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColEnd(e.target.value)}} value={4} className={`${gridColEnd==4 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    4
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColEnd(e.target.value)}} value={5} className={`${gridColEnd==5 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    5
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridColEnd(e.target.value)}} value={6} className={`${gridColEnd===6 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    6
                    </button>
                  </div>
                </td> 
                </tr>

                {/*Row - start*/}
                <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-row-start:</td>
                  <td disabled={false} className="flex">
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowStart(e.target.value)}} value={1} className={`${gridRowStart==1 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      1
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowStart(e.target.value)}} value={2} className={`${gridRowStart==2 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      2
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowStart(e.target.value)}} value={3} className={`${gridRowStart==3 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      3
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowStart(e.target.value)}} value={4} className={`${gridRowStart==4 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      4
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowStart(e.target.value)}} value={5} className={`${gridRowStart==5 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                      5
                    </button>
                  </div>
                  </td> 
                </tr>

                {/* Row - end */}
                <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-row-end</td>
                <td disabled={false} className="flex">
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowEnd(e.target.value)}} value={2} className={`${gridRowEnd==2 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    2
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowEnd(e.target.value)}} value={3} className={`${gridRowEnd==3 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    3
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowEnd(e.target.value)}} value={4} className={`${gridRowEnd==4 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    4
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowEnd(e.target.value)}} value={5} className={`${gridRowEnd==5 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    5
                    </button>
                  </div>
                  <div className="py-2 px-1">
                    <button onClick={(e)=>{setGridRowEnd(e.target.value)}} value={6} className={`${gridRowEnd==6 ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded hover:bg-blue-400`} title="Sorry you can't change it">
                    6
                    </button>
                  </div>
                </td> 
                </tr>
              </table>
            </div>
        </div>
    </>
  )
}
