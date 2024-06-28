let  body = document.querySelector("body")
async function getPosts() {
    let res = await fetch("https://jsonplaceholder.typicode.com/comments");
    let posts = await res.json();
   
    for (let i = 0; i < 20; i++) {
        let post = posts[i];

        let box = document.createElement("div");
        let name = document.createElement("h2");
        let emali = document.createElement("p");
        let content = document.createElement("p");

        name.textContent =  post.name;
        emali.textContent = post.emali;
        content.textContent = post.body;
        
        box.appendChild(name);
        box.appendChild(emali);
        box.appendChild(content);
        
        body.appendChild(box);
    }
}

getPosts();