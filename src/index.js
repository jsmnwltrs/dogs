import $ from 'jquery';
import 'bootstrap';

import './index.scss';

$('#hello').click(() => {
  $('#test').append('<p>Hey There!</p>');
});
