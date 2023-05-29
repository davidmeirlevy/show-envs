const {start, app} = require('@greenpress/api-kit/dist')

const html = `
<style>table {width: 100%;} th {background-color: #eee;} td,th {border: 1px solid #ccc; padding: 10px;}</style>
<table>
<tr>
<th>KEY</th>
<th>VALUE</th>
</tr>
    ${Object.entries(process.env).map(([key, value]) => `<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
</table>`

app().use('*', (req, res) => {
    res.set('content-type', 'text/html')
    res.send(html)
})

start('show-envs', process.env.PORT || 3000, '0.0.0.0')
