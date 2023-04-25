let name = 'companies'
let read = (req, res, next) => res.status(200).render(
    'index',
    {
        title: '/' + name.toUpperCase(),
        subtitle: 'endpoints of ' + name
    }
)

export default read