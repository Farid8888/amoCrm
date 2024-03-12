

export const dataFormat=(date)=>{
    const data = new Date(date*1000).toLocaleString()
    return data
}