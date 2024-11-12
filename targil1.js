
for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100
}   

let st=" "
function sortbyname()
{
    document.getElementById("t").innerHTML=" "
    let name=document.getElementById("1").value
    const arr=catalog.filter(item=>item.title.includes(name))
    for (let i = 0; i < arr.length; i++) {
        mytable(arr[i])
    }
} 


const arrcountries = catalog.reduce((prev, cur) => {
        if (!prev.includes(cur.country))
            prev.push(cur.country)
        return prev;
}, []).sort();
for (const item of arrcountries) {
    document.getElementById("countries").innerHTML+="<option>"+item+"</option>"
}
function sortbycountry()
{
    document.getElementById("t").innerHTML=" "
    st=" "
    let country=event.target.value
    const arr=catalog.filter(item=>item.country===country)
    for (let i = 0; i < arr.length; i++) {
        mytable(arr[i])
    }
}

function findbetweenyears()
{
    document.getElementById("t").innerHTML=" "
    let y1=document.getElementById("y1").value
    let y2=document.getElementById("y2").value
    const disk=catalog.find((item)=>item.year>y1&&item.year<y2)
    mytable(disk)
}

function mytable(d)
{
    document.getElementById("t").innerHTML+="<tr>"+"<td>"+d.title+"</td>"+"<td>"+d.artist+"</td>"+"<td>"+d.country+"</td>"+"<td>"+d.company+"</td>"+"<td>"+d.price+"</td>"+"<td>"+d.year+"</td>"+"</tr>"    
}









   