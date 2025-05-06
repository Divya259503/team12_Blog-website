document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts');
    if (postsContainer) {
        // Dummy posts
        const posts = [
            { title: 'Welcome to the Blog', date: '2025-04-01', content: 'This is the first post on our static blog!' },
            { title: 'Another Post', date: '2025-04-05', content: 'More content coming soon...' }
        ];

        posts.forEach(post => {
            const postEl = document.createElement('div');
            postEl.className = 'post';
            postEl.innerHTML = `
                <h3>${post.title}</h3>
                <small>${post.date}</small>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postEl);
        });
    }
});

