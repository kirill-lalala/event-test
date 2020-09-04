import { FormErrors } from 'redux-form';

const validateEmail = (email: string) => {
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(email.toLowerCase());
};

const validateUrl = (url: string) => {
  return /^[a-z]+:\/\//i.test(url);
};

type Values = {
  organizer: string;
  phone: string;
  email: string;
  city: string;
  mainPhoto: string;
  eventPhoto: string;
  videoRef?: string;
  category: string;
  rating: string;
  address: string;
  detailedDescription: string;
  photos: any;
};

const validate = (values: Values): FormErrors<{}, string> => {
  const errors: any = {};
  const REQUIRED = 'Это поле обязательно для заполнения';

  // organizer
  if (values.organizer?.length > 50) {
    errors.organizer = `Максимальная длина 50 символов, введено ${values.organizer?.length}`;
  }
  if (!values.organizer) {
    errors.organizer = REQUIRED;
  }

  //phone
  if (!values.phone) {
    errors.phone = REQUIRED;
  }

  //email
  if (!values.email) {
    errors.email = REQUIRED;
  } else {
    if (!validateEmail(values.email)) {
      errors.email = 'Некорректный email';
    }
  }

  //city
  if (!values.city) {
    errors.city = REQUIRED;
  }

  /* PHOTOS */
  //mainPhoto
  if (!values.photos?.mainPhoto) {
    errors.photos = {
      ...errors.photos,
      mainPhoto: REQUIRED,
    };
  }

  //eventPhoto
  if (!values.photos?.eventPhoto) {
    errors.photos = {
      ...errors.photos,
      eventPhoto: REQUIRED,
    };
  }

  //video
  if (values.videoRef && !validateUrl(values.videoRef)) {
    errors.videoRef = 'Некорректная ссылка';
  }

  //category
  if (!values.category) {
    errors.category = REQUIRED;
  }

  //rating
  if (!values.rating) {
    errors.rating = REQUIRED;
  }

  //address
  if (!values.address) {
    errors.address = REQUIRED;
  }

  //detailedDescription
  if (!values.detailedDescription) {
    errors.detailedDescription = REQUIRED;
  }

  return errors;
};

export default validate;
