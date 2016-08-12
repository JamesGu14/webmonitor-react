import jQuery from 'jquery'

let Ajax = {}

Ajax.get = (url, done) => {
  jQuery.ajax({
    type: 'GET',
    url: url,
    headers: {
      Authorization: window.localStorage.getItem('token')
    },
    success: function (data) {
      done(null, data)
    },
    error: function (err) {
      done(err)
    }
  })
}

Ajax.post = () => {

}

Ajax.put = () => {

}

Ajax.delete = () => {

}

export default Ajax
