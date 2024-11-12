
for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100
}   

let st=" "
function sortbyname()
{
   
    let name=document.getElementById("1").value
    const arr=catalog.filter(item=>item.title.includes(name))
    for (let i = 0; i < arr.length; i++) {
        st+=arr[i].title+" "+arr[i].artist+" "+arr[i].country+" "+arr[i].company+" "+arr[i].price+" "+arr[i].year+"</br>"       
    }
    document.getElementById("p1").innerHTML=st
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
    st=" "
    let country=event.target.value
    const arr=catalog.filter(item=>item.country===country)
    for (let i = 0; i < arr.length; i++) {
        st+=arr[i].title+" "+arr[i].artist+" "+arr[i].country+" "+arr[i].company+" "+arr[i].price+" "+arr[i].year+"</br>"       
    }
    document.getElementById("p1").innerHTML=st

}




   