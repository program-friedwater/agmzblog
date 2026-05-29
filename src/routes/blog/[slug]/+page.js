import { error } from '@sveltejs/kit';

export async function load({ params }) {
    const posts = import.meta.glob(
        '/src/posts/*.svx'
    )
    const path = `/src/posts/${params.slug}.svx`
    const post = posts[path]
    if (!post) {
        throw error(404, "notfound")
    }
    const module = await post()

    return {
        content: module.default,
        meta: module.metadata
    }
}
