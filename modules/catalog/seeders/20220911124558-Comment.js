'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let data = [{
          message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.',
          customer_id: 1,
          product_id: 9,
          parent_id: null
      },
      {
          message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.',
          customer_id: 2,
          product_id: 28,
          parent_id: null
      },
      {
          message: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
          customer_id: 3,
          product_id: 21,
          parent_id: null
      },
      {
          message: 'In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
          customer_id: 4,
          product_id: 20,
          parent_id: null
      },
      {
          message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
          customer_id: 5,
          product_id: 30,
          parent_id: null
      },
      {
          message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
          customer_id: 6,
          product_id: 9,
          parent_id: null
      },
      {
          message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.',
          customer_id: 7,
          product_id: 4,
          parent_id: null
      },
      {
          message: 'Aenean sit amet justo.',
          customer_id: 8,
          product_id: 13,
          parent_id: null
      },
      {
          message: 'Donec dapibus. Duis at velit eu est congue elementum. In hachabitasse platea dictumst.',
          customer_id: 9,
          product_id: 12,
          parent_id: null
      },
      {
          message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
          customer_id: 10,
          product_id: 20,
          parent_id: null
      },
      {
          message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
          customer_id: 1,
          product_id: 32,
          parent_id: null
      },
      {
          message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
          customer_id: 2,
          product_id: 12,
          parent_id: null
      },
      {
          message: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.',
          customer_id: 3,
          product_id: 21,
          parent_id: null
      },
      {
          message: 'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          customer_id: 4,
          product_id: 27,
          parent_id: null
      },
      {
          message: 'Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
          customer_id: 5,
          product_id: 26,
          parent_id: null
      },
      {
          message: 'Maecenas ut massa quis augue luctus tincidunt.',
          customer_id: 6,
          product_id: 26,
          parent_id: null
      },
      {
          message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.',
          customer_id: 7,
          product_id: 32,
          parent_id: null
      },
      {
          message: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitaequam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
          customer_id: 8,
          product_id: 22,
          parent_id: null
      },
      {
          message: 'Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.',
          customer_id: 9,
          product_id: 25,
          parent_id: null
      },
      {
          message: 'In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
          customer_id: 10,
          product_id: 4,
          parent_id: null
      },
      {
          message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
          customer_id: 1,
          product_id: 30,
          parent_id: null
      },
      {
          message: 'Aliquam sit amet diam in magna bibendum imperdiet.',
          customer_id: 2,
          product_id: 27,
          parent_id: null
      },
      {
          message: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
          customer_id: 3,
          product_id: 31,
          parent_id: null
      },
      {
          message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sedaccumsan felis. Ut at dolor quis odio consequat varius. Integer acleo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
          customer_id: 4,
          product_id: 27,
          parent_id: null
      },
      {
          message: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
          customer_id: 5,
          product_id: 35,
          parent_id: null
      },
      {
          message: 'Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
          customer_id: 6,
          product_id: 26,
          parent_id: null
      },
      {
          message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          customer_id: 7,
          product_id: 23,
          parent_id: null
      },
      {
          message: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eumagna vulputate luctus. Cum sociis natoque penatibus et magnis disparturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
          customer_id: 8,
          product_id: 7,
          parent_id: null
      },
      {
          message: 'Proin interdum mauris non ligula pellentesque ultrices.',
          customer_id: 9,
          product_id: 33,
          parent_id: null
      },
      {
          message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odiojusto, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
          customer_id: 10,
          product_id: 4,
          parent_id: null
      },
      {
          message: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          customer_id: 1,
          product_id: 19,
          parent_id: null
      },
      {
          message: 'Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          customer_id: 2,
          product_id: 21,
          parent_id: null
      },
      {
          message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
          customer_id: 3,
          product_id: 29,
          parent_id: null
      },
      {
          message: 'Aliquam erat volutpat. In congue. Etiam justo. Etiam pretiumiaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
          customer_id: 4,
          product_id: 21,
          parent_id: null
      },
      {
          message: 'Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.',
          customer_id: 5,
          product_id: 20,
          parent_id: null
      },
      {
          message: 'Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.',
          customer_id: 6,
          product_id: 26,
          parent_id: null
      },
      {
          message: 'Vestibulum quam sapien, varius ut, blandit non, interdum in,ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
          customer_id: 7,
          product_id: 17,
          parent_id: null
      },
      {
          message: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed,justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetramagna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.',
          customer_id: 8,
          product_id: 22,
          parent_id: null
      },
      {
          message: 'Pellentesque ultrices mattis odio.',
          customer_id: 9,
          product_id: 19,
          parent_id: null
      },
      {
          message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy.',
          customer_id: 10,
          product_id: 10,
          parent_id: null
      },
      {
          message: 'Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.',
          customer_id: 1,
          product_id: 35,
          parent_id: null
      },
      {
          message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justoeu massa. Donec dapibus.',
          customer_id: 2,
          product_id: 29,
          parent_id: null
      },
      {
          message: 'Nam nulla.',
          customer_id: 3,
          product_id: 34,
          parent_id: null
      },
      {
          message: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
          customer_id: 4,
          product_id: 12,
          parent_id: null
      },
      {
          message: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nullatempus. Vivamus in felis eu sapien cursus vestibulum.',
          customer_id: 5,
          product_id: 19,
          parent_id: null
      },
      {
          message: 'Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.',
          customer_id: 6,
          product_id: 20,
          parent_id: null
      },
      {
          message: 'Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
          customer_id: 7,
          product_id: 27,
          parent_id: null
      },
      {
          message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
          customer_id: 8,
          product_id: 1,
          parent_id: null
      },
      {
          message: 'Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
          customer_id: 9,
          product_id: 22,
          parent_id: null
      },
      {
          message: 'In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit laciniaerat.',
          customer_id: 10,
          product_id: 26,
          parent_id: null
      },
      {
          message: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut,rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sedsagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.',
          customer_id: 1,
          product_id: 2,
          parent_id: null
      },
      {
          message: 'Praesent id massa id nisl venenatis lacinia. Aenean sit ametjusto.',
          customer_id: 2,
          product_id: 11,
          parent_id: 88
      },
      {
          message: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
          customer_id: 3,
          product_id: 22,
          parent_id: 38
      },
      {
          message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          customer_id: 4,
          product_id: 26,
          parent_id: null
      },
      {
          message: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.',
          customer_id: 5,
          product_id: 35,
          parent_id: 41
      },
      {
          message: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          customer_id: 6,
          product_id: 14,
          parent_id: null
      },
      {
          message: 'Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          customer_id: 7,
          product_id: 35,
          parent_id: 41
      },
      {
          message: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. Inhac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
          customer_id: 8,
          product_id: 35,
          parent_id: 41
      },
      {
          message: 'Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.',
          customer_id: 9,
          product_id: 19,
          parent_id: 31
      },
      {
          message: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aeneansit amet justo. Morbi ut odio.',
          customer_id: 10,
          product_id: 21,
          parent_id: null
      },
      {
          message: 'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsumprimis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatistristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.',
          customer_id: 1,
          product_id: 32,
          parent_id: 11
      },
      {
          message: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
          customer_id: 2,
          product_id: 3,
          parent_id: null
      },
      {
          message: 'Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
          customer_id: 3,
          product_id: 16,
          parent_id: null
      },
      {
          message: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.',
          customer_id: 4,
          product_id: 27,
          parent_id: 14
      },
      {
          message: 'Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
          customer_id: 5,
          product_id: 25,
          parent_id: 19
      },
      {
          message: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.',
          customer_id: 6,
          product_id: 24,
          parent_id: null
      },
      {
          message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsanodio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.',
          customer_id: 7,
          product_id: 11,
          parent_id: null
      },
      {
          message: 'Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
          customer_id: 8,
          product_id: 10,
          parent_id: null
      },
      {
          message: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          customer_id: 9,
          product_id: 6,
          parent_id: null
      },
      {
          message: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
          customer_id: 10,
          product_id: 34,
          parent_id: null
      },
      {
          message: 'Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsanodio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
          customer_id: 3,
          product_id: 29,
          parent_id: null
      },
      {
          message: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duisat velit eu est congue elementum. In hac habitasse platea dictumst.',
          customer_id: 2,
          product_id: 13,
          parent_id: 8
      },
      {
          message: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          customer_id: 1,
          product_id: 33,
          parent_id: null
      },
      {
          message: 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
          customer_id: 4,
          product_id: 32,
          parent_id: 17
      },
      {
          message: 'Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer nonvelit.',
          customer_id: 5,
          product_id: 11,
          parent_id: 67
      },
      {
          message: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
          customer_id: 6,
          product_id: 6,
          parent_id: 69
      },
      {
          message: 'Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.',
          customer_id: 7,
          product_id: 10,
          parent_id: 68
      },
      {
          message: 'Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quisorci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
          customer_id: 8,
          product_id: 25,
          parent_id: null
      },
      {
          message: 'Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felissed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
          customer_id: 10,
          product_id: 31,
          parent_id: null
      },
      {
          message: 'Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
          customer_id: 9,
          product_id: 3,
          parent_id: 62
      },
      {
          message: 'Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellussemper interdum. Mauris ullamcorper purus sit amet nulla.',
          customer_id: 2,
          product_id: 7,
          parent_id: 28
      },
      {
          message: 'Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.',
          customer_id: 3,
          product_id: 32,
          parent_id: 17
      },
      {
          message: 'Nam nulla. Integer pede justo, lacinia eget, tincidunt eget,tempus vel, pede. Morbi porttitor lorem id ligula.',
          customer_id: 1,
          product_id: 5,
          parent_id: null
      },
      {
          message: 'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
          customer_id: 10,
          product_id: 13,
          parent_id: null
      },
      {
          message: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
          customer_id: 9,
          product_id: 30,
          parent_id: 21
      },
      {
          message: 'Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauriseget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
          customer_id: 8,
          product_id: 17,
          parent_id: null
      },
      {
          message: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
          customer_id: 7,
          product_id: 10,
          parent_id: 68
      },
      {
          message: 'Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.',
          customer_id: 6,
          product_id: 11,
          parent_id: null
      },
      {
          message: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
          customer_id: 5,
          product_id: 23,
          parent_id: 27
      },
      {
          message: 'Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.',
          customer_id: 4,
          product_id: 5,
          parent_id: 83
      },
      {
          message: 'Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitaequam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donecposuere metus vitae ipsum.',
          customer_id: 3,
          product_id: 29,
          parent_id: 71
      },
      {
          message: 'Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
          customer_id: 1,
          product_id: 28,
          parent_id: null
      },
      {
          message: 'Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.',
          customer_id: 2,
          product_id: 13,
          parent_id: 8
      },
      {
          message: 'Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          customer_id: 3,
          product_id: 31,
          parent_id: null
      },
      {
          message: 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
          customer_id: 4,
          product_id: 4,
          parent_id: 30
      },
      {
          message: 'Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed,nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
          customer_id: 5,
          product_id: 34,
          parent_id: null
      },
      {
          message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.',
          customer_id: 6,
          product_id: 11,
          parent_id: 88
      },
      {
          message: 'Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien utnunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metusvitae ipsum. Aliquam non mauris.',
          customer_id: 7,
          product_id: 35,
          parent_id: 41
      },
      {
          message: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.',
          customer_id: 8,
          product_id: 28,
          parent_id: 92
      },
      {
          message: 'Aenean lectus. Pellentesque eget nunc.',
          customer_id: 9,
          product_id: 1,
          parent_id: null
      }
    ];
    await queryInterface.bulkInsert('Comments', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Comments', null, {});
  }
};
