import React, { useState } from 'react'
import './example1.css'

export default function Example1() {
  const [col,setCol] = useState('')
  const [flexwgridTemplateC, setFlexwgridTemplateC] = useState('templCol200px_3');


  const setColStyle = (e)=>{
    setFlexwgridTemplateC(e.target.id);
  }
  return (
    <>
        <div className='example1 w-full h-[94vh] p-[1px]'>
          {/* <div className='w-full font-semibold underline my-2 pl-2'>Example1 - Grid Column:</div> */}
            <div className='relative w-full flex  items-center justify-center h-[640px] w-[100%]'>
              <div className='ex-one mt-[2rem] resize overflow-auto min-h-[300px] h-[650px] max-h-[650px] min-w-[340px] w-1/2 max-w-[70%] p-[12px] bg-[#eee]' style={{gridTemplateColumns:`${flexwgridTemplateC==="templCol200px_3"?'200px 200px 200px':flexwgridTemplateC==="templCol_1fr_2fr_1fr"?'1fr 2fr 1fr':flexwgridTemplateC==="templCol_50px"?'50px 50px 50px':'1fr 1fr 1fr'}`}}>
              {/* <div className='ex-one' style={{gridTemplateColumns}}> */}
                <div className='h1Container absolute left-[2rem] top-[2rem] z-[5]'>
                  <h1 className='text-black italic font-semibold text-[22px]'>Example1 - Grid Column:</h1>
                </div>
                <div className='bg-[#ccc]'>
                  <p>Velit anim esse deserunt qui. Duis eiusmod amet velit consectetur culpa sunt amet non occaecat. Aliqua eiusmod occaecat minim cillum laborum occaecat sint culpa nisi laborum eu. Veniam pariatur eiusmod nulla voluptate consequat tempor fugiat consequat sit esse. Pariatur ut aute tempor occaecat anim ut amet laborum sint esse in. Exercitation duis occaecat sit aute pariatur commodo ad ipsum ad tempor Lorem incididunt officia sit. Aliqua eiusmod sunt voluptate voluptate est ipsum aliqua veniam voluptate adipisicing ipsum do.</p>
                </div>
                <div className='bg-[#ccc]'>
                  <p>Proident et excepteur consequat enim ipsum do excepteur exercitation non exercitation. Sit nulla non mollit aute reprehenderit magna cupidatat consectetur amet ad. Veniam consectetur dolore aliqua voluptate pariatur in ut ad. Reprehenderit incididunt culpa ullamco occaecat proident sit dolor eiusmod cupidatat ad ea. Qui adipisicing excepteur duis anim occaecat minim tempor ea tempor amet eiusmod ad duis et.</p>
                </div>
                <div className='bg-[#ccc]'>
                  <p>Quis dolore eiusmod eu et ad culpa ullamco pariatur cillum eu id sit officia. Laborum ea duis cupidatat officia ad. Id ad nisi incididunt dolor elit officia ex elit consectetur ullamco dolore.</p>
                </div>
              </div>
              <h2 className='absolute bottom-[0px] text-[22px] text-center font-semibold italic'>This container is resizable</h2>
            </div>

            <div className='ml-[3rem]'>
            <div className='text-left my-3 w-[220px] text-[22px] border-b-[1px]'>Apply properties:</div>
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


              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-template-columns:</td>
              <td disabled={false}>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setColStyle(e)}} id="templCol200px_3" className={`${flexwgridTemplateC==='templCol200px_3' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      200px 200px 200px
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setColStyle(e)}} id="templCol1fr_3" className={`${flexwgridTemplateC==='templCol1fr_3' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      1fr 1fr 1fr
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setColStyle(e)}} id="templCol_1fr_2fr_1fr" className={`${flexwgridTemplateC==='templCol_1fr_2fr_1fr' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      1fr 2fr 1fr
                    </span>
                  </button>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setColStyle(e)}} id="templCol_50px" className={`${flexwgridTemplateC==='templCol_50px' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      50px 50px 50px
                    </span>
                  </button>
                </td> 
              </tr>

              {/* gap */}
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
            </div>
        </div>
    </>
  )
}
