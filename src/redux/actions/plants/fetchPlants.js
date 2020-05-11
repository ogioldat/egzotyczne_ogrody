import axios from 'axios';
import { fetchPlantsPending, fetchPlantsSuccess, fetchPlantsFailure } from './plantActions';

function fetchPlants(endpoint, category) {
  return dispatch => {
    dispatch(fetchPlantsPending());

    axios
      .get(endpoint, {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
      })
      .then(res => {
        if (res.error) {
          throw(res.error);
        }

        const parsedPlantsData = { plants: {} };

        res.data.forEach(resObj => {
          const {
            name,
            miniature_image,
            title,
            fact,
            image_1,
            image_2,
            image_3,
            image_4,
            image_5,
            image_6,
            description,
          } = resObj.acf;

          const properties = {
            name,
            miniatureImage: miniature_image.url,
            title,
            fact,
            images: [image_1, image_2, image_3, image_4, image_5, image_6].map(image => image.url).filter(image => image),
            description,
          };

          parsedPlantsData.plants[name] = properties;
          parsedPlantsData.category = parsedPlantsData.category || category;
        });


        dispatch(fetchPlantsSuccess(parsedPlantsData));

        return parsedPlantsData;
      })
      .catch(err => {
        dispatch(fetchPlantsFailure(err));
      });
  };
}

export default fetchPlants;