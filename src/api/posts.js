export async function fetchPosts(limit = 10) {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        if (!res.ok) {
            throw new Error('Failed to fetch posts');
        }
        const data = await res.json();
        return data.slice(0, limit);
    } catch (err) {
        console.log(err);
        return [];
    }
}