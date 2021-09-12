export default async ({ app }) => {
    app.router.afterEach(() => {
        setTimeout(() => document.querySelector('#__layout').scroll({ top: 0, behavior: 'smooth' }))
    })
}