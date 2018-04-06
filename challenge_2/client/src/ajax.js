import $ from 'jquery';

const saveData = (obj) => {
  $.ajax({
    type: 'POST',
    url: '/checkout',
    data: JSON.stringify(obj),
    contentType: 'application/json',
    success: (data) => {
      console.log('sent!');
    },
  });
};

export default saveData;
