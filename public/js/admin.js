let btn = document.querySelectorAll(".deleteBtn")

btn.forEach(button=>{
    const prodId =  button.parentElement.children[1].value
    const _csrf =  button.parentElement.children[2].value
    const article = button.parentElement.parentElement
    button.addEventListener("click",()=>{
        fetch(`/admin/product/${prodId}`,{
            method:"DELETE",
            headers:{
                "csrf-token":_csrf
            }
        })
        .then(result=>{
            console.log(result);
            return result.json()
        })
        .then(res=>{
            return article.remove()
        })
        .catch(err=>{
            console.log(err);
        })
    })

})
