import React, { useState } from 'react'
import './example3.css';
import {getRandomNum,getRandomColor} from './main';

export default function Example3(props) {
    const [columnJi,setColumnJi] = useState('');
    const [columnAi,setColumnAi] = useState('');
    const [display,setDisplay] = useState('grid');
    const [repeat,setRepeat] = useState('repeat(3,1fr)');

  return (
      <div id="example2" className='mx-auto w-full my-3 h-[100vh]'>
        <div className='relative w-full flex justify-center'>
          <div className='exampleH1 absolute left-[10px] top-[10px] z-[5]'>
            <h1 className='text-black font-semibold italic text-[22px] '>Example:3 - Item Control</h1>
          </div>
          <div className='relative flex flex-col justify-center items-center h-[614px] w-[70%] border'>
              <div style={{gridTemplateColumns:repeat}} className={`itemBoxContainer ${display} z-0 min-h-[300px] h-[650px] max-h-[560px] min-w-[250px] w-1/2 max-w-[70%] resize overflow-auto relative items-${columnAi} justify-items-${columnJi} gap-[8px]`}>
                <div className={`min-h-[${getRandomNum()}px] min-w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert `}>A</div>
                <div className={`min-h-[${getRandomNum()}px] min-w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert  flex items-center`}>B</div>
                <div className={`min-h-[${getRandomNum()}px] min-w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert `}>C</div>
                <div className={`min-h-[${getRandomNum()}px] min-w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert  flex items-center`}>D</div>
                <div className={`min-h-[${getRandomNum()}px] min-w-[${getRandomNum()}px] bg-[${getRandomColor()}] invert `}>E</div>
              </div>
              <h2 className='absolute bottom-[0px] text-center font-semibold italic'>This container is resizable</h2>
          </div>
        </div>
        <div className='flex flex-col items-self-start m-[15px] '>
          <div className='text-left w-[220px] text-[22px] border-b-[1px]'>Apply properties:</div>
          <div className=''>
            <table>
              <tr className='text-left'><th className='underline'>property</th>                                         <th className='underline'>Value</th></tr>
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>display:</td>
                <td disabled={false}>
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setDisplay(e.target.id)}} id="grid" className={`${display==='grid' ? 'text-white border-blue-700 bg-blue-500':'text-black'} hover:bg-blue-400 px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      grid
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setDisplay(e.target.id)}} id="flex" className={`${display==='flex' ? 'text-white border-blue-700 bg-blue-500':'text-black'} hover:bg-blue-400  px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      flex
                    </span>
                  </button>
                </td> 
              </tr>

              {/*column-repeat*/}
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>grid-template-columns:</td>
                <td disabled={false}>
                <button className="py-2 px-1">
                    <span onClick={(e)=>{setRepeat(e.target.id)}} id="repeat(3,120px)" className={`${repeat==='repeat(3,120px)' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(3,120px)
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setRepeat(e.target.id)}} id="repeat(3,1fr)" className={`${repeat==='repeat(3,1fr)' ? 'text-white border-blue-700 bg-blue-500 hover:bg-blue-700':'text-black'} px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(3,1fr)
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setRepeat(e.target.id)}} id="repeat(4,1fr)" className={`${repeat==='repeat(5,1fr)' ? 'text-white border-blue-700 bg-blue-500':'text-black'} hover:bg-blue-400 px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(4,1fr)
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span onClick={(e)=>{setRepeat(e.target.id)}} id="repeat(2,1fr)" className={`${repeat==='repeat(2,1fr)' ? 'text-white border-blue-700 bg-blue-500':'text-black'} hover:bg-blue-400 px-1 bg-grey-500 font-semibold  border rounded title="Sorry you can't change it`}>
                      repeat(2,1fr)
                    </span>
                  </button>
                </td> 
              </tr>

              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>justify-items:</td>
                <td disabled={false}>
                  <button className="py-2 px-1">
                    <span id='start' onClick={(e)=>{setColumnJi(e.target.id)}} className={`${columnJi==="start"?'bg-blue-500 text-white':''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`}>
                      start
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="center" onClick={(e)=>{setColumnJi(e.target.id)}} className={`${columnJi==='center'?'bg-blue-500 text-white' : ''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`}>
                      center
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="end" onClick={(e)=>{setColumnJi(e.target.id)}}    className={`${columnJi==="end"?'bg-blue-500 text-white':''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`}>
                      end
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="stretch" onClick={(e)=>{setColumnJi(e.target.id)}} className={`${columnJi==="stretch"?'bg-blue-500 text-white':''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`} title=" items are evenly distributed in the line with equal space around them">
                      stretch
                    </span>
                  </button>
                </td> 
              </tr>

              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>align-items:</td>
                  <button className="py-2 px-1">
                    <span id="baseline" onClick={(e)=>{setColumnAi(e.target.id)}} className={`${columnAi==="baseline"?'bg-blue-500 text-white':''} hover:bg-blue-400 font-semibold  border border-blue-700 rounded`} title="the flexbox items will align themselves in order to have the baseline of their text align along a horizontal line.">
                      baseline
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="start" onClick={(e)=>{setColumnAi(e.target.id)}}    className={`${columnAi==="start"?'bg-blue-500 text-white':''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`} title="The flexbox items are aligned at the start of the cross axis. By default, the cross axis is vertical. This means the flexbox items will be aligned vertically at the top.">
                      flex-start
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="center" onClick={(e)=>{setColumnAi(e.target.id)}}   className={`${columnAi==="center"?'bg-blue-500 text-white':''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`} title="This means the flexbox items will be centered vertically.">
                      center
                    </span>
                  </button>,
                  <button className="py-2 px-1">
                    <span id="end" onClick={(e)=>{setColumnAi(e.target.id)}} className={`${columnAi==="end"?'bg-blue-500 text-white':''} hover:bg-blue-400 px-1 font-semibold  border border-blue-700 rounded`} title="This means the flexbox items will be centered vertically.">
                      flex-end
                    </span>
                  </button>
              </tr>

              {/* gap */}
              <tr className='text-left'><td className='pt-[4px] font-[500] px-[2px]'>gap:</td>
              <td disabled={false}>
                  <button className="cursor-not-allowed py-2 px-1">
                    <span className='px-1 bg-grey-500 text-black font-semibold  border rounded' title="Sorry you can't change it">
                      8px
                    </span>
                  </button>
                </td> 
              </tr>
            </table>
          </div>
        </div>
      </div>
  )
}