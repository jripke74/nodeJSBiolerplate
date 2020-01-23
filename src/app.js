const path = require('path')
const express = require('express')
const hbs = require('hbs')
const port = process.env.PORT || 3000

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const bootstrap = path.join('')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    pageTitle: 'Home',
    title: 'Weather',
    name: 'Jeff Ripke'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About',
    title: 'About',
    name: 'Jeff Ripke'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    pageTitle: 'Help',
    helpText: 'This is some helpful text.',
    title: 'Help',
    name: 'Jeff Ripke'
  })
})

app.get('/help/*', (req, res) => {
  res.render('404', {
    pageTitle: '404 Not Found',
    title: '404',
    name: 'Jeff Ripke',
    errorMessage: 'Help article not found.'
  })
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Jeff Ripke',
    errorMessage: 'Page not found.'
  })
})

app.listen(port, () => {
  console.log(`Server running at port ` + port)
})