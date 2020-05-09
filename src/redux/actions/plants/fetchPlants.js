import { fetchPlantsPending, fetchPlantsSuccess, fetchPlantsFailure } from './plantActions';
import firebase from 'config/firebase';
import getUrl from 'helpers/getUrl';

const storage = firebase.storage();

export function fetchPlants() {
  return dispatch => {
    dispatch(fetchPlantsPending());

    const plantsRef = storage.ref('plants');

    console.log('executed')
    // plantsRef.listAll()
    //   .then(snapshot => {
    //     snapshot.prefixes.forEach(plantType => {
    //       const plantTypeName = plantType.name;
    //
    //       plantType.listAll()
    //         .then(snapshot => {
    //           snapshot.items.forEach(image =>{
    //             console.log(image)
    //           })
    //         })
    //
    //     })
    //   })




  };
}

