let currentPhoto = 0;
let imagesData = [
    {
        photo: './images/beautiful-landscape-1812715_1920.jpg',
        title: 'My title',
        description: 'What happened here, why is this a very nice image'
    },
    {
        photo: 'images/bridge-5499497_1920.jpg',
        title: 'Cím bridge',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus massa a orci pharetra sodales. Proin suscipit velit augue, et hendrerit neque condimentum id.'
    },
    {
        photo: 'images/fashion-6066661_1920.jpg',
        title: 'Cím fashion',
        description: 'Ut turpis diam, molestie quis gravida vitae, blandit nec nisi. Maecenas accumsan at nisl eu scelerisque. Mauris interdum viverra diam, vehicula posuere erat. Nunc mollis, nibh in commodo posuere, lorem velit accumsan lorem, at semper mi nunc sed diam. Pellentesque ac pulvinar quam.'
    },
    {
        photo: 'images/magical-6046020_1920.jpg',
        title: 'Cím magical',
        description: 'Praesent tincidunt elementum enim, sed egestas ex convallis sit amet. Mauris condimentum enim vel erat hendrerit, vitae facilisis nunc dictum.'
    },
    {
        photo: 'images/oxford-2361239_1920.jpg',
        title: 'Cím oxford',
        description: 'Nam venenatis nisi gravida ante scelerisque blandit. In cursus, ante sodales tristique tristique, dui metus consequat est, eget finibus quam nisl quis purus.'
    },
    {
        photo: 'images/tea-6069409_1920.jpg',
        title: 'Cím tea',
        description: 'Sed non sagittis sem. Mauris tempus metus tempor neque imperdiet pulvinar. Morbi convallis, augue non ultrices aliquam, nisl lorem dignissim augue, ut vestibulum nisi turpis nec elit.'
    },
    {
        photo: 'images/women-5963963_1920.jpg',
        title: 'Cím women',
        description: 'Praesent arcu arcu, dictum non tellus at, luctus sodales elit. Fusce placerat, enim vitae viverra scelerisque, magna nisi gravida mi, eget tempus sem lorem at ligula.'
    },
    {
        photo: 'images/young-370385_1920.jpg',
        title: 'Cím young',
        description: 'Aenean cursus pharetra mauris. Mauris a porttitor sapien. Maecenas ante ligula, placerat a felis vitae, iaculis tincidunt urna. Duis tempor enim fringilla, molestie urna vitae, mattis tortor.'
    }
];

let loadPhoto = (photoNumber, photoNumberOld) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('#photo-title').text(imagesData[photoNumber].title);
    $('#photo-description').text(imagesData[photoNumber].description);

    setThumbnailActive(photoNumber, photoNumberOld);
}

function setThumbnailActive(photoNumber, oldPhoto) {
    console.log(photoNumber + ", " + oldPhoto);
    let targetElement = $(`.galery-thumbnail-container .outer div[data-index="${photoNumber}"]`);
    let targetElementOld = $(`.galery-thumbnail-container .outer div[data-index="${oldPhoto}"]`);
    
    targetElementOld.parent().removeClass("active");
    targetElement.parent().addClass("active");
}

loadPhoto(currentPhoto, currentPhoto);

$('#arrow-right').click(() => {
    /*if (currentPhoto+1 < imagesData.length) {
        currentPhoto++;
        loadPhoto(currentPhoto);
    }*/

    let oldPhoto = currentPhoto;
    currentPhoto++;
    if (currentPhoto+1 > imagesData.length) { // currentPhoto === imagesData.length
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto, oldPhoto);
    //setThumbnailActive(currentPhoto, oldPhoto);
})

$('#arrow-left').click(() => {
    let oldPhoto = currentPhoto;
    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = imagesData.length-1;
    }
    loadPhoto(currentPhoto, oldPhoto);
    //setThumbnailActive(currentPhoto, oldPhoto);
})

function loadThumbnail(element, index) {
    $('.galery-thumbnail-container').append(`<div class="outer"><div class="thumb" data-index="${index}" style="background-image: url('${element.photo}');"><div class="thumbtitle">${element.title}</div></div></div>`);
}

imagesData.forEach((element, index) => {
    loadThumbnail(element, index);
});
//imagesData.forEach(loadThumbnail); // Ez is működik

setThumbnailActive(currentPhoto, currentPhoto);

$('.thumb').click((event) => {
    let targetElement = $(event.target);

    let indexClicked = targetElement.attr('data-index');
    let numberIndex = parseInt(indexClicked);
    console.log("thumbnail clicked: " + indexClicked + ", " + numberIndex);

    let oldIndex = currentPhoto;

    currentPhoto = numberIndex;
    loadPhoto(currentPhoto, oldIndex);
});