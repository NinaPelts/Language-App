class GET {
    static async getWords() {
            try {
                const resp = await fetch('https://itgirlschool.justmakeit.ru/api/words');
            return await resp.json()
        } catch(e) {
            console.error(e)
        }
}
}
export default GET