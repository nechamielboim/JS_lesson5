function func1()
{
    const names=['Alice','Bob','Tiff','Bruce','Alice']
    const result=names.reduce((prev,cur)=>{
        if(prev[cur]==null)
          prev[cur]=0
        prev[cur]++
        return prev
    },{})
    return result
}
console.log(func1())