# crud-app

Api documentation

baseurl: https://mzuri-crud-api.herokuapp.com/

post requests: /api/bucketListItems , request body example:
{
"name":"maryam",
"email": "maryam@mail.com"
"country":"Nigeria"
}

get requests: /api/bucketListItems

delete requests: '/api/bucketListItems/'+ item._id

update requests:'/api/bucketListItems/' + item._id',  request body example:
{
"name":"maryam",
"email": "maryam@mail.com"
"country":"Nigeria"
}

