type user = {
    readonly user_id?: number,
    email: string,
    username: string,
    first_name?: string,
    last_name?: string
    status?: number
    password?: string,
    confirm_password?: string,
    readonly image_name?: string
}


export default user