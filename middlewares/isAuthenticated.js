export const isAuthenticated = (req, res, next) => {
    req.isAuthenticated()
        ? next()
        :res.redirect('/login') // revisar cómo sería con React...
}