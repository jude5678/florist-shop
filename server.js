const express = require('express')
const app = express()
const path = require('path')
const floristShopDir = path.join(__dirname, '..', 'html5up-alpha')

app.listen(9000, (req, res) => {
    console.log('listening on 9000')
})

/*app.get('/', (req, res) => {
    res.sendFile(floristShopDir + '/index.html')
})*/

//ignore files for '/'
/*app.use('/', (req, res, next) => {
    let ignoredFiles = ['aboutus.html', 'contact.html', 'elements.html', 'floralarrangements.html', 'generic.html', 'homedecor.html']
    const requestedFile = path.basename(req.url)
    if(ignoredFiles.includes(requestedFile)){
        next()
    }
})*/

//serve files for all paths
app.use(express.static(floristShopDir))