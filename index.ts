import app from './src/app'
import './src/database'

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})