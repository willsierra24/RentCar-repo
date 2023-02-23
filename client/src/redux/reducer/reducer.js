import { GET_ALL_USER,GET_ALL_CARS, GET_CAR_BY_ID, POST_CAR, POST_ACCESSORIES, POST_USER, SEARCH,GET_ALL_ACCESSORIES, ACCESO,GET_ALL_BILLING,GET_ALL_CARREVIEW,GET_ALL_ACCREVIEW} from '../actions/actions'

const initialState = {
    cars: [],
    accessories: [],
    allaccessories:[],
    allbilling:[],
    allcarreview:[],
    allaccreview:[],
    allCars: [],
    users: [],
    usersiD: [],
    detailCar: {},
    acceso: {}
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCESO:
      return {
        ...state,
        acceso: action.payload,
      }; 
      
        case GET_ALL_USER:
            return {
                ...state,
                usersiD: action.payload,
            }
        case GET_ALL_CARS:
            return {
                ...state,
                cars: action.payload,
                allCars: action.payoad
            }

        case GET_ALL_ACCREVIEW:
            return {
                ...state,
                allaccreview: action.payload,
            }

        case GET_ALL_BILLING:
                return {
                    ...state,
                    allbilling: action.payload,
                }
        case GET_ALL_CARREVIEW:
                return {
                    ...state,
                    allcarreview: action.payload,
                }

        case GET_ALL_ACCESSORIES:
            return {
                ...state,
                allaccessories: action.payload,
            }
            
        case GET_CAR_BY_ID:
            return {
                ...state,
                detailCar: action.payload
            }
        case SEARCH:
            let search = []
            search = state.cars?.filter((c) => c.location.toLowerCase().includes(action.payload.toLowerCase()))
            return {
                ...state,
                cars: [...search]
            }
        case POST_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case POST_ACCESSORIES:
            return {
                ...state,
                accessories: [...state.accessories, action.payload]
            }
        case POST_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }

        default:
            return state
    }
}

export default rootReducer