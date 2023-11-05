
// .user_navi  하단 페이지 변경 , 탭 선택시 상단 색상 변경 
function show_Posting(){
    document.querySelector(".posting").style.borderTop="solid 1px black";
    document.querySelector(".stored_post").style.borderTop="none";
    document.querySelector(".tag_post").style.borderTop="none";

    document.querySelector(".posting").style.color="#000000";
    document.querySelector(".stored_post").style.color="#737373";
    document.querySelector(".tag_post").style.color="#737373";

    document.querySelector(".posting_page").style.display="flex";
    document.querySelector(".stored_post_page").style.display="none";
    document.querySelector(".tag_post_page").style.display="none";
}

function show_Stored(){
    document.querySelector(".posting").style.borderTop="none";
    document.querySelector(".stored_post").style.borderTop="solid 1px black";
    document.querySelector(".tag_post").style.borderTop="none";

    document.querySelector(".posting").style.color="#737373";
    document.querySelector(".stored_post").style.color="#000000";
    document.querySelector(".tag_post").style.color="#737373";
    
    document.querySelector(".posting_page").style.display="none";
    document.querySelector(".stored_post_page").style.display="flex";
    document.querySelector(".tag_post_page").style.display="none";
}

function show_Tag(){
    document.querySelector(".posting").style.borderTop="none";
    document.querySelector(".stored_post").style.borderTop="none";
    document.querySelector(".tag_post").style.borderTop="solid 1px black";

    document.querySelector(".posting").style.color="#737373";
    document.querySelector(".stored_post").style.color="#737373";
    document.querySelector(".tag_post").style.color="#000000";

    document.querySelector(".posting_page").style.display="none";
    document.querySelector(".stored_post_page").style.display="none";
    document.querySelector(".tag_post_page").style.display="flex";
}