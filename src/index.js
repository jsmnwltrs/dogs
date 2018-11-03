import $ from 'jquery';
import 'bootstrap';
import './index.scss';

import dogGetter from './dogGetter';

dogGetter.getDogs()
  .then((data) => {
    dogGetter.createDogCards(data.data.dogs);
  })
  .catch((error) => {
    console.error(error);
  });

$('#dogs').show();
