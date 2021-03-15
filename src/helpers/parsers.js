export const parseToken = () => {
    try {
        return JSON.parse(localStorage.getItem('token'))
    }
    catch {
        const raw_token = localStorage.getItem('token')
        if (raw_token !== undefined) {
            return localStorage.getItem('token')
        } else {
            return 'NOT_AUTHENTICATED'
        }
    }
}


