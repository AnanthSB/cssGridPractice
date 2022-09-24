export const getRandomNum = ()=>{
    // min 60
    // max upto 121
    return Math.round(Math.random()*61 + 60);
}

export const getRandomColor = ()=>{
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}
