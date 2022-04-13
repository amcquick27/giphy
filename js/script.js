let url = "https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1"

fetch (url)
    .then(function(response){
    return response.json();
    })
    .then(function(data) {
    $(".main").html(`<img src = '${data.data[0].images.original.url}' />` )
});