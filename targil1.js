
for (let i = 0; i < catalog.length; i++) {
    catalog[i]["id"]=i+100
}   
function sortbyname()
{
    let st=" "
    let name=document.getElementById("1").value
    const arr=catalog.filter(item=>item.title.includes(name))
    for (let i = 0; i < arr.length; i++) {
        st+=arr[i].title+" "+arr[i].artist+" "+arr[i].country+" "+arr[i].company+" "+arr[i].price+" "+arr[i].year+"</br>"       
    }
    document.getElementById("p1").innerHTML=st
}      