document.addEventListener("DOMContentLoaded",function(){
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    var items_navbar = $$('.item_navbar');

    items_navbar.forEach((item, index) =>{
        item.onclick = function(){
            $('.item_navbar.menu_navbar-active').classList.remove('menu_navbar-active');
            item.classList.add('menu_navbar-active');
        }
    });

    // control direction music
    const icon_play =  $('.fa-play-circle');
    const icon_pause =  $('.fa-pause-circle');
    const currentSong = $('.song_current');
    icon_pause.style.display = 'none';
    $('.music_pause-play').onclick = function(){
        if(icon_play.style.display == 'none'){
            icon_play.style.display = 'block';
            icon_pause.style.display = 'none';
            currentSong.pause()
        }else{
            icon_pause.style.display = 'block';
            icon_play.style.display = 'none';
            currentSong.setAttribute('src','./asset/audio/lalung.mp3')
            currentSong.play()
        }
    }

    // INTERACTIVE MUSIC
    // microphone
    const icon_onMic =  $('.fa-microphone-alt');
    const icon_offMic =  $('.fa-microphone-alt-slash');
    icon_onMic.style.display = 'none';
    $('.interactive_mic').onclick = function(){
        if(icon_offMic.style.display == 'none'){
            icon_offMic.style.display = 'block';
            icon_onMic.style.display = 'none';
        }else{
            icon_offMic.style.display = 'none';
            icon_onMic.style.display = 'block';
        }
    }
    // heart
    const icon_onLike =  $('.fas.fa-heart');
    const icon_offLike =  $('.far.fa-heart');
    icon_onLike.style.display = 'none';
    $('.interactive_like').onclick = function(){
        if(icon_offLike.style.display == 'none'){
            icon_offLike.style.display = 'block';
            icon_onLike.style.display = 'none';
        }else{
            icon_offLike.style.display = 'none';
            icon_onLike.style.display = 'block';
        }
    }
    // volume
    const icon_mute =  $('.fas.fa-volume-mute');
    const icon_noMute =  $('.fas.fa-volume-down');
    icon_mute.style.display = 'none';
    $('.interactive_volume').onclick = function(){
        if(icon_noMute.style.display == 'none'){
            icon_noMute.style.display = 'block';
            icon_mute.style.display = 'none';
            currentSong.muted = false;
        }else{
            icon_noMute.style.display = 'none';
            icon_mute.style.display = 'block';
            currentSong.muted = true;
        }
    }
});