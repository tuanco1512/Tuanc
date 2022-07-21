$(function() {
    var _pageSize = 6;
    var currentPage = 1;

    // 9, 11 > 2
    // 3, 11 > 4
    // 5, 11 > 3

    var cakeList = [
        { id: 1, name: 'Cake 1', type: 'Type A', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 2, name: 'Cake 2', type: 'Type A', price: 20000, image: 'assets/imgs/slide1.png' },
        { id: 3, name: 'Cake 3', type: 'Type A', price: 30000, image: 'assets/imgs/slide1.png' },
        { id: 4, name: 'Cake 4', type: 'Type B', price: 40000, image: 'assets/imgs/slide1.png' },
        { id: 5, name: 'Cake 5', type: 'Type B', price: 50000, image: 'assets/imgs/slide1.png' },
        { id: 6, name: 'Cake 6', type: 'Type B', price: 60000, image: 'assets/imgs/slide1.png' },
        { id: 7, name: 'Cake 7', type: 'Type C', price: 70000, image: 'assets/imgs/slide1.png' },
        { id: 8, name: 'Cake 8', type: 'Type C', price: 80000, image: 'assets/imgs/slide1.png' },
        { id: 9, name: 'Cake 9', type: 'Type C', price: 90000, image: 'assets/imgs/slide1.png' },
        { id: 10, name: 'Cake 10', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 11, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' }
    ];

    var _tmpElement = $('.P_Img.item_template');

    // pagination
    function loadData(pageNumber) {
        $('.P_Img_list .row .P_Img:not(.item_template)').remove();

        // 1-0>8
        // 2-9>17
        // 3-18>26
        var startFrom = (pageNumber - 1) * _pageSize;
        var endAt = startFrom + _pageSize - 1;

        $.each(cakeList, function(index, cake) {
            if (index >= startFrom && index <= endAt){

                // create a new element from a template
                var newItemElement = _tmpElement.clone();
                newItemElement.removeClass('item_template');
                
                // update data into element
                $('img', newItemElement).attr('src', cake.image);
                $('.P_Img-type', newItemElement).text(cake.type);
                $('.P_Img-name', newItemElement).text(cake.name);
                $('.P_Img-price', newItemElement).text(cake.price);
                
                // Insert element into the page
                $('.P_Img_list .row').append(newItemElement);
            }
        });

        $('.P_list_currentPageNumber').text(pageNumber);
    };

    $('.P_list_previous').on('click', function() {
        if (currentPage > 1) {
            currentPage--;
            loadData(currentPage);
        }
    });

    $('.P_list_next').on('click', function() {
        var lastPageNumber = Math.ceil(cakeList.length / _pageSize);
        if (currentPage < lastPageNumber) {
            currentPage++;
            loadData(currentPage);
        }
    });

    loadData(1);
});