let helper = {};

helper.createStarList = (stars) => {
    const html = `<ul class="list">
    <li><a href="#">5 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
             class="fa fa-star"></i><i class="fa fa-star"></i> ${stars[4]}</a></li>
    <li><a href="#">4 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
             class="fa fa-star"></i><i class="fa fa-star disable"></i> ${stars[3]}</a></li>
    <li><a href="#">3 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i
             class="fa fa-star disable"></i><i class="fa fa-star disable"></i> ${stars[2]}</a></li>
    <li><a href="#">2 Star <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star disable"></i><i
             class="fa fa-star disable"></i><i class="fa fa-star disable"></i> ${stars[1]}</a></li>
    <li><a href="#">1 Star <i class="fa fa-star"></i><i class="fa fa-star disable"></i><i class="fa fa-star disable"></i><i
             class="fa fa-star disable"></i><i class="fa fa-star disable"></i> ${stars[0]}</a></li>
</ul>`;
    return html;
};

helper.createStars = (star) => {
    let html = '';
    let i;
    for (i = 1; i <= star; i++) {
        html += '<i class="fa fa-star"></i>';
    }
    for (; i <= 5; i++) {
        html += '<i class="fa fa-star disable"></i>';
    }
    return html;
};

module.exports = helper;