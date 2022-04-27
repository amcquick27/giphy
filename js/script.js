$(".search-button").click(function(){
 let userInput = $(".search-term").val();
  
  fetch (`https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`)
    .then(function(response){
    return response.json();
    })
    .then(function(data) {
    $(".main").html(`<img src = '${data.data[0].images.original.url}' />` )
});
  
})

