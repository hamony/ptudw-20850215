let attribute = {};

attribute.createColorsList = (colors) => {
    let html = `<ul>`;
    for (const key in colors) {
        let attr_code_value = colors[key].attribute_value.toLowerCase().split(" ").join("-");
        html +=`<li class="filter-list"><input class="pixel-radio" type="radio" id="color${attr_code_value}" name="color"><label for="color${attr_code_value}" onclick="selectParam('color', '${colors[key].attribute_value}')">${colors[key].attribute_value}<span>(${colors[key].num_products})</span></label></li>`;
    }
                  
    html += `</ul>`;
    return html;
};

module.exports = attribute;