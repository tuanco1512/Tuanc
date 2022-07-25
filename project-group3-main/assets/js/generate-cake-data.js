$(document).ready(function(){
    $('.all_list').click(function(){
        $(this).toggleClass('clicked');
    });
});
$(document).ready(function(){
    $('.breads_show_list').click(function(){
        $(this).toggleClass('clicked');
        $('.breads_list').toggle('300');
    });
});

$(document).ready(function(){
    $('.patries_show_list').click(function(){
        $(this).toggleClass('clicked');
        $('.patries_list').toggle('300');
    });
});

$(document).ready(function(){
    $('.cookies_show_list').click(function(){
        $(this).toggleClass('clicked');
        $('.cookies_list').toggle('300');
    });
});

$(document).ready(function(){
    $('.cupcakes_show_list').click(function(){
        $(this).toggleClass('clicked');
        $('.cupcakes_list').toggle('300');
    });
});

$(document).ready(function(){
    $('.coffee_show_list').click(function(){
        $(this).toggleClass('clicked');
        $('.coffee_list').toggle('300');
    });
});
$(document).ready(function(){
    $('.merchandise_show_list').click(function(){
        $(this).toggleClass('clicked');
    });
});

var categorylist = [
    {id: 1, name:'SHOW ALL'},
    {id: 2, name:'BREADS'},
    {id: 3, name:'PATRIES'},
    {id: 4, name:'COOKIES'},
    {id: 5, name:'CUPCAKES'},
    {id: 6, name:'COFFEE'},
    {id: 7, name:'MERCHANDISE'},
];

var itemlist = [
    {id: 2, name: 'White breads'},
    {id: 2, name: 'Wheat breads'},
    {id: 2, name: 'Croissants'},
    {id: 2, name: 'Breadsticks'},
    {id: 2, name: 'Buns'},

    {id: 3, name: 'Pies'},
    {id: 3, name: 'Danishes'},
    {id: 3, name: 'Macarons'},
    {id: 3, name: 'Tarts'},
    {id: 3, name: 'Profiteroles'},

    {id: 4, name: 'Snickerdoodles'},
    {id: 4, name: 'Chocolate Chip Cookies'},
    {id: 4, name: 'Oatmeal Raisin Cookies'},
    {id: 4, name: 'Shortbread Cookies'},
    {id: 4, name: 'Whoopie Pies'},

    {id: 5, name: 'Standard Cupcakes'},
    {id: 5, name: 'Cinnamon Cupcake'},
    {id: 5, name: 'Cookies and Cream Cupcake'},
    {id: 5, name: 'Key lime Cupcake'},

    {id: 6, name: 'Black Coffee'},
    {id: 6, name: 'Decaf'},
    {id: 6, name: 'Espresso'},
    {id: 6, name: 'Latte'},
    {id: 6, name: 'Cappuccino'},
    {id: 6, name: 'Macchiato'},
    {id: 6, name: 'Americano'},
];

var listelement = $('.Pie_list_left .categories_list')
var listitemlement = $('.Pie_list_left .item_list')

// $.each(categorylist, function(i, data){
//     var newelement = $('.Pie_list_left .category_template').clone();

//     $(newelement).attr('data-id', data.id);
//     $('.categories_type',newelement).text(data.name);

//     listelement.append(newelement);

//     $.each(itemlist, function(i, item){
//         if(item.id == data.id){
//             var newitemelement = $('.Pie_list_left .item_template').clone();

//             $(newitemelement).attr('item-id', item.id);
//             $('.item_type',newitemelement).text(item.name);

//             listitemlement.append(newitemelement);
//             newitemelement.removeClass('item_template');
//         }
//     });
//     newelement.removeClass('category_template');
// });

$(function() {
    var _pageSize = 9;
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
        { id: 11, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 12, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 13, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 14, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 15, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 16, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 17, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 18, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' },
        { id: 19, name: 'Cake 11', type: 'Type D', price: 10000, image: 'assets/imgs/slide1.png' }
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