$(function(){

    chrome.storage.sync.get('username', function(show){
        if(show.username){
            $('#name').html(show.username);
        }
    });

    $('#in').keyup(function(){
            $('#name').html($('#in').val())
    });

    $('#submit').click(function(){
        var username = $('#in').val()

        /* way of store data in browser memory*/ 
        chrome.storage.sync.set({'username':username}, function(){
            close();
        });
    });
});