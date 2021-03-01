import axios from 'axios';
import { APIURL } from '../common/constants';

export const useFetchConesApi = async (setCone: React.Dispatch<React.SetStateAction<object>>, riskLevel: number):Promise<void> => {
    try {
        const response = await axios.get(APIURL);
        if (response) {
            const filteredCone:Array<object> = response.data.filter((cone: { riskLevel: number; }) => cone.riskLevel === riskLevel)[0];
            response && setCone({ ...filteredCone });
        }
    } catch (err) {
        alert(err);
    }
};