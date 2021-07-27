import db from '../../lib/db-admin'

const pageView = (req, res) => {
    if (!req.query.id) {
        return db.ref('views').once('value', (snapshot) => {
            const views = snapshot.val()
            var pageViews = []
            for (var key of Object.keys(views)) {
                pageViews.push({
                    slug: key,
                    count: views[key]
                })
            }

            const allViews = Object.values(views).reduce(
                (total, value) => total + value
            )

            return res.status(200).json({
                total: allViews,
                pageViews: pageViews
            })
        })
    }

    const ref = db.ref('views').child(req.query.id)

    return ref.once('value', (snapshot) => {
        res.status(200).json({
            total: snapshot.val()
        })
    })
}

export default pageView