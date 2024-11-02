document.addEventListener('DOMContentLoaded', () => {
    fetch('data/posts.json')
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById('post-container');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <a href="${post.link}">
                        <img src="${post.image}" alt="${post.title}">
                        <h3>${post.title}</h3>
                    </a>
                    <p>${post.snippet}</p>
                    <small>${post.date}</small>
                `;
                postContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading posts:', error));
});
