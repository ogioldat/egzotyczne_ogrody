import axios from 'axios';
import { fetchPlantsPending, fetchPlantsSuccess, fetchPlantsFailure } from './plantActions';

function fetchPlants(endpoint, category) {
  return dispatch => {
    dispatch(fetchPlantsPending());

    axios
      .get(endpoint, {
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
        if (res.error) {
          throw(res.error);
        }

        const parsedPlantsData = { plants: {} };

        res.data.forEach(resObj => {
          const { name, miniature_image, title, fact, image, description } = resObj.acf;
          const properties = {
            name,
            miniatureImage: miniature_image.url,
            title,
            fact,
            image: image.url,
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