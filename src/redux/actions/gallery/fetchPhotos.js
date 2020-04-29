import endpoints from 'assets/data/api';
import axios from 'axios';
import { fetchPhotosPending, fetchPhotosFailure, fetchPhotosSuccess } from './galleryActions';


function fetchPhotos() {
  return dispatch => {
    dispatch(fetchPhotosPending());

    axios
      .get(endpoints.galleryImages )
      .then(res => {
        if(res.error){
          throw(res.error)
        }
        const photoUrls = res.data.map(photoObj => photoObj.acf.photo.url);
        dispatch(fetchPhotosSuccess(photoUrls));

        return photoUrls
      })
      .catch(err => {
        dispatch(fetchPhotosFailure(true))
      })
  };
}

export default fetchPhotos;