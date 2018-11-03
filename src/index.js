import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import dogPhoto from './images/dogsrules.jpg';
import dogGetter from './dogGetter';

$('#dogPhoto').attr('src', dogPhoto);

dogGetter.getDogs()
  .then((data) => {
    dogGetter.createDogCards(data.data.dogs);
  })
  .catch((error) => {
    console.error(error);
  });

$('#dogs').show();
