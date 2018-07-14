const sign = (data, url) => {
    console.log(123)
  console.log(data)
  return $.ajax({
    url: '/api/systemapi/users/' + url,
    type: 'post',
    data: data,
    success: (result) => {
      return result
    }
  })
}

const isSignin = (token) => {
  return $.ajax({
    url: '/api/systemapi/users/signin',
    type: 'post',
    headers: {
      //注意token的格式
      'X-Access-Token': token
    },
    success(result) {
      return result
    }
  })
}

module.exports = {
  sign,
  isSignin
}
