type blog = {
    readonly blog_id?: number,
    title: string,
    summary: string,
    content: string |undefined,
    user_id: string | null,
    readonly created_at?: string,
    readonly updated_at?: string
    username?: string
    image_name?: string
}

export default blog