// GLOBAL
 setTimeout(() => console.log('hello'),1100)

// __dirname - return dirname path

//__filename - return full filename path

// process.env = переменная
 const url = new URL('https://vitalii_kutsenko89.com/name/value#312')
console.log(url.host)
console.log(url.pathname)
console.log(url.hash)