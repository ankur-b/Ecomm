import CreateDataContext from "../CreateDataContext";
import {
	firestore,
	convertCollectionsSnapshotToMap,
} from "../../Firebase/Firebase";
const shopReducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_COLLECTIONS":
			return { ...state, collections: action.payload };
		case "FETCH_COLLECTIONS_START":
			return { ...state, isFetching: true };
		case "FETCH_COLLECTIONS_SUCCESS":
			return { ...state, isFetching: false, collections: action.payload };
		case "FETCH_COLLECTIONS_FAILURE":
			return {
				...state,
				isFetching: false,
				errorMessage: action.payload,
			};
		default:
			return state;
	}
};
const updateCollections = (dispatch) => (collectionsMap) => {
	dispatch({ type: "UPDATE_COLLECTIONS", payload: collectionsMap });
};
const fetchCollectionsStart = (dispatch) => () => {
    console.log("start")
	dispatch({ type: "FETCH_COLLECTIONS_START" });
};
const fetchCollectionsSuccess = (dispatch) => (collectionsMap) => {
    console.log(collectionsMap,"asssss")
    dispatch({type:"FETCH_COLLECTIONS_SUCCESS", payload: collectionsMap})
};
const fetchCollectionsFailure = (dispatch) => (errorMessage)=>{
    dispatch({type:"FETCH_COLLECTIONS_FAILURE",payload:errorMessage})
}
const fetchCollectionsStartAsync = (dispatch) => () => {
	const collentionRef = firestore.collection("collections");
    console.log("aaaaaa")
    dispatch({ type: "FETCH_COLLECTIONS_START" });
	collentionRef.get().then((snapshot) => {
		const collectionMap = convertCollectionsSnapshotToMap(snapshot);
	    dispatch({type:"FETCH_COLLECTIONS_SUCCESS", payload: collectionMap})
	}).catch(error=>dispatch({type:"FETCH_COLLECTIONS_FAILURE",payload:error.message}))
};
export const { Provider, Context } = CreateDataContext(
	shopReducer,
	{ updateCollections,fetchCollectionsFailure,fetchCollectionsStart,fetchCollectionsSuccess,fetchCollectionsStartAsync },
	{
		collections: null,
		isFetching: false,
		errorMessage: undefined,
	}
);
