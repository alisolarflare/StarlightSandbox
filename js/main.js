function update_posts() {
    if(posts) {
        console.log("posts");
        console.log(posts);
        root = document.querySelector("#posts");
        for(post of posts) {
            let section = document.createElement("section");

            let title = document.createElement("h1");
            title.className = "title";
            title.innerHTML = post.title;
            section.appendChild(title);

            let image = document.createElement("img");
            image.className = "content";
            image.src = post.image;
            image.height = 400;
            section.appendChild(image);

            let description = document.createElement("p");
            description.className = "description";
            description.innerHTML = post.description;
            section.appendChild(description);

            let tags = document.createElement("ul");
            for(tag of post.tags) {
                let t = document.createElement("li");
                t.innerHTML = tag;
                tags.appendChild(t);
            }
            section.appendChild(tags);

            root.appendChild(section);

            post.html = section;
        }
    }
}

document.addEventListener("posts_load", update_posts);
update_posts();
