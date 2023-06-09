var input = document.getElementById('image_uploads');
var preview = document.querySelector('.preview');

input.style.opacity = 0;
input.addEventListener('change', updateImageDisplay);
function updateImageDisplay() {
	while(preview.firstChild) {
		preview.removeChild(preview.firstChild);
	}

	if(input.files.length === 0) {
		var para = document.createElement('p');
		para.textContent = '未選擇任何檔案';
    para.style="line-height: 300px;";
		preview.appendChild(para);
	} 
	else {
		var para = document.createElement('p');
		var image = document.createElement('img');
		image.src = window.URL.createObjectURL(input.files[0]);
		preview.appendChild(image);
		preview.appendChild(para);
	}
}


/*let editItem = document.querySelector('.product_edit');
document.querySelector('#edit-btn').onclick=()=>{
    editItem.classList.toggle('active');
}
/*點擊編輯按鈕 初始表格消失

let checkItem = document.querySelector('.backstage_container' );
document.querySelector('#sub-btn').onclick=()=>{
    checkItem.classList.toggle('active');
}*/



