import React, { useEffect } from 'react';
import axios from 'axios';
import { APIURL,ICone } from '../common/constants';

export const useConesDataForTableApi = async (
    setCone: React.Dispatch<React.SetStateAction<object>>,
    riskLevel: number,
    setCones: React.Dispatch<React.SetStateAction<object>>
): Promise<void> => {
    useEffect(() => {
		 callBackendApi();
    }, [riskLevel]);

    const callBackendApi = async () => {
        try {

            const response = await axios.get(APIURL);
            if (response) {
                const filteredCone: ICone[] = response.data.filter(
                    (cone: { riskLevel: number }) => cone.riskLevel === riskLevel
                )[0];
                setCone({ ...filteredCone });
                setCones([...response.data]);
            }
        } catch (err) {
            alert(err);
        }
    };
};
