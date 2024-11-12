
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

function add()
{
    const disk={
        id:catalog[catalog.length-1].id+1,
        title:document.getElementById("title").value,
        artist:document.getElementById("artist").value,
        country:document.getElementById("country").value,
        company:document.getElementById("company").value,
        price:document.getElementById("price").value,
        year:document.getElementById("year").value
    }
    catalog.push(disk)
    alert("הפריט נוסף בהצלחה")
    title:document.getElementById("title").value=" "
    artist:document.getElementById("artist").value=" "
    country:document.getElementById("country").value=" "
    company:document.getElementById("company").value=" "
    price:document.getElementById("price").value=" "
    year:document.getElementById("year").value=" "
}

function remove()
{
    let id=document.getElementById("n").value
    let index=catalog.findIndex(item=>item.id=id)
    catalog.splice(index,1)
    alert("הפריט הוסר בהצלחה")
    document.getElementById("t").innerHTML=" "
    for (let i = 0; i < catalog.length; i++) 
    {
        mytable(catalog[i])
    }
}





   